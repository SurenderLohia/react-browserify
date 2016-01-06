var unique = require('uniq');
var React = require('react');
var MyComponent = require('./my-component.js');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));