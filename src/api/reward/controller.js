import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Reward } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Reward.create(body)
    .then((reward) => reward.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Reward.find(query, select, cursor)
    .then((rewards) => rewards.map((reward) => reward.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Reward.findById(params.id)
    .then(notFound(res))
    .then((reward) => reward ? reward.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Reward.findById(params.id)
    .then(notFound(res))
    .then((reward) => reward ? _.merge(reward, body).save() : null)
    .then((reward) => reward ? reward.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Reward.findById(params.id)
    .then(notFound(res))
    .then((reward) => reward ? reward.remove() : null)
    .then(success(res, 204))
    .catch(next)
