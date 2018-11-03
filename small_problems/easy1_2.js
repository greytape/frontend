

console.log('Enter the length of the room in meters:');
console.log('Enter the width of the room in meters:');

var SQUARE_METERS_TO_SQUARE_FEET = 10.7639;
var roomLength  = 7;
var roomWidth = 10;
var roomAreaMetres = roomLength * roomWidth;
var roomAreaFeet = roomAreaMetres * SQUARE_METERS_TO_SQUARE_FEET;

console.log(`The area of the room is ${roomAreaMetres} square meters (${roomAreaFeet} square feet).`);