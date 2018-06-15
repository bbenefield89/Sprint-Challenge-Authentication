const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const user = ({ username, password } = req.body);
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create(user, (err, user) => {
    if (err)
      return res.status(500).json(err)

    res.status(201).json(user);
  })
};

module.exports = {
  createUser
};
