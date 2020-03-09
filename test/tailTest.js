const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Tomas", "Wen", "Good morning"]);
assertEqual(result.length, 3);
assertEqual(result[0], "Tomas");
assertEqual(result[1], "Wen");
assertEqual(result[2], "Good morning");