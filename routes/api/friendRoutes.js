const router = require('express').Router();

const {
    addFriend, 
    deleteFriend,
} = require('../../controllers/friendsController.js');

router.route('/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;