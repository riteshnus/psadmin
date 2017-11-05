"use strict"

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Plural sight Administrator</h1>
                <p>React, React router, flux for responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;