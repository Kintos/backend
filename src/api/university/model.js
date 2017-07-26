import mongoose, { Schema } from 'mongoose'

const universitySchema = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  launchDate: {
    type: String
  },
  dateAdded: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  }
}, {
  timestamps: true
})

universitySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      url: this.url,
      launchDate: this.launchDate,
      dateAdded: this.dateAdded,
      city: this.city,
      state: this.state,
      address: this.address,
      phone: this.phone,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('University', universitySchema)

export const schema = model.schema
export default model
