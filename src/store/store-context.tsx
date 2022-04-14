import { ProductType } from '../data/products';
import { createContext } from 'react';
import { UserAddress } from '../pages/cart/Shipping';

export type CartItems = Array<ProductType>;

const Store = createContext({
  cartItems: [] as CartItems,
  shippingAddress: null as UserAddress | null,
  addToCart: (product: ProductType) => {},
  removeFromCart: (product: ProductType) => {},
  saveAddress: (address: UserAddress) => {},
});

export default Store;
