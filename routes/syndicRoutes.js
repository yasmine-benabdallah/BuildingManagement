const express = require('express');
const router = express.Router();
const syndicModel = require('../models/syndicModel');

// Create a syndic
router.post('/', (req, res) => {
  const { syndic_price, paid, apartment_id } = req.body;
  syndicModel.createSyndic(syndic_price, paid, apartment_id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result);
  });
});

// Get all syndic records
router.get('/', (req, res) => {
  syndicModel.getAllSyndics((err, results) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(results);
  });
});

// Get syndic by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  syndicModel.getSyndicById(id, (err, result) => {
    if (err) res.status(500).send(err);
    else if (result.length === 0) res.status(404).send('Syndic not found');
    else res.status(200).json(result);
  });
});

// Update a syndic
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { syndic_price, paid, apartment_id } = req.body;
    syndicModel.updateSyndic(id, syndic_price, paid, apartment_id, (err, result) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    });
  });


// Delete a syndic
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  syndicModel.deleteSyndic(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  });
});

module.exports = router;
