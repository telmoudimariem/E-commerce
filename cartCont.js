const Panier = require('./Models/Panier');
const Produit = require('./Models/Produit');
const User = require('../Models/User');


exports.addToCart = (req, res) => {
    const userId = req.user.id;
    const produitId = req.query.Produit.Id;

    const item = {
        Produit: produitId, 
        quantite: req.body.orderQuantity == null|| 0?1 : req.body.orderQuantity,
        orderState: {
            
        }
    }
};