import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { Business } from '.'

const app = () => express(routes)

let business

beforeEach(async () => {
  business = await Business.create({})
})

test('POST /businesses 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, name: 'test', type: 'test', city: 'test', address: 'test', state: 'test', zipCode: 'test', phoneNumber: 'test', rfc: 'test', logo: 'test', url: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zipCode).toEqual('test')
  expect(body.phoneNumber).toEqual('test')
  expect(body.rfc).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.url).toEqual('test')
})

test('POST /businesses 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /businesses 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /businesses 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /businesses/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${business.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(business.id)
})

test('GET /businesses/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${business.id}`)
  expect(status).toBe(401)
})

test('GET /businesses/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /businesses/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${business.id}`)
    .send({ access_token: masterKey, name: 'test', type: 'test', city: 'test', address: 'test', state: 'test', zipCode: 'test', phoneNumber: 'test', rfc: 'test', logo: 'test', url: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(business.id)
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.zipCode).toEqual('test')
  expect(body.phoneNumber).toEqual('test')
  expect(body.rfc).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.url).toEqual('test')
})

test('PUT /businesses/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${business.id}`)
  expect(status).toBe(401)
})

test('PUT /businesses/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', type: 'test', city: 'test', address: 'test', state: 'test', zipCode: 'test', phoneNumber: 'test', rfc: 'test', logo: 'test', url: 'test' })
  expect(status).toBe(404)
})

test('DELETE /businesses/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${business.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /businesses/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${business.id}`)
  expect(status).toBe(401)
})

test('DELETE /businesses/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
