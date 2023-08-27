function Prompting() {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    var num = prompt("Enter Number");
    arr.push(parseFloat(num));
  }
  var outputElement = document.getElementById("outputRegular");
  outputElement.textContent = "You've Entered: " + arr.join(", ");
  return arr;
}

function Sorting() {
  var arr = Prompting();
  
  var sortedArrayDescending = arr.sort((a, b) => {
    return b - a;
  });
  var outputDescending = document.getElementById("outputDescending");
  outputDescending.textContent = "Descending Order: " + sortedArrayDescending.join(", ");
 
  var sortedArrayAscending = arr.sort((a, b) => {
    return a - b;
  });
  var outputAscending = document.getElementById("outputAscending");
  outputAscending.textContent = "Ascending Order: " + sortedArrayAscending.join(", ");
}


