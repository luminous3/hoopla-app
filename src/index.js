import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import App from './components/App/App';
import Content from './components/Content/Content';
import './index.css';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Content} />
          <Route path="pages/:id" component={Content} />
        </Route>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
