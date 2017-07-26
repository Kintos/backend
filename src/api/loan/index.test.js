import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { Loan } from '.'

const app = () => express(routes)

let loan

beforeEach(async () => {
  loan = await Loan.create({})
})

test('POST /loans 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, askedDate: 'test', dueDate: 'test', amount: 'test', status: 'test', toPay: 'test', userEmail: 'test', userId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.askedDate).toEqual('test')
  expect(body.dueDate).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.toPay).toEqual('test')
  expect(body.userEmail).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('POST /loans 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /loans 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /loans 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /loans/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${loan.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loan.id)
})

test('GET /loans/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${loan.id}`)
  expect(status).toBe(401)
})

test('GET /loans/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /loans/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${loan.id}`)
    .send({ access_token: masterKey, askedDate: 'test', dueDate: 'test', amount: 'test', status: 'test', toPay: 'test', userEmail: 'test', userId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(loan.id)
  expect(body.askedDate).toEqual('test')
  expect(body.dueDate).toEqual('test')
  expect(body.amount).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.toPay).toEqual('test')
  expect(body.userEmail).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('PUT /loans/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${loan.id}`)
  expect(status).toBe(401)
})

test('PUT /loans/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, askedDate: 'test', dueDate: 'test', amount: 'test', status: 'test', toPay: 'test', userEmail: 'test', userId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /loans/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${loan.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /loans/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${loan.id}`)
  expect(status).toBe(401)
})

test('DELETE /loans/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
