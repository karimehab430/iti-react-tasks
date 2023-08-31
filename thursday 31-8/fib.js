function* fibSeriesByCount(count){
    var current = 0; 
    var next = 1;
    for (var i = 0; i < count; i++) {
        yield current;
        var temp = current;
        current = next;
        next = temp + next;

      }
}
var fib = fibSeriesByCount(8);
console.log([...fib]);


function* fibSeriesByMaxValue(value){
    var current = 0; 
    var next = 1;
    while(current <= value) {
        yield current;
        var temp = current;
        current = next;
        next = temp + next;

      }
}
var fib2 = fibSeriesByMaxValue(144)
console.log([...fib2]);