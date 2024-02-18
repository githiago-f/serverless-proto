/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/tests/**/*.spec.ts'],
  rootDir: './',
  moduleNameMapper: {
    'src/(.*)': ['<rootDir>/src/$1']
  }
};