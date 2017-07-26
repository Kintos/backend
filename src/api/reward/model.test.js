import { Reward } from '.'

let reward

beforeEach(async () => {
  reward = await Reward.create({ brief: 'test', description: 'test', logo: 'test', name: 'test', price: 'test', restrictions: 'test', requiredLevel: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = reward.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reward.id)
    expect(view.brief).toBe(reward.brief)
    expect(view.description).toBe(reward.description)
    expect(view.logo).toBe(reward.logo)
    expect(view.name).toBe(reward.name)
    expect(view.price).toBe(reward.price)
    expect(view.restrictions).toBe(reward.restrictions)
    expect(view.requiredLevel).toBe(reward.requiredLevel)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = reward.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reward.id)
    expect(view.brief).toBe(reward.brief)
    expect(view.description).toBe(reward.description)
    expect(view.logo).toBe(reward.logo)
    expect(view.name).toBe(reward.name)
    expect(view.price).toBe(reward.price)
    expect(view.restrictions).toBe(reward.restrictions)
    expect(view.requiredLevel).toBe(reward.requiredLevel)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
