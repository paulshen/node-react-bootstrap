var React = require('react');
var ReactRouter = require('react-router');
var IndexPage = require('pages/IndexPage');

var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={IndexPage} />
    <Route path="t/:id" handler={IndexPage} />
  </Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root) {
  React.render(<Root />, document.getElementById('container'));
});

var $ = require('jquery');
console.log($);
