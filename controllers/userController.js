const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        try{
            const users = await User.find();
            res.json(users.username, users._id);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try{
            const user = await User.findOne({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try{
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true, upsert: true }
            );

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(400).json({ message: 'No user with that ID' }); 
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts }});
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.json(500).json(err);
        }
    }
};