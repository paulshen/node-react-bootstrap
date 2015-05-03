var React = require('react');
var SampleComponent = require('components/SampleComponent');

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
