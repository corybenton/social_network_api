const Thought = require('../models/Thought');
const { reactionSchema } = require('../models/Reaction');

module.exports = {
    async createReaction(req, res) {
        try {
            const reaction = await reactionSchema.Create(req.body);
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { reactions: reaction.reactionId },
                { new: true },
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought with that id' });
            }

            res.json(reaction, thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try{
            const reaction = await reactionSchema.findOneAndDelete(
                { reactionId: req.body.reactionId },
                { new: true },
            )
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                { reactions: req.body.reactionId },
                { new: true },
            )

            if (!reaction || !thought) {
                res.status(404).json({ message: 'No thought/reaction with that id' });
            }

            res.json(reaction, thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}