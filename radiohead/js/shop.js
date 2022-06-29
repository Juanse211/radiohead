class AddFineArt {
  constructor(id, name, price, amount, img ) {
    this.id = id
    this.name = name
    this.price = price
    this.amount = amount
    this.img = img
  }
  get priceArt(){
    return parseInt(this.price).toFixed(2);
  }
}

const fineArt = [];

function cargarDatosDesdeDb(){
    for(let i=0;i<dataBase.length;i++)
    {
        const newItem = new AddFineArt(dataBase[i].id, dataBase[i].name, dataBase[i].price, dataBase[i].amount, dataBase[i].img)
        fineArt.push(newItem)
    }
}

cargarDatosDesdeDb();
console.log("DATABASE: ", fineArt);

function buscarFineArtEnDom(id){
   const value = document.getElementById(`FineArt-${id}`)
   return value
}



const containerCard = document.getElementById("container-card")
let imgNames = [];

fineArt.forEach((art) => {
  const card = document.createElement("div")
  const artName = art.name
  const artPrice = art.priceArt
  imgNames.push(art.img);

  card.className =  "card"
  card.innerHTML =  
  `<div class="card__aside">
    <img id="fa-${art.id}" class="card__image img__modal" src="../files/shop/${art.img}.jpg"/>
  </div>
  <div class="card__header">
    <h4 class="card__title fs-paragraph fs-color">${artName}</h4>
    <div class="card__subtitle">
      <span class="card__subtitle-money fs-paragraph fs-color">$ ${artPrice}</span>
    </div>
  </div>
  `
  containerCard.append(card)
})



// MODAL


const modalContainer = document.querySelector('#modal-container')
const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')


const img = document.getElementsByClassName("img__modal")


for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', (e) => {
  
    console.log(e.target.id)
    const id = e.target.id.split("-")[1];
    const art = fineArt.find(item => item.id === parseInt(id));
    modalContainer.classList.add('modal-container--visible')

    modalContainer.innerHTML =
    `
    <div id="modal" class="my-modal">
      <div id="img-position">
        <img id="img-modal" src="../files/shop/${imgNames[i]}.jpg" > 
      </div>
      <div id="button-position">
        <button id="close-modal-${i}" class="close-modal"> X </button>
        <h4>${art.name}</h4>
        <h5>${art.priceArt}</h5>
        <button id="button-cart"> Add to cart </button>
      </div>
    </div>
    `
    const button = document.getElementById(`close-modal-${i}`);
    
    button.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container--visible')
    })
  })
}

window.addEventListener("click", (e) =>{
  if(e.target === modalContainer){
    modalContainer.classList.remove('modal-container--visible')
  }
})