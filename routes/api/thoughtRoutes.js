const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    editThought,
    deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/')
    .get(getThoughts)
    .post(createThought)
    .put(editThought)
    .delete(deleteThought);
    
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;