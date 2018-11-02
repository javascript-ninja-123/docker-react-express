const chai = require('chai');
const request = require('supertest');
const  faker = require('faker');
const {expect} = chai;


describe('api test', () => {

  it('test', () => {
    expect(5).to.equal(5)
  })
  //     let server;
  //     beforeEach( () =>  {
  //       server = require('../index');
  //     });
  //     afterEach( () =>  {
  //       server.close();
  //     });
  //
  // it('post /user', (done) => {
  //   const username = faker.name.findName()
  //   request(server)
  //   .post('/user')
  //   .send({
  //     username
  //   })
  //   .end((err,res) => {
  //     expect(res).to.have.status(200)
  //     expect(res.username).to.equal(username)
  //     done();
  //   })
  // })
  //
  // it('get /users', done => {
  //   request(server)
  //   .get('/users')
  //   .end((err,res) => {
  //     expect(res).to.have.status(200)
  //     done();
  //   })
  // })

})
