const Thought = require('../models/Thought');

module.exports = {
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true },
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: req.body } },
                { new: true },
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}