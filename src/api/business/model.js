import mongoose, { Schema } from 'mongoose'

const businessSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  rfc: {
    type: String
  },
  logo: {
    type: String
  },
  url: {
    type: String
  }
}, {
  timestamps: true
})

businessSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      type: this.type,
      city: this.city,
      address: this.address,
      state: this.state,
      zipCode: this.zipCode,
      phoneNumber: this.phoneNumber,
      rfc: this.rfc,
      logo: this.logo,
      url: this.url,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Business', businessSchema)

export const schema = model.schema
export default model
