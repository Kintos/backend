import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export University, { schema } from './model'

const router = new Router()
const { name, url, launchDate, dateAdded, city, state, address, phone } = schema.tree

/**
 * @api {post} /universities Create university
 * @apiName CreateUniversity
 * @apiGroup University
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name University's name.
 * @apiParam url University's url.
 * @apiParam launchDate University's launchDate.
 * @apiParam dateAdded University's dateAdded.
 * @apiParam city University's city.
 * @apiParam state University's state.
 * @apiParam address University's address.
 * @apiParam phone University's phone.
 * @apiSuccess {Object} university University's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 University not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, url, launchDate, dateAdded, city, state, address, phone }),
  create)

/**
 * @api {get} /universities Retrieve universities
 * @apiName RetrieveUniversities
 * @apiGroup University
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} universities List of universities.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /universities/:id Retrieve university
 * @apiName RetrieveUniversity
 * @apiGroup University
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} university University's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 University not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /universities/:id Update university
 * @apiName UpdateUniversity
 * @apiGroup University
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name University's name.
 * @apiParam url University's url.
 * @apiParam launchDate University's launchDate.
 * @apiParam dateAdded University's dateAdded.
 * @apiParam city University's city.
 * @apiParam state University's state.
 * @apiParam address University's address.
 * @apiParam phone University's phone.
 * @apiSuccess {Object} university University's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 University not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, url, launchDate, dateAdded, city, state, address, phone }),
  update)

/**
 * @api {delete} /universities/:id Delete university
 * @apiName DeleteUniversity
 * @apiGroup University
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 University not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
