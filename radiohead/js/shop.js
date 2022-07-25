class AddFineArt {
  constructor(id, name, amount, img, price, price28, price40 ) {
    this.id = id
    this.name = name
    this.amount = amount
    this.img = img
    this.price = price
    this.price28 = price28
    this.price40 = price40
  }
    get priceArt(){
      return parseInt(this.price).toFixed(2);
  }
    get priceArt28(){
      return parseInt(this.price28).toFixed(2);
  }
    get priceArt40(){
      return parseInt(this.price40).toFixed(2);
  }
}

const fineArt = [];

function updateSelectedPrice(id, currentPrice){
  const h5 = document.getElementById(`selected-price-${id}`);

  const currentProduct = FUNCION(id);

  //la funcion debe recibir un id, filtrar el arreglo de fineart (linea 22), y devolver el o una copia del objeto con return.

  if(currentPrice == 12) h5.innerHTML = currentProduct.priceArt;
  if(currentPrice == 28) h5.innerHTML = currentProduct.priceArt28;
  if(currentPrice == 40) h5.innerHTML = currentProduct.priceArt40;
}


const myRequest = new Request('../json/fineart.json');
fetch(myRequest)
  .then((resp) =>{
    return resp.json()
  })
  .then((data) => {
    function cargarDatosDesdeDb(){
      for(let i=0;i<data.length;i++)
      {
        const newItem = new AddFineArt(data[i].id, data[i].name, data[i].amount, data[i].img, data[i].price, data[i].price28, data[i].price40)
        fineArt.push(newItem)
      }
    }
  cargarDatosDesdeDb();
  cardFunction()
  modalFunction()
  })

.catch(error => console.log(error));


function buscarFineArtEnDom(id){
   const value = document.getElementById(`FineArt-${id}`)
   return value
}

function cardFunction(){
  const containerCard = document.getElementById("container-card")

  fineArt.forEach((art) => {
    const card = document.createElement("div")
    const artName = art.name
    const artPrice = art.priceArt

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
}


// MODAL

function modalFunction(){
    
  const modalContainer = document.querySelector('#modal-container')
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
          <img id="modal__img" src="../files/shop/${art.img}.jpg" > 
        </div>
        <div id="modal__section">
          <button id="close-modal-${art.id}" class="close-modal"> X </button>
          <div id="modal__header">
            <h4 class="fs-color">${art.name}</h4>
            <h5 id="selected-price-${art.id}" class="fs-color">${art.priceArt}</h5>
          </div>
          <form id="formArt-${art.id}"class="modal__body form__test">
            <div id="modal__sub__body">
              <div class="checkbox__body-66 fs-color modal__size">
                <select id="select-box-${art.id}" class="checkbox__input">
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
      })

      const selectPrice = document.getElementById(`select-box-${art.id}`);
      selectPrice.addEventListener('change', e => {
        const currentSize =  Number(e.target.options[e.target.selectedIndex].value)
        updateSelectedPrice(art.id, currentSize)
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
}
