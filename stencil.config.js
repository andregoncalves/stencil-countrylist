exports.config = {
  namespace: 'countrylist',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
  httpPort: '3000'
}