import { defineMongooseModel } from '#nuxt/mongoose'

export const psiPowerSchema = defineMongooseModel({
  name: 'psi_power',
  schema: {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      lowercase: true
    },
    description: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: 'not-found'
    }
  },
})