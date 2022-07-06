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
  const artStock = art.stock

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
      ${artStock == false ? '<p><strong>OUT STOCK</strong></p>' : ''}
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

    const id = e.target.id.split("-")[1];
    const art = fineArt.find(item => item.id === parseInt(id));
  // SEE MODAL
    modalContainer.classList.add('modal-container--visible')

    modalContainer.innerHTML =
    `
    <div id="modal" class="my-modal">
      <div id="modal__aside">
        <img id="modal__img" src="../files/shop/${imgNames[i]}.jpg" > 
      </div>
      <div id="modal__section">
        <button id="close-modal-${art.id}" class="close-modal"> X </button>
        <div id="modal__header">
          <h4 class="fs-color">${art.name}</h4>
          <h5 class="fs-color">${art.priceArt}</h5>
        </div>
        <form id="formArt-${art.id}"class="modal__body form__test">
          <div id="modal__sub__body">
            <div class="checkbox__body-66 fs-color modal__size">
              <select class="checkbox__input">
                <option value="" hidden>Chose the size</option>
                <option value="12">12'x12'</option>
                <option value="28">28'x28'</option>
                <option value="40">40'x40'</option>
              </select>
            </div>
            <div class="checkbox__body-33 modal__quantity">
              <input class="checkbox__input" type="number" id="quantity" name="quantity" value="1" min="0">
            </div>
          </div>
          <div id="modal__cart">
            <a href="#"></a>
            <input id="add-to-cart-${art.id}" class="button__body add-to-cart"  type="submit" value="Add to cart" />
          </div>
        </form>
        <div id="modal__footer">
          <ul>
            <li>
              Fine art print (200gsm)
            </li> 
            <li>
              A museum-quality fine art print paper with a textured, matt finish. 
            </li> 
          </ul>
        </div>
      </div>
    </div>
    `
    
    const form = document.getElementById(`formArt-${art.id}`);
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      addToCart(Number(e.target.id.split("-")[1]))
      console.log("El ID es: ", e.target.id.split("-")[1])
    })

    
    // CLOSE MODAL
    const buttonClose = document.getElementById(`close-modal-${i}`);    
    buttonClose.addEventListener('click', () => {
      modalContainer.classList.remove('modal-container--visible')
    })

    window.addEventListener("click", (e) =>{
      if(e.target === modalContainer){
      modalContainer.classList.remove('modal-container--visible')
      }
    })
  })
}