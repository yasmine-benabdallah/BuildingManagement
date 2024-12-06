const express = require('express');
const router = express.Router();
const buildingModel = require('../models/buildingModel');

// Create a building
router.post('/', (req, res) => {
  const { address, floors } = req.body;
  buildingModel.createBuilding(address, floors, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(req.body);
  });
});

// Get all buildings
router.get('/', (req, res) => {
  buildingModel.getAllBuildings((err, results) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(results);
  });
});

// Get a building by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  buildingModel.getBuildingById(id, (err, result) => {
    if (err) res.status(500).send(err);
    else if (result.length === 0) res.status(404).send('Building not found');
    else res.status(200).json(result);
  });
});

// Update a building
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { address, floors } = req.body;
  buildingModel.updateBuilding(id, address, floors, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(req.body);
  });
});

// Delete a building
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  buildingModel.deleteBuilding(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

module.exports = router;
