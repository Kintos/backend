import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { University } from '.'

const app = () => express(routes)

let university

beforeEach(async () => {
  university = await University.create({})
})

test('POST /universities 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, name: 'test', url: 'test', launchDate: 'test', dateAdded: 'test', city: 'test', state: 'test', address: 'test', phone: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.url).toEqual('test')
  expect(body.launchDate).toEqual('test')
  expect(body.dateAdded).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.phone).toEqual('test')
})

test('POST /universities 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /universities 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /universities 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /universities/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${university.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(university.id)
})

test('GET /universities/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${university.id}`)
  expect(status).toBe(401)
})

test('GET /universities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /universities/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${university.id}`)
    .send({ access_token: masterKey, name: 'test', url: 'test', launchDate: 'test', dateAdded: 'test', city: 'test', state: 'test', address: 'test', phone: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(university.id)
  expect(body.name).toEqual('test')
  expect(body.url).toEqual('test')
  expect(body.launchDate).toEqual('test')
  expect(body.dateAdded).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.state).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.phone).toEqual('test')
})

test('PUT /universities/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${university.id}`)
  expect(status).toBe(401)
})

test('PUT /universities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', url: 'test', launchDate: 'test', dateAdded: 'test', city: 'test', state: 'test', address: 'test', phone: 'test' })
  expect(status).toBe(404)
})

test('DELETE /universities/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${university.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /universities/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${university.id}`)
  expect(status).toBe(401)
})

test('DELETE /universities/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
