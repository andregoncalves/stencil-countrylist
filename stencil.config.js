exports.config = {
  namespace: 'countrylist',
  generateDistribution: true,
  bundles: [
    { components: ['st-countrylist'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
