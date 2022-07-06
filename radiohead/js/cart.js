console.log("Database data: ", dataBase[0].id)
console.log('HOLA')
const cart = [];

function addToCart (id){
  console.log('pasa')
  const stock = dataBase.find((art) => art.id == id)
    Toastify({
    text: "Added to cart",
    duration: 1500,
  }).showToast();
}



function removeToCart (id){
  console.log('elimi')
  const stock = dataBase.find((art) => art.id == id)
  
}



const cartImg = document.getElementsByClassName('carts')



const containerModal = document.querySelector('#container-cart-modal')