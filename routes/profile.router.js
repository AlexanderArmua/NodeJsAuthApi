const express = require('express');
const passport = require('passport');
const { getUserId } = require('../libs/token');

const OrderService = require('../services/order.service');

const router = express.Router();

const orderService = new OrderService();

router.get('/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const userId = getUserId(req);

      const orders = await orderService.findByUser(userId);

      res.json(orders);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
