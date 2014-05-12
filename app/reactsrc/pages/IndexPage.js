/** @jsx React.DOM */

var React = require('React');
var SampleComponent = require('../components/SampleComponent.js');

var IndexPage = React.createClass({
  render: function() {
    return (
      <div>
        <SampleComponent />
        <div>kombucha!</div>
      </div>
    );
  }
});

module.exports = IndexPage;
