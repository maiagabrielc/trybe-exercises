const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

describe('Insere um novo filme no DB', function () {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async function () {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async function () {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async function () {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});