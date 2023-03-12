const { Strategy, ExtractJwt } = require("passport-jwt");

const { config } = require("../../../config/config");

const secret = config.jwtSecret;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}

const JwtStrategy = new Strategy(
  options,
  (payload, done) => {
    done(null, payload);
  }
)

module.exports = JwtStrategy;
