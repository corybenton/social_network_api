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
            const thought = await Thought.create(req.body.thoughtText, req.body.username);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { thoughts: thought._id },
                { new: true },
            )

            if (!user || !thought) {
                return res.status(404).json({ message: 'Missing or incorrect information' });
            }

            res.json(thought, user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async editThought(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                { thoughtText: req.body.thoughtText },
                { new: true },
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
            const thought = await Thought.findOneAndDelete({ _id: req.params.throughtId });
            const user = await User.findOneAndDelete(
                { username: thought.username },
                { thoughts: req.params.thoughtId },
                { new: true },
            )    
            
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought, user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}