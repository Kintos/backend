import mongoose, { Schema } from 'mongoose'

const loanSchema = new Schema({
  askedDate: {
    type: String
  },
  dueDate: {
    type: String
  },
  amount: {
    type: String
  },
  status: {
    type: String
  },
  toPay: {
    type: String
  },
  userEmail: {
    type: String
  },
  userId: {
    type: String
  }
}, {
  timestamps: true
})

loanSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      askedDate: this.askedDate,
      dueDate: this.dueDate,
      amount: this.amount,
      status: this.status,
      toPay: this.toPay,
      userEmail: this.userEmail,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Loan', loanSchema)

export const schema = model.schema
export default model
