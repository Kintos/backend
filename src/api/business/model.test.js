import { Business } from '.'

let business

beforeEach(async () => {
  business = await Business.create({ name: 'test', type: 'test', city: 'test', address: 'test', state: 'test', zipCode: 'test', phoneNumber: 'test', rfc: 'test', logo: 'test', url: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = business.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(business.id)
    expect(view.name).toBe(business.name)
    expect(view.type).toBe(business.type)
    expect(view.city).toBe(business.city)
    expect(view.address).toBe(business.address)
    expect(view.state).toBe(business.state)
    expect(view.zipCode).toBe(business.zipCode)
    expect(view.phoneNumber).toBe(business.phoneNumber)
    expect(view.rfc).toBe(business.rfc)
    expect(view.logo).toBe(business.logo)
    expect(view.url).toBe(business.url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = business.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(business.id)
    expect(view.name).toBe(business.name)
    expect(view.type).toBe(business.type)
    expect(view.city).toBe(business.city)
    expect(view.address).toBe(business.address)
    expect(view.state).toBe(business.state)
    expect(view.zipCode).toBe(business.zipCode)
    expect(view.phoneNumber).toBe(business.phoneNumber)
    expect(view.rfc).toBe(business.rfc)
    expect(view.logo).toBe(business.logo)
    expect(view.url).toBe(business.url)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
