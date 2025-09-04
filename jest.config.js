/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.base.json',
    }],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/permit2/'],
}
