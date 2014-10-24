var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'number',
        group: 'string', 
        preferred: 'number',
        others: 'array',
        items: 'array'
    }
    
});