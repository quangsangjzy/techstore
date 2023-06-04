const searchShow = document.querySelector(".seach-show");
const search = document.querySelector(".search");

searchShow.addEventListener("click", () => {
  // alert('acb')
});

const auth = document.querySelector(".vh-100");
const welcomeUser = document.querySelector(".welcomeUser");
const logout = document.querySelector(".logout");

welcomeUser.addEventListener('click', function(){
  logout.classList.remove('hide')
})

// function showAuth(){
//   auth.classList.remove('hide')
// }

// product
const thongtinSp = document.querySelector("box-info");

// open cartaccoutauth
function showCart() {
  const showCart = document.querySelector(".cart-box")
  showCart.classList.remove('showCart')
}

// function closeCart(){
//   const showCart = document.querySelector(".cart-box")
//   showCart.classList.add('showCart')
// }

const phanhoi = document.querySelector('.phanhoi button')
phanhoi.addEventListener('click', ()=>{
  alert('Bạn đã gửi phản hồi thành công')
})

//


