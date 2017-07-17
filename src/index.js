import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import filterApp from './reducers';

const finalCreateStore = compose()(createStore);

const store = finalCreateStore(filterApp);

let rootElement = document.getElementById('root');
render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>,
  rootElement
);
