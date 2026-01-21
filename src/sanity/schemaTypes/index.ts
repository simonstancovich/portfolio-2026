import { type SchemaTypeDefinition } from 'sanity'

import {projectType} from './projectType'
import {cvType} from './cvType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, cvType],
}
