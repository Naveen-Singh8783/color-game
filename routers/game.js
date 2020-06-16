const express = require('express');

const router = express.Router();

const gameRouter = require('../controllers/game');

router.get('/game/score', gameRouter.getFinal);

router.get('/game/:roundinfo', gameRouter.getGame);

router.post('/game/:roundinfo', gameRouter.postGame);

router.post('/finish', gameRouter.postFinish);

router.post('/play-again', gameRouter.postPlayAgain);



 module.exports = router;