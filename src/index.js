import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import App from './components/App';
import './index.css';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
