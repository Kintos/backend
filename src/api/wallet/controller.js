import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Wallet } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Wallet.create(body)
    .then((wallet) => wallet.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Wallet.find(query, select, cursor)
    .then((wallets) => wallets.map((wallet) => wallet.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Wallet.findById(params.id)
    .then(notFound(res))
    .then((wallet) => wallet ? wallet.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Wallet.findById(params.id)
    .then(notFound(res))
    .then((wallet) => wallet ? _.merge(wallet, body).save() : null)
    .then((wallet) => wallet ? wallet.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Wallet.findById(params.id)
    .then(notFound(res))
    .then((wallet) => wallet ? wallet.remove() : null)
    .then(success(res, 204))
    .catch(next)
