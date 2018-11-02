const chai = require('chai');
const request = require('supertest');
const  faker = require('faker');
const {expect} = chai;


describe('api test', () => {

      let server;
    beforeEach( () =>  {
        server = require('../index');
    });
    afterEach( () =>  {
        server.close();
    });

  it('post /user', (done) => {
    const username = faker.name.findName()
    request(server)
    .post('/user')
    .send({
      username
    })
    .end((err,res) => {
      expect(res.body.username).to.equal(username)
      done();
    })
  })

  it('get /users', done => {
    request(server)
    .get('/users')
    .expect(200, done);
  })

})
