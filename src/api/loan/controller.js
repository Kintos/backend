import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Loan } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Loan.create(body)
    .then((loan) => loan.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Loan.find(query, select, cursor)
    .then((loans) => loans.map((loan) => loan.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Loan.findById(params.id)
    .then(notFound(res))
    .then((loan) => loan ? loan.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Loan.findById(params.id)
    .then(notFound(res))
    .then((loan) => loan ? _.merge(loan, body).save() : null)
    .then((loan) => loan ? loan.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Loan.findById(params.id)
    .then(notFound(res))
    .then((loan) => loan ? loan.remove() : null)
    .then(success(res, 204))
    .catch(next)
