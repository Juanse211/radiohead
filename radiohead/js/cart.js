const containerCartModal = document.querySelector('.container-cart-modal')
const cartModal = document.querySelector('.cart-modal')
const closeCart = document.querySelector('#button__close-cart')
const cartImg = document.querySelector('.carts')
const openCart = document.querySelector('.open-cart')
const containerModal = document.querySelector('.container-cart-modal')

closeCart.addEventListener("click", (e) =>{
  containerCartModal.classList.remove('cart-modal-visible')
})


for (let i = 0; i < cartImg.length; i++) {
  cartImg[i].addEventListener("click", (e) =>{

    containerCartModal.classList.add('cart-modal-visible')
    containerCartModal.innerHTML = 
    `

    `
  })
}