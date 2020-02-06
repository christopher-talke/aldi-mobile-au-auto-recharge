import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ username: 'test123' });
});

export default router;
