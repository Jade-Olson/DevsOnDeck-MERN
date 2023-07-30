const User = require("../models/user.model");
module.exports = {
    // Get all users in database
    findAll: (req, res) => {
        User.find()
            .then(allUsers => {
                res.json(allUsers);
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "ERROR: Something went wrong findAllUsers", error: err});
            });
    },
    // Get one user in database by id
    find: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "ERROR: Something went wrong findUser", error: err});
            });
    },
    // Save new user to database
    create: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                console.log(err);
                res.json({message:"ERROR: Something went wrong createUser", error: err});
            });
    },
    // Update existing user in database
    update: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => {
                res.json(updatedUser);
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "ERROR: Something went wrong updateUser", error: err});
            });
    },
    // Delete user from database
    delete: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "ERROR: Something went wrong deleteUser", error: err});
            });
    }
}