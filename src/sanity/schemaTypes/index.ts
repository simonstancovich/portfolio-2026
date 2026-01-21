import { type SchemaTypeDefinition } from 'sanity'

import {projectType} from './projectType'
import {cvType} from './cvType'
import {siteSettingsType} from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, cvType, siteSettingsType],
}
