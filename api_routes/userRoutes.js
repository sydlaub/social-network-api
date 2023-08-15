const router = require('express').Router();
const {
    create,
    findAllUsers,
    findUserById,
    updateUser,
    addFriend,
    removeFriend,
    deleteUser
} = require('../controllers/userController');

// stem is api/user
// create new user
router.route("/post").post(create);

// GET all users
router.route("/").get(findAllUsers);

// GET user by id
router.route("/:id").get(findUserById);

// PUT (update) user with user thoughts
router.route("/update/:id").put(updateUser);

// PUT (update) user with new friend
router.route("/add/:id/friends/:friendId").put(addFriend);

// PUT (update) user to remove friend by ID
router.route("/remove/:id/friends/:friendId").put(removeFriend);

// DELETE user
router.route("/delete/:id").delete(deleteUser);

module.exports = router;