function isPalindrome() {
  var stringInput = prompt("Enter a string:");
  var caseChoice = prompt("Do you want to consider the case? (yes/no):");

  if (caseChoice.toLowerCase() === "yes") {
    ignoreCase = false;
  } else if (caseChoice.toLowerCase() === "no") {
    ignoreCase = true;
  }

  var reversedString = stringInput.split("").reverse().join("");

  if (stringInput === reversedString) {
    console.log("The entered string is a palindrome.");
  } else {
    console.log("The entered string is not a palindrome.");
  }
}



function countEs(){
  var userInput = prompt("Enter a string:");
  var count = 0;

  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] === 'e' || userInput[i] === 'E') {
      count++;
    }
  }

  console.log("Number of 'e' characters: " + count);
}

function checkOddEven(){
  var userInput = prompt("Enter a number:");
  console.log(userInput%2==0)
}
