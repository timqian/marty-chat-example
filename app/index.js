/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty');
var Router = require('./router');
var ServerUpdatesSocket = require('sources/serverUpdatesSocket');

window.React = React; // For React Developer Tools
window.Marty = Marty; // For Marty Developer Tools

if (process.env.NODE_ENV !== 'test') {
  ServerUpdatesSocket.open();
  Router.run(function (Handler, state) {
    React.render(<Handler {...state.params} />, document.getElementById('app'));
  });
}