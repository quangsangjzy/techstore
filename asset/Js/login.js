const gotoSignUp = document.querySelector(".gotoSignUp");
const signin = document.querySelector(".sign-in");
const signup = document.querySelector(".sign-up");
const backLogin = document.querySelector(".backLogin");

gotoSignUp.addEventListener("click", () => {
  signin.classList.add("hide");
  signup.classList.remove("hide");
});

backLogin.addEventListener("click", () => {
  signin.classList.remove("hide");
  signup.classList.add("hide");
});

var apiUrl = "http://localhost:3000/api/user";

function start() {
  getUserLogin(handleFormDangNhap);
  // handleFormDangNhap();
  handleFormDky();
}

start();

function getUser(data, callback) {
  var user = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiUrl, user)
    .then(function (respone) {
      respone.json();
    })
    .then(callback);
}

function handleFormDky() {
  const btnDky = document.querySelector(".btnDky");

  btnDky.addEventListener("click", function () {
    var email = document.querySelector('input[name="email"]').value;
    var matkhau = document.querySelector('input[name="matkhau"]').value;
    var nhaplaimatkhau = document.querySelector(
      'input[name="nhaplaimatkhau"]'
    ).value;

    var dataValue = {
      email: email,
      matkhau: matkhau,
      nhaplaimatkhau: nhaplaimatkhau,
    };
    // console.log(dataValue)
    if (matkhau != nhaplaimatkhau) {
      alert("Mật khẩu chưa khớp nhau vui lòng nhập lại !");
    } else {
      alert("Bạn đã đăng ký tài khoản thành công");
      signin.classList.remove("hide");
      signup.classList.add("hide");
      getUser(dataValue);
    }
  });
}

// Đăng nhập

function getUserLogin(callback) {
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}

const accout = document.querySelector(".accout");

function handleFormDangNhap(user) {
  const loginBtn = document.querySelector(".loginBtn");
  var accout = document.querySelector(".accout");
  var authForm = document.querySelector(".vh-100");
  const closeLogin = document.querySelector(".close");
  // var welcomeUser = document.querySelector('.welcomeUser')
  // var logout = document.querySelector('.logout')

  loginBtn.addEventListener("click", function () {
    var email = document.querySelector('input[name="email1"]').value;
    var matkhau = document.querySelector('input[name="matkhau1"]').value;
    // var userShow = `
    //   // <p> Xin chào, ${email}</p>
    // `

    var checkLogin = user.some(
      (value) => value.email === email && value.matkhau === matkhau
    );
    if (email == "" && matkhau == "") {
      alert("Bạn chưa nhập email và mật khẩu");
    } else if (email == "") {
      alert("Bạn chưa nhập email");
    } else if (matkhau == "") {
      alert("Bạn chưa nhập mật khẩu");
    } else if (email == "" && matkhau == "") {
      alert("Bạn chưa nhập email và mật khẩu");
    } else if (checkLogin === false) {
      alert("Sai tài khoản mật khẩu");
    } else if (checkLogin === true) {
      alert("Đăng nhập thành công");
      authForm.classList.add("hide");
      // showAuth()
    }
  });
  accout.addEventListener("click", function () {
    authForm.classList.remove("hide");
  });
  closeLogin.addEventListener('click', function(){
    authForm.classList.add('hide')
  })
}
