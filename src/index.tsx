import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-19jj922m.us.auth0.com'
      clientId='udKlSEpcQbruRiCKnFHCfH0P5uB9I444'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
