import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ['**/tests/**/*.spec.ts'],
  moduleNameMapper: {
    'src/(.*)': ['src/$1']
  }
};

export default config; 
