const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController');

// stem is api/thought
// create new thought
router.route("/post").post(thoughtController.create);

// GET all thoughts
router.route("/").get(thoughtController.findAllThoughts);

// GET thought by id
router.route("/:id").get(thoughtController.findThoughtById);

// PUT (update) thought
router.route("/update/:id").put(thoughtController.updateThought);

// PUT (update) thought with reaction
router.route("/add/:id/reaction").put(thoughtController.addReaction);

// PUT (update) thought to remove reaction
router.route("/remove/:id/reaction/:reactionId").put(thoughtController.removeReaction);

// DELETE thought
router.route("delete/:id").delete(thoughtController.deleteThought);

module.exports = router;