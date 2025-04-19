const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
    nom: {type: String, required:true},
    code: {type:String, required:true },
    //Image: {type:String, required:true },
    color: {type:String, required:true },
    price: {type:Number, required:true },
    description: {type:String, required:true },
    quantite: {type:Number, require:true},

})
const Produit = mongoose.model('Produit', ProduitSchema);

module.exports = Produit;