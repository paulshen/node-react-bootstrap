/** @jsx React.DOM */

var React = require('React');
var SampleComponent = require('../components/SampleComponent.js');

var IndexPage = React.createClass({displayName: 'IndexPage',
  render: function() {
    return (
      React.DOM.div(null, 
        SampleComponent(null ),
        React.DOM.div(null, "kombucha!")
      )
    );
  }
});

module.exports = IndexPage;
