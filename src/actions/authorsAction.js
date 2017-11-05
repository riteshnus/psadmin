"use strict"

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi= require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorAction = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author)

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author)

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDTAE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function(id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorAction;