const request = require('supertest')
const app = require('../src/server/server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/fetchData')
      .send({
        textInput: 'Mumbai'
      })
    expect(res.statusCode).toEqual(200)
  })
})