
const boom = require('@hapi/boom');
const { config } = require('../config/config');
const { sendMail } = require('../libs/mailer');
const { hashVerifyPassword, hashPassword } = require('../libs/pass-hash');
const { signToken, buildPayload, signRecoveryToken, verifyRecoveryToken } = require('../libs/token');
const UserService = require('./user.service');
const userService = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await userService.findByEmail(email);

    if (!user) {
      throw boom.unauthorized('Invalid email or password');
    }

    const isMatch = await hashVerifyPassword(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized('Invalid email or password');
    }

    delete user.dataValues.password;

    return user;
  }

  async signToken(user) {
    const payload = buildPayload(user.id, user.role);

    const token = signToken(payload);

    return { user, token };
  }

  async sendRecoveryMail(email) {
    const user = await userService.findByEmail(email);

    if (!user) {
      throw boom.notFound('User not found');
    }

    const token = signRecoveryToken({ sub: user.id });
    const link = `${config.url}:${config.port}/recovery?token=${token}`;

    await userService.update(user.id, { recoveryToken: token });

    const mailContent = {
      from: config.emailUser,
      to: email,
      subject: 'Recovery password',
      text: 'Recovery password',
      html: `Hola! ${email}, ingresa al siguiente link para recuperar contraseña: <a href="${link}">Recovery password</a>`
    };

    const mail = await sendMail(mailContent);

    return mail;
  }

  async changePassword(token, password) {
    try {
      const { sub: userId } = await verifyRecoveryToken(token);

      const user = await userService.findOne(userId);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized('Invalid token');
      }

      await userService.update(userId, { password, recoveryToken: null });

      return { message: 'Password changed' };
    } catch (err) {
      throw boom.unauthorized('Invalid token');
    }
  }
}

module.exports = AuthService;
