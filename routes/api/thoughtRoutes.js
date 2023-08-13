const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    editThought,
    deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(editThought)
    .delete(deleteThought);
    
module.exports = router;