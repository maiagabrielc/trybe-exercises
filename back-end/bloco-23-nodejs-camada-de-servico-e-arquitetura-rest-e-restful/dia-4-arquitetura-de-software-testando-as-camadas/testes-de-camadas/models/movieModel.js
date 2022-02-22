const connection = require('./connection');

const create = async ({ title, directedBy, realeaseYear }) => {
  const [result] = await connection
    .execute('INSERT INTO model_example.movies(title, directed_by, release_year VALUES(?, ?, ?)',
      [title, directedBy, realeaseYear]);

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};