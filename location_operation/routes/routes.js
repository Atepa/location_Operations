const express = require('express');

const router = express.Router();
const validate = require('../middleware/validateLocation');
const controller = require('../controllers/controllers');

router.get('/location/:id', controller.getOnedata);

router.get('/location', controller.getAllData);

router.post('/location', validate, controller.postData);

router.post('/distance', validate, controller.postDistance);

router.post('/draw', validate, controller.postDrawRoute);

router.put('/location/:id', validate, controller.putData);

module.exports = router;
