import React from 'react';
import Campobase from './componentes/CampobaseComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

import LoginScreen from './componentes/Login';
import SignUpScreen from './componentes/SignUp';

const {store, persistor} = ConfigureStore();


export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Campobase/>
      </PersistGate>
      </Provider>
    );
  }
}
