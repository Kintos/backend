import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Reward, { schema } from './model'

const router = new Router()
const { brief, description, logo, name, price, restrictions, requiredLevel } = schema.tree

/**
 * @api {post} /rewards Create reward
 * @apiName CreateReward
 * @apiGroup Reward
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam brief Reward's brief.
 * @apiParam description Reward's description.
 * @apiParam logo Reward's logo.
 * @apiParam name Reward's name.
 * @apiParam price Reward's price.
 * @apiParam restrictions Reward's restrictions.
 * @apiParam requiredLevel Reward's requiredLevel.
 * @apiSuccess {Object} reward Reward's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reward not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ brief, description, logo, name, price, restrictions, requiredLevel }),
  create)

/**
 * @api {get} /rewards Retrieve rewards
 * @apiName RetrieveRewards
 * @apiGroup Reward
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} rewards List of rewards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /rewards/:id Retrieve reward
 * @apiName RetrieveReward
 * @apiGroup Reward
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} reward Reward's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reward not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /rewards/:id Update reward
 * @apiName UpdateReward
 * @apiGroup Reward
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam brief Reward's brief.
 * @apiParam description Reward's description.
 * @apiParam logo Reward's logo.
 * @apiParam name Reward's name.
 * @apiParam price Reward's price.
 * @apiParam restrictions Reward's restrictions.
 * @apiParam requiredLevel Reward's requiredLevel.
 * @apiSuccess {Object} reward Reward's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Reward not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ brief, description, logo, name, price, restrictions, requiredLevel }),
  update)

/**
 * @api {delete} /rewards/:id Delete reward
 * @apiName DeleteReward
 * @apiGroup Reward
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Reward not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
