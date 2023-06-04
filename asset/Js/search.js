var apiUrl = "http://localhost:3000/api/product";

function start() {
  getSP(render);
  layThongTinSP()
}

start();

var productArr1 = [];
// function
function getSP(callback) {
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}

function render(SP) {
  productArr1 = SP;
  searchProduct();
  // layThongTinSP()

}

var hienthiTimKiem = document.querySelector(".hienthiTimKiem");
var inputSearch = document.querySelector(".inputSearch");
var overlayTimKiem = document.querySelector(".overlayTimKiem");

overlayTimKiem.addEventListener("click", function () {
  hienthiTimKiem.classList.add("hide");
  overlayTimKiem.classList.add("hide");
  inputSearch.value = "";
});

function searchProduct() {
  var valueSearch = document.querySelector(".inputSearch").value;
  var seachFind = productArr1.filter((value) => {
    return value.tensp.toUpperCase().includes(valueSearch.toUpperCase());
  });
  // console.log(seachFind)
  if (valueSearch == "") {
  } else {
    hienthiTimKiem.classList.remove("hide");
    overlayTimKiem.classList.remove("hide");
  }
  // //    console.log(productArr1)
  renderSP(seachFind);
}

// onclick="addCartTimKiem()"

function renderSP(arr) {
  var element = ``;
  arr.map((value) => {
    element += `
      <div class="productTimKiem">
        <img class="imgTimKiem" src="${value.anhsp}" alt="">
        <div class="row">
        <p>${value.tensp}</p>
        <p class="giasp">${value.giasp}</p>
        </div>
      </div>
      `;
    // console.log(value);
  });
  hienthiTimKiem.innerHTML = element;
}

function addCartTimKiem(){
  themSP()
}


function layThongTinSP() {
  var listBtn1 = document.querySelector(".s_btnAddCart");
  // console.log(listBtn1)
  // listBtn1.forEach(function (button, index) {
  //   button.addEventListener("click", function (event) {
  //     var btnItem = event.target;
  //     var product = btnItem.parentElement;
  //     var productImg = product.querySelector("img").src;
  //     var productName = product.querySelector("h5").innerText;
  //     var productPrice = product.querySelector("h6").innerText;
  //     console.log(productImg, productName, productPrice)
  //     themSP(productImg, productName, productPrice);
  //   });
  // });
}

// layThongTinSP()


function themSP(productImg, productName, productPrice) {
  console.log(productImg, pr)
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

// export default themSP

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
