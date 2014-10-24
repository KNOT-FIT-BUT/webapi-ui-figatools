var _ = require('underscore');
var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'Annotation preview',
    template: templates.pages.autocomplete


});
