import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { Wallet } from '.'

const app = () => express(routes)

let wallet

beforeEach(async () => {
  wallet = await Wallet.create({})
})

test('POST /wallets 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', type: 'test', restrictions: 'test', requiredLevel: 'test', userEmail: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.brief).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.restrictions).toEqual('test')
  expect(body.requiredLevel).toEqual('test')
  expect(body.userEmail).toEqual('test')
})

test('POST /wallets 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /wallets 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /wallets 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /wallets/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${wallet.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wallet.id)
})

test('GET /wallets/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${wallet.id}`)
  expect(status).toBe(401)
})

test('GET /wallets/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /wallets/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${wallet.id}`)
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', type: 'test', restrictions: 'test', requiredLevel: 'test', userEmail: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(wallet.id)
  expect(body.brief).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.logo).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.restrictions).toEqual('test')
  expect(body.requiredLevel).toEqual('test')
  expect(body.userEmail).toEqual('test')
})

test('PUT /wallets/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${wallet.id}`)
  expect(status).toBe(401)
})

test('PUT /wallets/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', type: 'test', restrictions: 'test', requiredLevel: 'test', userEmail: 'test' })
  expect(status).toBe(404)
})

test('DELETE /wallets/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${wallet.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /wallets/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${wallet.id}`)
  expect(status).toBe(401)
})

test('DELETE /wallets/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
