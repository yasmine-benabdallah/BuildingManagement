const pool = require('../db'); 

// Create an apartment
const createApartment = (owner, building_id, callback) => {
  pool.query(
    'INSERT INTO apartments (owner, building_id) VALUES (?, ?)',
    [owner, building_id],
    callback
  );
};

// Get all apartments
const getAllApartments = (callback) => {
  pool.query('SELECT * FROM apartments', callback);
};

// Get apartment by ID
const getApartmentById = (id, callback) => {
  pool.query('SELECT * FROM apartments WHERE id = ?', [id], callback);
};

// Update apartment
const updateApartment = (id, owner, building_id, callback) => {
  pool.query(
    'UPDATE apartments SET owner = ?, building_id = ? WHERE id = ?',
    [owner, building_id, id],
    callback
  );
};

// Delete apartment
const deleteApartment = (id, callback) => {
  pool.query('DELETE FROM apartments WHERE id = ?', [id], callback);
};

module.exports = {
  createApartment,
  getAllApartments,
  getApartmentById,
  updateApartment,
  deleteApartment,
};
