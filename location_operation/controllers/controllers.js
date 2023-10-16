/* eslint-disable consistent-return */
/* eslint-disable func-names */
require('express-async-errors');

const LocationModel = require('../models/location-model');
const distanceMeter = require('../helpers/distance-meter');
const drawLoc = require('../helpers/draw-route');

exports.get_all_data = async function (req, res) {
  const locations = await LocationModel.find();
  if (!locations) {
    return res.status(400).send('There is no location!');
  }

  res.send(locations);
};

// eslint-disable-next-line consistent-return
exports.get_one_data = async function (req, res) {
  const { id } = req.params;

  const location = await LocationModel.findOne({ _id: id });
  if (!location) {
    return res.status(404).send('There is no location! Wrong Id!');
  }
  res.send(location);
};

exports.post_data = async function (req, res) {
  const loc = new LocationModel({
    locationLatitude: req.body.locationLatitude.toFixed(4),
    locationLongitude: req.body.locationLongitude.toFixed(4),
    locationTitle: req.body.locationTitle,
    colorOfMark: req.body.colorOfMark,
  });

  const result = await loc.save();
  res.send(result);
};

exports.put_data = async function (req, res) {
  const { id } = req.params;

  const location = await LocationModel.findById(id);
  if (!location) {
    return res.status(404).send('There is no location! Wrong Id!');
  }

  location.locationLatitude = req.body.locationLatitude.toFixed(4);
  location.locationLongitude = req.body.locationLongitude.toFixed(4);
  location.locationTitle = req.body.locationTitle;
  location.colorOfMark = req.body.colorOfMark;

  const result = await location.save();
  res.send(result);
};

exports.post_distance = async function (req, res) {
  const locations = await LocationModel.find();
  if (!locations) {
    return res.status(400).send('There is no location!');
  }
  const routes = distanceMeter(req.body, locations);
  const routesObj = Object.fromEntries(routes);

  res.send(routesObj);
};

exports.post_draw_route = async function (req, res) {
  const locations = await LocationModel.find();
  if (!locations) {
    return res.status(400).send('There is no location!');
  }

  const routes = drawLoc(req.body, locations);
  res.send(routes);
};
