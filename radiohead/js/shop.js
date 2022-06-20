class AddFineArt {
  constructor(id, name, price, amount, img ) {
    this.id = id
    this.name = name.toLowerCase()
    this.price = price
    this.amount = amount
    this.img = img
  }
  seePrice(){
    return "$" + this.price
}
}

const fineArt = [
  new AddFineArt(0, "RESIDENTAL NEMESIS", 38, 0 , 1),
  new AddFineArt(1, "THIS MIGHT BE A COVER", 38, 0, 2),
  new AddFineArt(2, "EARTHQUAKE", 38, 0, 3),
  new AddFineArt(3, "WIREFRAME+AUSTRIA3", 38, 0, 4),
  new AddFineArt(4, "ICE AGE COMIG", 38, 0, 5),
  new AddFineArt(5, "GET OUT BEFORE SATURDAY", 38, 0, 6),
  new AddFineArt(6, "HOTELS AND A GLACIER", 38, 0, 7),
  new AddFineArt(7, "TARGET 80S LANDSCAPE", 38, 0, 8),
  new AddFineArt(8, "COCAINE DISKO ALL YOU LIKE", 38, 0, 9),
  new AddFineArt(9, "ICE AGE COMING ICE AGE COMING", 38, 0 ,  10),
  new AddFineArt(10, "27 WOODEN WOODS", 38, 0, 11),
  new AddFineArt(11, "GMT LAND BEING INVADED POINTY", 38, 0, 12),
  new AddFineArt(12, "BURNING CITY GOOD VERSION", 38, 0, 13),
  new AddFineArt(13, "LAND OF FREEDOM™", 38, 0, 14),
  new AddFineArt(14, "TWO TOWERS", 38, 0, 15),
  new AddFineArt(15, "ITS GROOVY BABY", 38, 0, 16),
  new AddFineArt(16, "WILL YOU COME BACK TO ME", 38, 0, 17),
  new AddFineArt(17, "MERGER", 38, 0, 18),
  new AddFineArt(18, "REALLY HAPPENING", 38, 0, 19),
  new AddFineArt(19, "TARGET LAND", 38, 0, 20),
  new AddFineArt(20, "MINOS WALL I", 38, 0, 21),
  new AddFineArt(21, "MINOS WALL II", 38, 0, 22),
  new AddFineArt(22, "MINOS WALL III", 38, 0, 23)
]

const containerCard = document.getElementById("container-card")

fineArt.forEach((art) => {
  const card = document.createElement("div")
  const artName = art.name.toUpperCase()
  const artprice = parseFloat(art.price).toFixed(2)

  card.className =  "card"
  card.innerHTML =  
  `<div class="card__aside">
    <img class="card__image" src="../files/shop/${art.img}.jpg"/>
  </div>
  <div class="card__header">
    <h4 class="card__title fs-paragraph fs-color">${artName}</h4>
    <div class="card__subtitle">
      <span class="card__subtitle-money fs-paragraph fs-color">$ ${artprice}</span>
    </div>
  </div>
  `
  containerCard.append(card)
})