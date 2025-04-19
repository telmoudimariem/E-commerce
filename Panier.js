const mongoose = require('mongoose');
const PanierSchema = new mongoose.Schema({
    quantite: {type:String, required:true},
    size: {type:String, required:true },
})
const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;
