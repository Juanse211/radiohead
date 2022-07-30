const cart = [];

const cartImg = document.getElementsByClassName('carts')
const containerModal = document.querySelector('#container-cart')

function loadProducts(id, price) {
  fetch('../json/fineart.json')
  .then((resp) => resp.json())
  .then((data) => {
    const stock = data.find((art) => art.id == id)

    const containerModal = document.querySelector(`#select-box-${id}`).value
    const quantity = document.querySelector(`#quantity`).value

    if (containerModal == 12) price = (38).toFixed(2)
    if (containerModal == 28) price = (78).toFixed(2)
    if (containerModal == 40) price = (123).toFixed(2)

    const copyArt = {id: stock.id, name: stock.name + (" - ") + (containerModal), price: price, amount: quantity}

    cart.push(copyArt)

    console.log(cart)

    Toastify({
      text: "Added to cart",
      duration: 1500,
      style: {
        background: "linear-gradient(to right, #ce2b11, #dd6b58)",
      }
    }).showToast();
  })
}

// REMOVE ART TO CART

function removeToCart(id) {
  console.log('elimi')
  const stock = cart.find((art) => art.id == id)
}


    // //ADD VISUAL CART
    // cartImg.addEventListener('click', (e) => {
    //   containerModal.classList.add('cart-modal-visible')
    //   containerModal.innerHTML =
    //   `

    //   `
    // })