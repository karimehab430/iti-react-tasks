function calculateArea() {
    var radius = prompt("Enter Radius");
    var area = Math.PI * radius * radius;
    var resultArea = document.getElementById("resultArea");
    resultArea.textContent = "Total Area of the Circle is " + area.toFixed(2);
}

function sqrt() {
    var num = prompt("Enter Number");
    var squareRoot = Math.sqrt(num);
    var resultArea = document.getElementById("resultArea");
    resultArea.textContent = "The Square Root is " + squareRoot.toFixed(2);
}

function cosine() {
    var degree = prompt("Enter degree");
    var rad = (Math.PI / 180) * degree;
    var cosineValue = Math.cos(rad);
    var resultArea = document.getElementById("resultArea");
    resultArea.textContent = "The cosine of " + degree + " is " + cosineValue.toFixed(2);
}