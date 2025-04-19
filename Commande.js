const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    User_id: {type: String, required: true },
    orderItems: [{
        nom: { type: String },
        email: {type: String},  
        image: { type: String },
        prix: { type: Number },
        quantity: { type: String }
      }],
      shippingAddress: {
        rue: { type: String },
        ville: { type: String },
        postalCode: { type: String }
      },
      paymentMethod: { type: String },
      totalPrice: { type: Number },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      deliveredAt: { type: Date },
    }, {
      timestamps: true

})
const Commande = mongoose.model('Commande', CommandeSchema);

module.exports = Commande;