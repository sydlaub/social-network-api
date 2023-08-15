const mongoose = require("mongoose");
const { Thought, User } = require("../models");

const thoughtSeeds = require("./thoughtSeeds.json");
const userSeeds = require("./userSeeds.json");

const seedDatabase = async () => {
    // Connect to mongo server
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-media_db");

    // Delete existing data from User and Thought collections
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Seed new data in User collection and store them in an array
    const users = await User.create(userSeeds);

    // Loop through each thought in the seed file
    for (thought of thoughtSeeds) {
        // Generate a random user from the users array
        const user = users[Math.floor(Math.random() * users.length)]
        // Create a new Thought, assigning it to the randomly-generated User
        const newThought = await Thought.create({
            ...thought,
            userId: user.id,
            userName: user.userName
        });
        // Update the randomly-generated user's document, pushing the new Thought's ID to the user's userThoughts array
        await User.findOneAndUpdate({ _id: user.id }, { $addToSet: { userThoughts: newThought._id } }, { new: true })
    }

    // End the seed process
    process.exit(0);
};

// Call the seed process
seedDatabase();