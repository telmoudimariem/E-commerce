const Commande = require('../Models/Commande');
const mongoose = require ('mongoose');

exports.getAllCommandes =async (req, res) => {
    try {
        const commandes = await Commande.find()
        .populate('user', 'nom prenom')
        .populate('client', 'nom prenom')
        .populate('artisant', 'nom prenom');
        console.log("commandes", commandes),
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};


exports.getAllCommandesForUser= async (req, res) => {
    try {
        const commandes = await Commande.find()
        .populate('user', 'nom premon')
        ;
        console.log("commandes",commandes);
        res.status(200).json(commandes);
    } catch (error) {
        res.status (500).json({ message: error.message});
    }
};

exports.getAllCommandesForClient = async (req, res) => {
    console.log('req.params.id', req.params.id);
    try {
        const commandes = await Commande.find({User: req.paarams.id})
        .populate('user', 'nom premon')
        ;
        console.log("commandes",commandes);
        res.status(200).json(commandes);
    } catch (error) {
        res.status (500).json({ message: error.message});
    }
};

exports.getAllCommandesForArtisan = async (req, res) => {
    console.log('req.params.id', req.params.id);
    try {
        const commandes = await Commande.find({User: req.paarams.id})
        .populate('user', 'nom premon')
        ;
        console.log("commandes",commandes);
        res.status(200).json(commandes);
    } catch (error) {
        res.status (500).json({ message: error.message});
    }
};

exports.getAllCommandesById = async (req, res) => {
    try {
        const commande = await Commande.find(req.params.id)
        .populate('user', 'nom prenom')
        ;
        if (!commande) {
            return res.status(404).json({message: 'Commande not found'});

        }
        res.status(200).json(commande);
    } catch (error) {
        res.status(500).json({message: error.message});

    }
};
exports.createCommandeForUser = async (req, res) => {
    console.log(req.body);
    const commande = new Commande(req.body);
    try {
        commande.save();
        console.log(commande);
        res.status(201).json(commande);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

exports.updateCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findById(req.paarams.id);
        if (!commande) {
            return res.status(404).json({message: 'Commande not found'});
        }
        commande.status = req.body.status || commande.status;

        const updateCommande = await commande.save();
        res.status(200).json(updateCommande);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

exports.deleteCommandeById = async (req, res) => {
    try {
        await Commande.findByIdAndDelete(req.params.id);
        res.status(200).json({ message:'Commande deleted successfully'});

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};