import mongoose, { Schema } from 'mongoose'

const walletSchema = new Schema({
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
  type: {
    type: String
  },
  restrictions: {
    type: String
  },
  requiredLevel: {
    type: String
  },
  userEmail: {
    type: String
  }
}, {
  timestamps: true
})

walletSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      brief: this.brief,
      description: this.description,
      logo: this.logo,
      name: this.name,
      price: this.price,
      type: this.type,
      restrictions: this.restrictions,
      requiredLevel: this.requiredLevel,
      userEmail: this.userEmail,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Wallet', walletSchema)

export const schema = model.schema
export default model
