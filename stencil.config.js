exports.config = {
  namespace: 'countrylist',
  generateDistribution: true,
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
