import { Wallet } from '.'

let wallet

beforeEach(async () => {
  wallet = await Wallet.create({ brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', type: 'test', restrictions: 'test', requiredLevel: 'test', userEmail: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = wallet.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wallet.id)
    expect(view.brief).toBe(wallet.brief)
    expect(view.description).toBe(wallet.description)
    expect(view.logo).toBe(wallet.logo)
    expect(view.name).toBe(wallet.name)
    expect(view.price).toBe(wallet.price)
    expect(view.type).toBe(wallet.type)
    expect(view.restrictions).toBe(wallet.restrictions)
    expect(view.requiredLevel).toBe(wallet.requiredLevel)
    expect(view.userEmail).toBe(wallet.userEmail)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = wallet.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(wallet.id)
    expect(view.brief).toBe(wallet.brief)
    expect(view.description).toBe(wallet.description)
    expect(view.logo).toBe(wallet.logo)
    expect(view.name).toBe(wallet.name)
    expect(view.price).toBe(wallet.price)
    expect(view.type).toBe(wallet.type)
    expect(view.restrictions).toBe(wallet.restrictions)
    expect(view.requiredLevel).toBe(wallet.requiredLevel)
    expect(view.userEmail).toBe(wallet.userEmail)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
