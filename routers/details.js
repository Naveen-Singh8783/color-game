const express = require('express');
const router = express.Router();
const path = require('path');

const detailController = require('../controllers/details');

router.get('/', detailController.getIndex); 

router.post('/', detailController.postIndex);


module.exports = router;