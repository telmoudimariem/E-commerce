const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: {type: String, required: true },
    prenom: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    role: { type: String, enum: ['client', 'admin', 'artisan'], required: true },
    telephone: {type: Number, required: true },
    adresse: { type: String, required: true }
    


    
})
const User = mongoose.model('User', UserSchema);

module.exports = User;