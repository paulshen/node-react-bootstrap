/** @jsx React.DOM */
var React = require('React');
var IndexPage = require('./pages/IndexPage');

React.renderComponent(
  <IndexPage />,
  document.getElementById('container')
);
