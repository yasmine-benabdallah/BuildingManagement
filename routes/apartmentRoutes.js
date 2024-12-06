const express = require('express');
const router = express.Router();
const apartmentModel = require('../models/apartmentModel');

// Create an apartment
router.post('/', (req, res) => {
  const { owner, building_id } = req.body;
  apartmentModel.createApartment(owner, building_id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result);
  });
});

// Get all apartments
router.get('/', (req, res) => {
  apartmentModel.getAllApartments((err, results) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(results);
  });
});

// Get an apartment by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  apartmentModel.getApartmentById(id, (err, result) => {
    if (err) res.status(500).send(err);
    else if (result.length === 0) res.status(404).send('Apartment not found');
    else res.status(200).json(result);
  });
});

// Update an apartment
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { owner, building_id } = req.body;
  apartmentModel.updateApartment(id, owner, building_id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

// Delete an apartment
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  apartmentModel.deleteApartment(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

module.exports = router;
