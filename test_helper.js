require.extensions['.svg'] = function(){ return null; }
require.extensions['.css'] = function(){ return null; }

require('babel-polyfill')
require('babel-register')

