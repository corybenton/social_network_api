const User = require('../models/User');

module.exports = {
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { friends: req.params.friendId },
                { new: true },            )

            if (!user) {
                res.status(404).json({ message: 'No user with that id' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }

    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {friends: req.params.friendId } },
                { new: true },
            )

            if (!user) {
                res.status(404).json({ message: 'No user with that id' });
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}