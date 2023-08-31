function findMinMax(...numbers) {
  var min = Math.min(...numbers);
  var max = Math.max(...numbers);
  return [min, max];
}

var arr = [2, 5, 1, 10, 8];

var [minValue1, maxValue1] = findMinMax(...arr);

console.log("[min, max] = ", findMinMax(...arr));









console.log(
  "\n\n/*****************************************************************************/ \n"
);








/****************************************************************************************************************************************/






var x = [2];
var y = [5];
[x, y] = [y, x];
console.log(`value of x = ${x}`);
console.log(`value of y = ${y}`);





console.log(
  "\n/*****************************************************************************/ \n"
);


/****************************************************************************************************************************************/





var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var areAllStrings = fruits.every((fruit) => typeof fruit === "string");
console.log(areAllStrings);

var startsWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(startsWithA);

var filteredArray = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
console.log(`Filtered array: ${filteredArray}`);

var likeArray = fruits.map((fruit) => `I like ${fruit}`);
likeArray.forEach((like) => console.log(like));
