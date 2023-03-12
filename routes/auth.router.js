const express = require('express');
const passport = require('passport');

const router = express.Router();

const AuthService = require('../services/auth.service');
const authService = new AuthService();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;

      const payload = await authService.signToken(user);

      res.json(payload);
    } catch (err) {
      next(err);
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body;

      const mail = await authService.sendRecoveryMail(email);

      res.json(mail);
    } catch (err) {
      next(err);
    }
  }
);

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, password } = req.body;

      const user = await authService.changePassword(token, password);

      res.json(user);
    } catch (err) {
      next(err);
    }
  }
)

module.exports = router;
