import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Wallet, { schema } from './model'

const router = new Router()
const { brief, description, logo, name, price, type, restrictions, requiredLevel, userEmail } = schema.tree

/**
 * @api {post} /wallets Create wallet
 * @apiName CreateWallet
 * @apiGroup Wallet
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam brief Wallet's brief.
 * @apiParam description Wallet's description.
 * @apiParam logo Wallet's logo.
 * @apiParam name Wallet's name.
 * @apiParam price Wallet's price.
 * @apiParam type Wallet's type.
 * @apiParam restrictions Wallet's restrictions.
 * @apiParam requiredLevel Wallet's requiredLevel.
 * @apiParam userEmail Wallet's userEmail.
 * @apiSuccess {Object} wallet Wallet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wallet not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ brief, description, logo, name, price, type, restrictions, requiredLevel, userEmail }),
  create)

/**
 * @api {get} /wallets Retrieve wallets
 * @apiName RetrieveWallets
 * @apiGroup Wallet
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} wallets List of wallets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /wallets/:id Retrieve wallet
 * @apiName RetrieveWallet
 * @apiGroup Wallet
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} wallet Wallet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wallet not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /wallets/:id Update wallet
 * @apiName UpdateWallet
 * @apiGroup Wallet
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam brief Wallet's brief.
 * @apiParam description Wallet's description.
 * @apiParam logo Wallet's logo.
 * @apiParam name Wallet's name.
 * @apiParam price Wallet's price.
 * @apiParam type Wallet's type.
 * @apiParam restrictions Wallet's restrictions.
 * @apiParam requiredLevel Wallet's requiredLevel.
 * @apiParam userEmail Wallet's userEmail.
 * @apiSuccess {Object} wallet Wallet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wallet not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ brief, description, logo, name, price, type, restrictions, requiredLevel, userEmail }),
  update)

/**
 * @api {delete} /wallets/:id Delete wallet
 * @apiName DeleteWallet
 * @apiGroup Wallet
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Wallet not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
