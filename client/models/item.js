var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        entityID: 'number', 
        tags: 'array',
        start: 'number',
        stop: 'number',
        text: 'string'
    },
    
});