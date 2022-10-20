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

async function generateListKaryawan() {
  var jsonData = {};
  var listStrHtml = "";

  var containerListKaryawan = document.getElementById(
    "container_list_karyawan"
  );
  var url = "https://dummyapi.io/data/v1/user?limit=10";

  await fetch(url, {
    method: "GET",
    headers: {
      "app-id": "634ff758ef6ad6104ce624bb",
    },
  })
    .then((response) => response.json())
    .then((data) => (jsonData = data));

  console.log(jsonData);

  for (let index = 0; index < jsonData["data"].length; index++) {
    var res = jsonData["data"][index];
    var picture = res["picture"];
    var firstName = res["firstName"];
    var lastname = res["lastName"];
    var title = res["title"];
    var gender = "";

    if (title != "mr") {
      gender = "Perempuan";
    } else {
      gender = "Laki - Laki";
    }
    var strHtml = `<div class="Karyawan_kontener"><img src="${picture}" /><div>  <h2>${firstName} ${lastname}</h2>   <h3>${gender}</h3></div></div>`;
    console.log(picture);
    listStrHtml += strHtml;
  }
  containerListKaryawan.innerHTML = listStrHtml;
}
