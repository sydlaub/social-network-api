const router = require('express').Router();
const userController = require('../controllers/userController');

// stem is api/user
// create new user
router.route("/post").post(userController.create);

// GET all users
router.route("/").get(userController.findAllUsers);

// GET user by id
router.route("/:id").get(userController.findUserById);

// PUT (update) user with user thoughts
router.route("/update/:id").put(userController.updateUser);

// PUT (update) user with new friend
router.route("/add/:id/friends/:friendId").put(userController.addFriend);

// PUT (update) user to remove friend by ID
router.route("/remove/:id/friends/:friendId").put(userController.removeFriend);

// DELETE user
router.route("delete/:id").delete(userController.deleteUser);

module.exports = router;