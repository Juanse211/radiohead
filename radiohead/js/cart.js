const cart = [];

function addToCart(id){
  fetch('../json/fineart.json')
  .then((resp) => resp.json())
  .then((data) => {

      const stock = data.find((art) => art.id == id)
      
      /*
      push to cart
      */
      Toastify({
        text: "Added to cart",
        duration: 1500,
      }).showToast();
      console.log(stock)
  })
}

const cartImg = document.getElementsByClassName('carts')

const containerModal = document.querySelector('#container-cart-modal')

  function removeToCart (id){
    console.log('elimi')
    const stock = cart.find((art) => art.id == id)
  }

  