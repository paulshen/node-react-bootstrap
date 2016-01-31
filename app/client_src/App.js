import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, DefaultRoute, browserHistory } from 'react-router';

import IndexPage from 'pages/IndexPage';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

var Routes = (
  <Route path="/" component={App}>
    <Route path="t/:id" component={IndexPage} />
    <IndexRoute component={IndexPage} />
    <Route path="*" component={IndexPage} />
  </Route>
);

ReactDOM.render(
  <Router routes={Routes} history={browserHistory} />,
  document.getElementById('container')
);

var $ = require('jquery');
console.log($);
