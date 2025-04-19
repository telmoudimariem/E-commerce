const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../Models/Users');

exports.registre = async (req, res) => {
    const { nom, prenom, email, password, role, telephone, adresse } = req.body;

   try {
    let User = await User.findOne({email});
    if (User) {
        return res.status(400).json({message: 'User already existe'});
    }
    User = new User({nom, prenom, email, password, role, telephone, adresse });
    const salt = await bcrypt.hash(password, salt);
    await User.save();
    const payload = { User: {id: User.id}};
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});

    res.status(201).json({token, User});

   }catch (error) {
    res.status(500).json({message: error.message});
   }
};
exports.Login = async (req, res) => {
    const {email, password } = req.body;
console.log(email, password)
    try{
        let User = await User.findOne({ email });
        if(!User) {
            return res.status(400).json({ message: 'Invalid credentials'});
        }
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid cerdentials'});
        }
       const payload = { user: { id: User.id } };
           const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
       
           res.status(200).json({ token, User });
         } catch (error) {
           res.status(500).json({ message: error.message });
         }
};
