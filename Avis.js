const mongoose = require('mongoose');


const AvisSchema = new mongoose.Schema ({
    note: {type:Number, required: true, min: 1, max: 5},
    cmmantaire: {type:String, required:true},
    date: {type: Date, default: Date.now},
    nom: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
    nom: {type: mongoose.Schema.Types.ObjectId, ref: 'Produit', required:true}
});


const Avis = mongoose.model('Produit', AvisSchema);

module.exports = Avis;