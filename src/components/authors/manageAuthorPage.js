"use strict"

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorAction = require('../../actions/authorsAction');
var AuthorStore = require('../../stores/authorStore');

var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
      Router.Navigation
    ],

    statics: {
      willTransitionFrom : function (transition, component) {
          if(component.state.dirty && !confirm('leave without saving?')){
              transition.abort();
          }
      }
    },

    componentWillMount: function () {
        var authorId = this.props.params.id;

        if(authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },
    setAuthorState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid() {
        var formIsValid = true;
        this.state.errors ={}; // clear any previous error

        if(this.state.author.firstName.length < 3 ){
            this.state.errors.firstName = 'First Name must be 3 char';
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3 ){
            this.state.errors.lastName = 'Last Name must be 3 char';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors})
        return formIsValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()){
            return;
        }

        if(this.state.author.id) {
            AuthorAction.updateAuthor(this.state.author);
        }else {
            AuthorAction.createAuthor(this.state.author);
        }
        // AuthorApi.saveAuthor(this.state.author);
        this.setState({dirty: false})
        toastr.success('Author Saved');
        this.transitionTo('authors');
    },

    render() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;