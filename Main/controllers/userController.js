const { User, Thought } = require('../models');


module.exports = {
  // Get all students
  getUser(req, res) {
    User.find()
      .then(async (userData) => {
        return res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single student
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (userData) => res.json(userData)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new student
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a student and remove them from the course
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((userData) => res.json(userData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a student and remove them from the course
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then((userData) => res.json(userData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

};
