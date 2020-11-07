// https://www.npmjs.com/package/image-size
// TODO: azt kell megoldani, hogy a json-t belolvassa es kiexportalja olyan allapotban, 
// hogy benne legyen a thumbnail width es height adatok.
var sizeOf = require('image-size');

var dimensions = sizeOf('public/images/pumpbeerthumb.jpg');
console.log(dimensions.width, dimensions.height);
console.log(dimensions);
console.log(isNaN(dimensions.width), isNaN(dimensions.height));