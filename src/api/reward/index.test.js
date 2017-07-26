import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { Reward } from '.'

const app = () => express(routes)

let reward

beforeEach(async () => {
  reward = await Reward.create({})
})

test('POST /rewards 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', restrictions: 'test', requiredLevel: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.brief).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.restrictions).toEqual('test')
  expect(body.requiredLevel).toEqual('test')
})

test('POST /rewards 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /rewards 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /rewards 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /rewards/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${reward.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reward.id)
})

test('GET /rewards/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${reward.id}`)
  expect(status).toBe(401)
})

test('GET /rewards/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /rewards/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${reward.id}`)
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', restrictions: 'test', requiredLevel: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reward.id)
  expect(body.brief).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.restrictions).toEqual('test')
  expect(body.requiredLevel).toEqual('test')
})

test('PUT /rewards/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${reward.id}`)
  expect(status).toBe(401)
})

test('PUT /rewards/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', restrictions: 'test', requiredLevel: 'test' })
  expect(status).toBe(404)
})

test('DELETE /rewards/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${reward.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /rewards/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${reward.id}`)
  expect(status).toBe(401)
})

test('DELETE /rewards/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
