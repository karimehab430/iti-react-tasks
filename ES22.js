var obj = {
  namee: "Karim",
  age: 21,
  [Symbol.iterator]: function () {
    var keys = Object.keys(obj);
    var index = 0;

    return {
      next: () => {
        if (index < keys.length) {
          var key = keys[index];
          var value = obj[key];
          index++;
          return { value: [key, value], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (var [property, value] of obj) {
  console.log(`${property}: ${value}`);
}

console.log(obj);
var iter = obj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
