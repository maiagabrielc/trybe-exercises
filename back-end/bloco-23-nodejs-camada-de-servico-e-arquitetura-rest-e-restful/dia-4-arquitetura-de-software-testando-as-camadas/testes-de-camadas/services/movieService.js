const MoviesModel = require('../models/movieModel');

function titleVld(title) { return !title || typeof title !== 'string'; }

function releaseYearVld(releaseYear) { return !releaseYear || typeof releaseYear !== 'number'; }

function direcByVld(directedBy) { return !directedBy || typeof directedBy !== 'string'; }

const isValid = (title, directedBy, releaseYear) => {
  const vldTitle = titleVld(title);
  if (vldTitle) return false;
  const vldRlYear = releaseYearVld(releaseYear);
  if (vldRlYear) return false;
  const vldDirecBy = direcByVld(directedBy);
  if (vldDirecBy) return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};