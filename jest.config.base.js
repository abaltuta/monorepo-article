module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '(__tests__/.*.mock).tsx?$'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true
};