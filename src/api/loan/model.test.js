import { Loan } from '.'

let loan

beforeEach(async () => {
  loan = await Loan.create({ askedDate: 'test', dueDate: 'test', amount: 'test', status: 'test', toPay: 'test', userEmail: 'test', userId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = loan.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loan.id)
    expect(view.askedDate).toBe(loan.askedDate)
    expect(view.dueDate).toBe(loan.dueDate)
    expect(view.amount).toBe(loan.amount)
    expect(view.status).toBe(loan.status)
    expect(view.toPay).toBe(loan.toPay)
    expect(view.userEmail).toBe(loan.userEmail)
    expect(view.userId).toBe(loan.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = loan.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(loan.id)
    expect(view.askedDate).toBe(loan.askedDate)
    expect(view.dueDate).toBe(loan.dueDate)
    expect(view.amount).toBe(loan.amount)
    expect(view.status).toBe(loan.status)
    expect(view.toPay).toBe(loan.toPay)
    expect(view.userEmail).toBe(loan.userEmail)
    expect(view.userId).toBe(loan.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
