const key = "9519a77df4bb4b784c37e35d8b59c338";
const token = "ATTAff73b40b3accbe0836789171cfe9cbe528b698cf8b38893ec88c63952d8b2716A09489B9";
let card = document.querySelector(".cards");
async function getCards() {
    const response = await fetch("https://api.trello.com/1/lists/652128210030d5c812fd1aca/cards?key=9519a77df4bb4b784c37e35d8b59c338&token=ATTAff73b40b3accbe0836789171cfe9cbe528b698cf8b38893ec88c63952d8b2716A09489B9");
    const cards = await response.json();
    console.log(cards);
    cards.forEach(element => {
        let c = document.createElement('div');
        c.classList.add('cardblock')
        let n = document.createElement('div');
        n.classList.add("title")
        n.innerText = element.desc;
        let d = document.createElement('div');
        d.innerText = element.name;
        console.log(element.desc);
        console.log(element.name);
        c.appendChild(n);
        c.appendChild(d);
        card.appendChild(c);
    })
  }

getCards();