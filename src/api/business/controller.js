import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Business } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Business.create(body)
    .then((business) => business.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Business.find(query, select, cursor)
    .then((businesses) => businesses.map((business) => business.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Business.findById(params.id)
    .then(notFound(res))
    .then((business) => business ? business.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Business.findById(params.id)
    .then(notFound(res))
    .then((business) => business ? _.merge(business, body).save() : null)
    .then((business) => business ? business.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Business.findById(params.id)
    .then(notFound(res))
    .then((business) => business ? business.remove() : null)
    .then(success(res, 204))
    .catch(next)
