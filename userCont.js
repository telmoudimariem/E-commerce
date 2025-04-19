const saltRounds = 10;
const bcrypt = require ('bcrypt');
const Users = require('../Models/Users');
const mongoose = require('mongoose');
exports.getAllUsers = async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.getArtisan= async (req, res) =>{
    try{
        const users = await Users.find({role:'artisan'});
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json ({message: error.message});
    }
  };
  exports.getClient = async (req, res) =>{
    try{
        const users = await Users.find({role:'client'});
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json ({message: error.message});
    }
  };
  exports.getUserById = async (req, res) =>{
    try{
        const User = await Users.findById(req.params.id);
        if (!User) {
            return res.status(404).json ({message: 'User not found'});
        }
        res.status (200).json(User);

    } catch (error) {
        res.status(500).json ({messge: error.message});
    }
  };
  exports.createUser = async (req, res) => {
    console.log('User data:', req.body)
    const hashedPassword = await bcrypt.hash (req.body.password, 10);
    console.log('hashed Password:', hashedPassword);
    
    const newUser = new Users({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hashedPassword,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        role: req.body.role

    });
    console.log('New User Object', newUser)
    try{
        const savedUser = await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
      console.error(error);
        res.status(400).json({message: error.message});
    }
  };
  exports.updateUserById = async (req, res) => {
    try {
      const user = await Users.findById(req.params.id); // correction ici
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Mettre à jour les champs uniquement s'ils sont présents dans req.body
      user.nom = req.body.nom || user.nom;
      user.prenom = req.body.prenom || user.prenom;
      user.email = req.body.email || user.email;
      user.telephone = req.body.telephone || user.telephone;
      user.adresse = req.body.adresse || user.adresse;
      user.role = req.body.role || user.role;
  
      // Si mot de passe fourni, le hasher avant mise à jour
      if (req.body.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
      }
  
      // Sauvegarde dans la base
      await user.save();
  
      console.log(user);
      res.status(200).json(user);
  
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteUserById = async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid User ID' });
      }
  
      const deletedUser = await Users.findByIdAndDelete(req.params.id); // la bonne méthode c'est findByIdAndDelete (plus récent que findByIdAndRemove)
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
  
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
      res.status(500).json({ message: error.message });
    }
  };
  