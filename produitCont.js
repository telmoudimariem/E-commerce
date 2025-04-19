const multer = require("multer");
const mongoose = require('mongoose');

const Produit = require('../Models/Produit');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const filename = uuidv4() + ext;
      cb(null, filename);
    },
  });

  exports.getAllProduit = async (req, res) => {
    try{
        const produits = await Produit.find();
        res.status(200).json(produits);
    
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
  };
  exports.getProduitById = async(req, res) => {
    try{
        const produit = await Produit.findById(req.params.id);
        if (!produit){
            return res.status(404).json({message: 'product not found' });
        }
        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  };
 

exports.createProduit = async (req, res) => {
  try {
    const newProduit = new Produit({
      nom: req.body.nom,
      code: req.body.code,
      color: req.body.color,
      price: req.body.price,
      description: req.body.description,
      quantite: req.body.quantite,
    });

    await newProduit.save();
    res.status(201).json({ message: "Produit ajouté avec succès !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
    
  exports.updateProduitById = async (req, res) => {
    try {
        const produit = await Produit.findById(req.params.id);
        if (!produit) {
            return res.status(404).json({message: 'produit not found'});

        }
        produit.nom = req.body.nom || Produit.nom;
        produit.image = req.body.image || Produit.image;
        produit.price = req.body.price || Produit.price;
        produit.color = req.body.color || Produit.color;
        produit.description = req.body.description || Produit.description;

        const updateProduit = await produit.save();
        res.status(200).json(updateProduit);
        
    }catch (error){
        console.error(error);
        res.status(400).json({message:"Erreur lors de la mise à jour du produit"});
    }
  };
exports.delateProduitById = async (req, res) =>{
    try{
        const produit = await Produit.findById(req.params.id);
        if (!produit) {
            return res.status(404).json({message: 'produit not found'});

        }
        res.status(200).json({message: 'product delated successfully'});
    } catch (error) {
        //console.error(error);
        res.status(500).json({message: "erreur lors de la suppression"});
    }
};






