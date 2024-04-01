import { CodegenConfig } from '@graphql-codegen/cli';
import { API_URL } from './app/constants';

const config: CodegenConfig = {
  schema: API_URL + "/graphql/",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['app/**/*.{ts,tsx}'],
  generates: {
    './app/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;