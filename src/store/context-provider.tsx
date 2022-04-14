import { ProductType } from '../data/products';
import React, { FC, useEffect, useReducer, useState } from 'react';
import Store from './store-context';
import { UserAddress } from '../pages/cart/Shipping';

enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

//export type ProductCart = ProductType & { qty: number };

export type CartItems = Array<ProductType>;

interface Action {
  type: ActionType;
  payload: ProductType;
}

type State = {
  cartItems: CartItems;
  // loading: boolean;
  // error: null | string;
};

const STORAGE_CART = localStorage.getItem('reactts-cart');
const STORAGE_ADDRESS = localStorage.getItem('reactts-address');

const initialState = {
  cartItems: STORAGE_CART ? JSON.parse(STORAGE_CART) : ([] as CartItems),
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const product = action.payload;
      const exist = state.cartItems.find((p) => p._id === product._id);

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === product._id
              ? { ...product, qty: product.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, qty: Number(1) }],
        };
      }
    case ActionType.REMOVE_FROM_CART:
      const productT = action.payload;
      const existT = state.cartItems.find((p) => p._id === productT._id);

      if (existT?.qty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item._id !== productT._id
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === productT._id
              ? { ...productT, qty: productT.qty - 1 }
              : item
          ),
        };
      }

    default:
      return state;
  }
};

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const ContextProvider: FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [shippingAddress, setShippingAddress] = useState<UserAddress>(
    STORAGE_ADDRESS ? JSON.parse(STORAGE_ADDRESS) : (null as UserAddress | null)
  );

  const addToCart = (product: ProductType) => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: product });
  };
  const removeFromCart = (product: ProductType) => {
    dispatch({ type: ActionType.REMOVE_FROM_CART, payload: product });
  };

  const saveAddress = (address: UserAddress) => {
    setShippingAddress(address);
  };

  useEffect(() => {
    localStorage.setItem('reactts-cart', JSON.stringify(state.cartItems));
    localStorage.setItem('reactts-address', JSON.stringify(shippingAddress));
  }, [state.cartItems, shippingAddress]);

  const values = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    shippingAddress,
    saveAddress,
  };
  return <Store.Provider value={values}>{props.children}</Store.Provider>;
};

export default ContextProvider;
