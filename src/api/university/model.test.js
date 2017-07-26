import { University } from '.'

let university

beforeEach(async () => {
  university = await University.create({ name: 'test', url: 'test', launchDate: 'test', dateAdded: 'test', city: 'test', state: 'test', address: 'test', phone: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = university.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(university.id)
    expect(view.name).toBe(university.name)
    expect(view.url).toBe(university.url)
    expect(view.launchDate).toBe(university.launchDate)
    expect(view.dateAdded).toBe(university.dateAdded)
    expect(view.city).toBe(university.city)
    expect(view.state).toBe(university.state)
    expect(view.address).toBe(university.address)
    expect(view.phone).toBe(university.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = university.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(university.id)
    expect(view.name).toBe(university.name)
    expect(view.url).toBe(university.url)
    expect(view.launchDate).toBe(university.launchDate)
    expect(view.dateAdded).toBe(university.dateAdded)
    expect(view.city).toBe(university.city)
    expect(view.state).toBe(university.state)
    expect(view.address).toBe(university.address)
    expect(view.phone).toBe(university.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
