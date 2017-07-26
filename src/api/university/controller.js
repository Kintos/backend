import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { University } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  University.create(body)
    .then((university) => university.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  University.find(query, select, cursor)
    .then((universities) => universities.map((university) => university.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  University.findById(params.id)
    .then(notFound(res))
    .then((university) => university ? university.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  University.findById(params.id)
    .then(notFound(res))
    .then((university) => university ? _.merge(university, body).save() : null)
    .then((university) => university ? university.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  University.findById(params.id)
    .then(notFound(res))
    .then((university) => university ? university.remove() : null)
    .then(success(res, 204))
    .catch(next)
