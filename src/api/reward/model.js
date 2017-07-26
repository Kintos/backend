import mongoose, { Schema } from 'mongoose'

const rewardSchema = new Schema({
  brief: {
    type: String
  },
  description: {
    type: String
  },
  logo: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: String
  },
  restrictions: {
    type: String
  },
  requiredLevel: {
    type: String
  }
}, {
  timestamps: true
})

rewardSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      brief: this.brief,
      description: this.description,
      logo: this.logo,
      name: this.name,
      price: this.price,
      restrictions: this.restrictions,
      requiredLevel: this.requiredLevel,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Reward', rewardSchema)

export const schema = model.schema
export default model
