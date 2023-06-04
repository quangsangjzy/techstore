// lấy dữ liệu từ api
var apiUrl = "http://localhost:3000/api/samsung";

function start() {
  getSanPham(render);
}

start();

// function
function getSanPham(callback) {
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}

var ArrSamsung = [];


function render(SanPham) {
  var card = document.querySelector("#card");
  var htmls = SanPham.map(function (sanphams) {
    return `
    <div id="card-body">
     <img src="${sanphams.anhsp}">
     <div class="row1">
      <h5 class="nameProduct">${sanphams.tensp}</h5>
      <i class="fa-solid fa-info">
      <div id="box-info">
      <p>${sanphams.motasp}</p>
      </div>
      </i>
     </div>
     <div class="row2">
      <h6>${sanphams.giasp} <sup>đ</sup></h6>
     </div>

     <i class="fa-sharp fa-solid fa-cart-plus btnAddCart"></i>
    </div>
    `;
  });
  ArrSamsung = SanPham;
  card.innerHTML = htmls.join("");
  // ArrSamsung.push(SanPham)
  // console.log(ArrSamsung)
  layThongTinSP();
  soLuong();
  // searchProduct();
}

// SamSung()


// lấy thông tin sản phẩm
function layThongTinSP() {
  var listBtn = document.querySelectorAll(".btnAddCart");
  // console.log(listBtn)

  listBtn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      var btnItem = event.target;
      var product = btnItem.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector("h5").innerText;
      var productPrice = product.querySelector("h6").innerText;
      // console.log(productImg, productName, productPrice)
      themSP(productImg, productName, productPrice);
    });
  });
}

function themSP(productImg, productName, productPrice) {
  var addtr = document.createElement("tr");
  var carItem = document.querySelectorAll("tbody tr");
  for (var i = 0; i < carItem.length; i++) {
    var productT = document.querySelectorAll(".title");
    // console.log(productT)
    if (productT[i].innerHTML == productName) {
      alert("San pham da co trong gio hang");
      return;
    }
  }
  var trContent = `
  <tr>
  <td class="img-name"><img src="${productImg}" alt=""><p class="title">${productName}</p></td>
  <td><p><span>${productPrice}</span></p></td>
  <td><input value="1" type="number" name="inputValue" min="1" class="inputCartValue"></td>
  <td class="closeProduct"><i class="fa-solid fa-x"></i></td>
  </tr>
  `;
  addtr.innerHTML = trContent;
  var cartTable = document.querySelector("tbody");
  alert("Sản phẩm đã được thêm vào giỏ hàng");
  // console.log(cartTable)
  cartTable.append(addtr);
  tongTien();
  deleteProduct();
  soLuong();
}

function tongTien() {
  var cartItems = document.querySelectorAll("tbody tr");
  var totalC = 0;
  // console.log(cartItems)
  for (var i = 0; i < cartItems.length; i++) {
    var inputValue = cartItems[i].querySelector("td .inputCartValue").value;
    // console.log(inputValue)
    var priceValue = cartItems[i].querySelector("span").innerHTML;
    // console.log(priceValue)
    totalA = inputValue * parseFloat(priceValue) * 1000000;
    // totalB = totalA.toLocaleString('de-DE')
    // console.log(totalB)
    totalC = totalC + totalA;
    // console.log(totalC)
    // totalD = totalC.toLocaleString('de-DE')
    // console.log(totalD)
  }
  var tongTien = document.querySelector(".total span");
  tongTien.innerHTML = totalC.toLocaleString("de-DE");
  quantityElement();
}

// xóa giỏ hàng
function deleteProduct() {
  var cartItems = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItems.length; i++) {
    var productT = document.querySelectorAll(".closeProduct");
    productT[i].addEventListener("click", function (event) {
      var deleteItem = event.target;
      var itemR = deleteItem.parentElement.parentElement;

      if (confirm("Bạn có muốn xóa sản phẩm không ?") == true) {
        itemR.remove();
        tongTien();
        soLuong();
      }
    });
  }
}

// Thay đổi số lượng
function quantityElement() {
  var cartItems = document.querySelectorAll("tbody tr");
  for (var i = 0; i < cartItems.length; i++) {
    var quantity = cartItems[i].querySelector("input");
    quantity.addEventListener("change", function () {
      tongTien();
    });
  }
}

// số lượng phần tử có trong giỏ hàng

function soLuong() {
  // var giohang = new Array();
  var cartItem = document.querySelectorAll("tbody tr");
  // giohang.push(cartItem)

  // console.log(cartItem)
  var count = (document.querySelector(".count").innerHTML = cartItem.length);
  console.log(count);
}

// Thanh toán
const payMents = document.querySelector(".thanhtoan");
payMents.addEventListener("click", function () {
  location.href = "../component/thanhtoan.html";
});
