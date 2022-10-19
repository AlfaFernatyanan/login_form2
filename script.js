function login() {
  var datalogin = document.getElementById("login_form").elements;
  var username = datalogin[0]["value"];
  var password = datalogin[1]["value"];

  if (username != "alfa") {
    console.log("Login Gagal, Username Salah");
  } else if (password != "kiki") {
    console.log("Login Gagal, Password Salah");
  } else {
    console.log("Login Sukses");
    window.location.href = "karyawan.html";
  }
}
function register() {
  var dataregister = document.getElementById("register_form").elements;
  var firstname = dataregister[0]["value"];
  var lastname = dataregister[1]["value"];
  var email = dataregister[2]["value"];
  var password = dataregister[3]["value"];
}
