const router = require('express').Router();

const {
    createReaction, 
    deleteReaction,
} = require('../../controllers/reactionsController.js');

router.route('/:reactionId').post(createReaction).delete(deleteReaction);

module.exports = router;