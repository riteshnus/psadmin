var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var IntializeAction = require('../src/actions/intializeAction');

IntializeAction.initApp();

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
})






/*function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}
window.addEventListener('hashchange',render);
render();*/

// React.render(<Home />, document.getElementById('app'));