// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { GithubProvider } from './context/context';
// import { Auth0Provider } from '@auth0/auth0-react';
// const root = ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Auth0Provider
//       domain='dev-pu8wyk-g.us.auth0.com'
//       clientId='GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh'
//       redirectUri={window.location.origin}
//       cacheLocation='localstorage'
//     >
//       <GithubProvider>
//         <App />
//       </GithubProvider>
//     </Auth0Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b8k2re1sdaqu33ze.us.auth0.com"
      // clientId="GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh"
      clientId="TlntXh5oQEx5BRgsssK0xObmpZGy79Ra"
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);


