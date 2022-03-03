const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

function isFirstNameVld(firstName) {
  return !firstName || typeof firstName !== 'string';
}
function isMiddleNameVld(middleName) {
  return !middleName || typeof middleName !== 'string';
}
function isLastNameVld(lastName) {
  return !lastName || typeof lastName !== 'string';
}

const isValid = (firstName, middleName, lastName) => {
  if (isFirstNameVld(firstName)) return false;
  if (isLastNameVld(lastName)) return false;
  if (isMiddleNameVld(middleName)) return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const [author] = await Author.createAuthor(firstName, middleName, lastName);

  const authorId = author.insertId;

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};