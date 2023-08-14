const db = require("../models");

module.exports = {
    // POST a new user thought to db
    create: function (req, res) {
        db.Thought
        .create(req.body)
        .then(thought => {
            db.User.findOneAndUpdate({ _id: thought.userId }, { $addToSet: { userThoughts: thought._id} }, { new: true })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        })
        .catch(err => res.status(422).json(err))
    },

    // GET all thoughts
    findAllThoughts: function (req, res) {
        db.Thought
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // GET thought by id
    findThoughtById: function (req, res) {
        db.Thought
            .findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch (err => res.status(422).json(err))
    },

    // PUT (update) thought
    updateThought: function (req, res) {
        db.Thought
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(dbModel = res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // PUT (update) thought with new reaction
    addReaction: function (req, res) {
        db.Thought
            .findOneAndUpdate({ _id: req.params.id }, { $addToSet: {thoughtReactions: req.body } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // PUT (update thought to remove a reaction)
    removeReaction: function (req, res) {
        db.Thought
        .findOneAndUpdate({ _id: req.params.id }, { $pull: { thoughtReactions: {reactionId: req.params.reactionId}}}, { new: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    // DELETE thought and remove its ID from its users thought array
    deleteThought: function (req, res) {
        db.Thought
            .findOneAndRemove({ _id: req.params.id })
            .then(thought =>
                !thought
                    ? res.status(404).json({ message: "Cannot find a thought with that ID"})
                    : db.User.findOneAndUpdate(
                        { userThoughts: req.params.id },
                        { $pull: { userThoughts: req.params.id }},
                        { new: true }
                    ))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};