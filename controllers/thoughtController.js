const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    async getThoughts(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try{
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thought.id } },
                { new: true },
            )

            if (!user || !thought) {
                return res.status(404).json({ message: 'Missing or incorrect information' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async editThought(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.body },
                { $set: req.body },
                { new: true, upsert: true },
            )

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try{
            const thought = await Thought.findOneAndDelete({ _id: req.body._id });
            await User.findOneAndUpdate(
                { username: thought.username },
                { $pull: { thoughts: req.body._id } }
            )    
            
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}