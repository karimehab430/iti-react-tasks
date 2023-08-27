function displayUserInfo() {
    var name = prompt("Enter your name:");
    var age = prompt("Enter your age:");
    var colorName = prompt("Enter the color name:");
  
    var colorStyle = "color: " + colorName + ";";
    var userInfo = "Name: " + name + ", Age: " + age;
  
    console.log("%c" + userInfo, colorStyle);
  }