function readInfo() {
  var name, phoneNumber, mobileNumber, email;

  while (true) {
    name = prompt("Enter your name:");

    if (!/^[a-zA-Z]+$/.test(name)) {
      alert(
        "Invalid name. Please enter a valid name with alphabetic characters only."
      );
    } else {
      break;
    }
  }

  while (true) {
    phoneNumber = prompt("Enter your phone number:");

    if (!/^\d{8}$/.test(phoneNumber)) {
      alert(
        "Invalid phone number. Please enter a valid phone number with 8 digits."
      );
    } else {
      break;
    }
  }

  while (true) {
    mobileNumber = prompt("Enter your mobile number:");

    if (!/^(010|011|012)\d{8}$/.test(mobileNumber)) {
      alert(
        "Invalid mobile number. Please enter a valid mobile number with 11 digits starting with 010, 011, or 012."
      );
    } else {
      break;
    }
  }

  while (true) {
    email = prompt("Enter your email:");

    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i.test(email)) {
      alert("Invalid email. Please enter a valid email address.");
    } else {
      break;
    }
  }

  var userInfoElement = document.getElementById("userInfo");
  userInfoElement.innerHTML =
    "Name: " +
    name +
    "<br>" +
    "Phone Number: " +
    phoneNumber +
    "<br>" +
    "Mobile Number: " +
    mobileNumber +
    "<br>" +
    "Email: " +
    email;
}
