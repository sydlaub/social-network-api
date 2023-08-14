const path = require("path");
const router = require("express").Router();
const apiThought = require("./thoughtRoutes");
const apiUser = require("./userRoutes");

// API Routes
router.use("/api/thought", apiThought);
router.use("/api/user", apiUser);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;

