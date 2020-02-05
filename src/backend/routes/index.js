import express from 'express';
import dashboard from '../temp';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json(dashboard);
});

export default router;
