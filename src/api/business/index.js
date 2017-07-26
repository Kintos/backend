import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Business, { schema } from './model'

const router = new Router()
const { name, type, city, address, state, zipCode, phoneNumber, rfc, logo, url } = schema.tree

/**
 * @api {post} /businesses Create business
 * @apiName CreateBusiness
 * @apiGroup Business
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Business's name.
 * @apiParam type Business's type.
 * @apiParam city Business's city.
 * @apiParam address Business's address.
 * @apiParam state Business's state.
 * @apiParam zipCode Business's zipCode.
 * @apiParam phoneNumber Business's phoneNumber.
 * @apiParam rfc Business's rfc.
 * @apiParam logo Business's logo.
 * @apiParam url Business's url.
 * @apiSuccess {Object} business Business's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Business not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, type, city, address, state, zipCode, phoneNumber, rfc, logo, url }),
  create)

/**
 * @api {get} /businesses Retrieve businesses
 * @apiName RetrieveBusinesses
 * @apiGroup Business
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} businesses List of businesses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /businesses/:id Retrieve business
 * @apiName RetrieveBusiness
 * @apiGroup Business
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} business Business's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Business not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /businesses/:id Update business
 * @apiName UpdateBusiness
 * @apiGroup Business
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Business's name.
 * @apiParam type Business's type.
 * @apiParam city Business's city.
 * @apiParam address Business's address.
 * @apiParam state Business's state.
 * @apiParam zipCode Business's zipCode.
 * @apiParam phoneNumber Business's phoneNumber.
 * @apiParam rfc Business's rfc.
 * @apiParam logo Business's logo.
 * @apiParam url Business's url.
 * @apiSuccess {Object} business Business's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Business not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, type, city, address, state, zipCode, phoneNumber, rfc, logo, url }),
  update)

/**
 * @api {delete} /businesses/:id Delete business
 * @apiName DeleteBusiness
 * @apiGroup Business
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Business not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
