/*global me, app*/
var Router = require('ampersand-router');
var Autocomplete = require('./pages/autocomplete');
var Spellcheck = require('./pages/spellcheck');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'preview': 'home',
        'autocomplete': 'autocomplete',
        'spellcheck' : 'spellcheck'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new Autocomplete());
    },

    autocomplete: function() {
        this.trigger('page', new Autocomplete());
    },

    spellcheck: function() {
        this.trigger('page', new Spellcheck());
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
