const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const reactionRoutes = require('./reactionRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('./users/:userId/friends', friendRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('thoughts/:thoughtId/reactions', reactionRoutes);

module.exports = router;