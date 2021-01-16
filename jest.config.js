module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.js' ],
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'babel-jest'
  }
}
