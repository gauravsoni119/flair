module.exports = {
  name: 'flair',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flair',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
