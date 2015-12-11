import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, DefaultRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

var IndexPage = require('pages/IndexPage');

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Routes = (
  <Route path="/" component={App}>
    <Route path="t/:id" component={IndexPage} />
    <IndexRoute component={IndexPage} />
    <Route path="*" component={IndexPage} />
  </Route>
);

let history = useScroll(createBrowserHistory)();

ReactDOM.render(
  <Router routes={Routes} history={history} />,
  document.getElementById('container')
);

var $ = require('jquery');
console.log($);
