const router = require('express').Router();
const {
    create,
    findAllThoughts,
    findThoughtById,
    updateThought,
    addReaction,
    removeReaction,
    deleteThought
} = require('../controllers/thoughtController');

// stem is api/thought
// GET all thoughts
router.route("/").get(findAllThoughts);

// create new thought
router.route("/post").post(create);

// GET thought by id
router.route("/:id").get(findThoughtById);

// PUT (update) thought
router.route("/update/:id").put(updateThought);

// PUT (update) thought with reaction
router.route("/add/:id/reaction").put(addReaction);

// PUT (update) thought to remove reaction
router.route("/remove/:id/reaction/:reactionId").put(removeReaction);

// DELETE thought
router.route("delete/:id").delete(deleteThought);

module.exports = router;