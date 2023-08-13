const router = require('express').Router();

const {
    createFriend, 
    deleteFriend,
} = require('../../controllers/friendsController.js');

router.route('/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;