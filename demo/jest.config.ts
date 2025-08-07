import type { Config } from '@jest/types';

const config: Config.InitialOptions = { 
  preset: 'ts-jest', // Allows us to write tests using typescript
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Interpret test files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this based on your project's directory structure
  },
  testMatch: ['<rootDir>/**/*.test.(ts|tsx|js|jsx)'], // Anything with a certain extension will be considered a test
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Adjust if your tsconfig file is located elsewhere
    },
  },
};

export default config;