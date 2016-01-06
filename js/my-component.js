var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      count: 5,
      welcome: 'Welcome Man'
    }
  },

  increamentCount: function() {
    this.setState({
      count: this.state.count + 1
    })
  },

  render: function() {
    return(
      <div className="my-component">
        
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increamentCount}>Increament</button>
      </div>
    )
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('mount-point')
)