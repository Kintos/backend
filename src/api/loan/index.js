import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Loan, { schema } from './model'

const router = new Router()
const { askedDate, dueDate, amount, status, toPay, userEmail, userId } = schema.tree

/**
 * @api {post} /loans Create loan
 * @apiName CreateLoan
 * @apiGroup Loan
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam askedDate Loan's askedDate.
 * @apiParam dueDate Loan's dueDate.
 * @apiParam amount Loan's amount.
 * @apiParam status Loan's status.
 * @apiParam toPay Loan's toPay.
 * @apiParam userEmail Loan's userEmail.
 * @apiParam userId Loan's userId.
 * @apiSuccess {Object} loan Loan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loan not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ askedDate, dueDate, amount, status, toPay, userEmail, userId }),
  create)

/**
 * @api {get} /loans Retrieve loans
 * @apiName RetrieveLoans
 * @apiGroup Loan
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} loans List of loans.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /loans/:id Retrieve loan
 * @apiName RetrieveLoan
 * @apiGroup Loan
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} loan Loan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loan not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /loans/:id Update loan
 * @apiName UpdateLoan
 * @apiGroup Loan
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam askedDate Loan's askedDate.
 * @apiParam dueDate Loan's dueDate.
 * @apiParam amount Loan's amount.
 * @apiParam status Loan's status.
 * @apiParam toPay Loan's toPay.
 * @apiParam userEmail Loan's userEmail.
 * @apiParam userId Loan's userId.
 * @apiSuccess {Object} loan Loan's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Loan not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ askedDate, dueDate, amount, status, toPay, userEmail, userId }),
  update)

/**
 * @api {delete} /loans/:id Delete loan
 * @apiName DeleteLoan
 * @apiGroup Loan
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Loan not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
