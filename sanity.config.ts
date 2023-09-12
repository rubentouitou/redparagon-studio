import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Red Paragon',

  projectId: 'o114okr0',
  dataset: 'production',

  plugins: [deskTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
