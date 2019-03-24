var React = require('react')
var ReactDOM = require('react-dom')

require('./index.css')

var App = require('./components/App')

/**
  * ReactDOM.render() takes 2 args
  * 1. a react component
  * 2. a dom element to append the component onto
  */

ReactDOM.render(<App />, document.getElementById('app'))