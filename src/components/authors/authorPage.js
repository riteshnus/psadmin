"use strict"

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorAction = require('../../actions/authorsAction');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('../authors/authorList');


var AuthorPage = React.createClass({
    getInitialState() {
      return {
          authors: AuthorStore.getAllAuthors()
      }
    },

    /*componentDidMount() {
        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors()})
        }
    },*/

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },

    //Clean up when this component is unmounted
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default" > Add Author </Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;