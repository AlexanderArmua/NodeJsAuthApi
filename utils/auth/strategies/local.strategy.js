const { Strategy } = require("passport-local");

const UserService = require("../../../services/auth.service");
const userService = new UserService();

const options = {
  usernameField: "email",
  passwordField: "password",
};

const LocalStrategy = new Strategy(
  options,
  async (email, password, done) => {
    try {
      const user = await userService.getUser(email, password);

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
