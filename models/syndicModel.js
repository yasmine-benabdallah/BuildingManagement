const pool = require('../db'); // Database connection

// Create a syndic
const createSyndic = (syndic_price, paid, apartment_id, callback) => {
  pool.query(
    'INSERT INTO syndic (syndic_price, paid, apartment_id) VALUES (?, ?, ?)',
    [syndic_price, paid, apartment_id],
    callback
  );
};

// Get all syndic records
const getAllSyndics = (callback) => {
  pool.query('SELECT * FROM syndic', callback);
};

// Get syndic by ID
const getSyndicById = (id, callback) => {
  pool.query('SELECT * FROM syndic WHERE id = ?', [id], callback);
};

// Update syndic
const updateSyndic = (id, syndic_price, paid, apartment_id, callback) => {
  pool.query(
    'UPDATE syndic SET syndic_price = ?, paid = ?, apartment_id = ? WHERE id = ?',
    [syndic_price, paid, apartment_id, id],
    callback
  );
};

// Delete syndic
const deleteSyndic = (id, callback) => {
  pool.query('DELETE FROM syndic WHERE id = ?', [id], callback);
};

module.exports = {
  createSyndic,
  getAllSyndics,
  getSyndicById,
  updateSyndic,
  deleteSyndic,
};
