import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';
import App from './app';
import Amplify from "aws-amplify";
import config from "./config";


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
Amplify.configure({ Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID, identityPoolId: config.cognito.IDENTITY_POOL_ID, userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }, Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    }
});
ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();