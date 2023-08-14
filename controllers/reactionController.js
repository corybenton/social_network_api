const Thought = require('../models/Thought');
//const reactionSchema = require('../models/Reaction');

module.exports = {
    async createReaction(req, res) {
        try {
            //const reaction = await reactionSchema.Create(req.body);
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
            //const reaction = await reactionSchema.findOneAndDelete(
            //    { reactionId: req.body.reactionId },
            //    { new: true },
            //)
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: req.body } },
                { new: true },
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought/reaction with that id' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}