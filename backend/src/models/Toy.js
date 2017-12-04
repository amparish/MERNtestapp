var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Toy = new Schema({
    toy: {
        type: String
    },
}, {
    collection: 'toys'
});

module.exports = mongoose.model('Toy', Toy);