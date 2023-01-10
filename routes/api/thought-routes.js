const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction
} = require('../../controllers/thought-controllers')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)


router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .put(addReaction)

module.exports = router;