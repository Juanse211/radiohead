const cart = [];

const cartImg = document.getElementsByClassName('carts')
const containerModal = document.querySelector('#container-cart')

function addToCart(id) {
  fetch('../json/fineart.json')
  .then((resp) => resp.json())
  .then((data) => {

    const stock = data.find((art) => art.id == id)

    const artId = stock.id
    const artName = stock.name
    const artPrice = stock.price
    const artAmount = stock.amount
    const artImg = stock.img

  
    cart.push(stock)

    // if cart.find((art) => art.id === stock.id)
    // const sumeAmount = cart.find((art) => art.id === stock.id)

    // console.log(sumeAmount)
      
    console.log(cart)

    Toastify({
      text: "Added to cart",
      duration: 1500,
    }).showToast();
  })
}


// REMOVE ART TO CART


function removeToCart(id) {
  console.log('elimi')
  const stock = cart.find((art) => art.id == id)
}


    //ADD VISUAL CART
    cartImg.addEventListener('click', (e) => {
      containerModal.classList.add('cart-modal-visible')
      containerModal.innerHTML =
      `

      `
    })