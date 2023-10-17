const express = require('express');

const router = express.Router();
const validate = require('../middleware/validateLocation');
const controller = require('../controllers/controllers');

router.get('/location/:id', controller.getOnedata);

router.get('/location', controller.getAllData);

router.post('/location', validate[0], controller.postData);

router.post('/distance', validate[1], controller.postDistance);

router.post('/draw', validate[1], controller.postDrawRoute);

router.put('/location/:id', validate[0], controller.putData);

module.exports = router;
