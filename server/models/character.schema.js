import { defineMongooseModel } from '#nuxt/mongoose'
import {psiPowerSchema} from './psiPowers.schema'

export const CharacterSchema = defineMongooseModel({
  name: 'Character',
  schema: {
    name: {
      type: 'string',
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      lowercase: true,
      default: 'male',
      trim: true
    },
    psi_powers: [{
      ref:psiPowerSchema.schema
    }]
  },
})