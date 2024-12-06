const pool = require('../db'); // Database connection

// Create a building
const createBuilding = (address, floors, callback) => {
  pool.query(
    'INSERT INTO buildings (address, floors) VALUES (?, ?)',
    [address, floors],
    callback
  );
};

// Get all buildings
const getAllBuildings = (callback) => {
  pool.query('SELECT * FROM buildings', callback);
};

// Get a building by ID
const getBuildingById = (id, callback) => {
  pool.query('SELECT * FROM buildings WHERE id = ?', [id], callback);
};

// Update building
const updateBuilding = (id, address, floors, callback) => {
  pool.query(
    'UPDATE buildings SET address = ?, floors = ? WHERE id = ?',
    [address, floors, id],
    callback
  );
};

// Delete building
const deleteBuilding = (id, callback) => {
  pool.query('DELETE FROM buildings WHERE id = ?', [id], callback);
};

module.exports = {
  createBuilding,
  getAllBuildings,
  getBuildingById,
  updateBuilding,
  deleteBuilding,
};
