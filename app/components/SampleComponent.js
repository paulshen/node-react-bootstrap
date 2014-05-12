/** @jsx React.DOM */

var React = require('React');

var SampleComponent = React.createClass({displayName: 'SampleComponent',
  render: function() {
    return React.DOM.div(null, "omnomnom");
  }
});

module.exports = SampleComponent;
