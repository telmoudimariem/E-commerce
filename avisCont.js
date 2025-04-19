const Avis = require('../Models/Avis');
const Produit = require('../Models/Produit');



exports.getAvisByProduit = async(req, res) => {
   try {
    const avis = await Avis.find({ ProduitId: req.params.ProduitId}).populate('userId', 'nom prenom');
    res.status(200).json(avis);
} catch (error){
    res.status(500).json({ message: error.message});
}

} ;

exports.createAvis = async(req, res) =>{
    const Avis = new Avis({
        note: req.body.note,
        commantaire: req.body.commantaire
    });
    try {
        const newAvis = await Avis.save();
        res.status(201).json(newAvis);
    } catch (error) {
        res.status(400).json({message: error.error});
    }

};


exports.delateAvis = async (req, res) => {
    try {
        const avis = await Avis.findById(req.params.id);
        if (!avis) return res.status(404).json({ message: "Avis non trouvé" });

        if (avis.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Action non autorisée" });
        }

        await avis.deleteOne();
        res.status(200).json({ message: "Avis supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};