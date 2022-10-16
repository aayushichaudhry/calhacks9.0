function validate() {
  let email = document.getElementsById("email").value;
  var password = document.getElementsById("password").value;
  if (email == "test@gmail.com" && password == "test1234") {
    alert("Login successful!");
    console.log(email);
  }
}
