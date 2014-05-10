require.config({
  baseUrl: 'js',
  paths: {
    'react': 'vendor/react-0.10.0.min'
  }
});

define(['module', 'react'], function(module, React) {
  console.log(module.config(), React, 'hi!');
});
