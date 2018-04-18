const data = require('./data');

const itemCards = document.getElementsByClassName('item-add');

const addItems = (e) => {
  const numberToAdd = e.target.parentNode.parentNode.children[1].children[0].children[0].children[1].value;
  const itemId = e.target.parentNode.parentNode.parentNode.children[0].children[0].dataset.itemId;
  data.setCart(itemId, numberToAdd);
};

const addItemEvents = () => {
  for (let idx = 0; idx < itemCards.length; idx++) {
    itemCards[idx].addEventListener('click', addItems);
  }
};

module.exports = addItemEvents;
