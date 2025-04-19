const mongoose = require ('mongoose');
const Categorie = require('../Models/categorie');

exports.getAllCategorie = async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategorieById = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id);
        if (!categorie) {
            return res.status(404).json({ message: 'Categorie not found' });
        }
        res.status(200).json(categorie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategorie = async (req, res) => {
    const categorie = new Categorie({
        categorie_name: req.body.categorie_name,
        description: req.body.description,
    });
    try {
        const newCategorie = await categorie.save();
        res.status(201).json(newCategorie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCategorieById = async (req, res) => {
    try {
      const categorie = await Categorie.findById(req.params.id);
  
      if (!categorie) {
        return res.status(404).json({ message: 'Categorie not found' });
      }
  
      categorie.categorie_name = req.body.categorie_name || categorie.categorie_name;
  
      const updatedCategorie = await categorie.save();
  
      res.status(200).json(updatedCategorie);
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  exports.deleteCategorieById = async (req, res) => {
    try {
      const deletedCategorie = await Categorie.findByIdAndDelete(req.params.id);
  
      if (!deletedCategorie) {
        return res.status(404).json({ message: 'Categorie not found' });
      }
  
      res.status(200).json({ message: 'Categorie deleted successfully' });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };