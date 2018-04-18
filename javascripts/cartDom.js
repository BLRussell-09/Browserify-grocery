const data = require('./data');
const cardOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = '';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table table-striped">`;
  domString += `<tr>`;
  domString += `<th>Name</th>`;
  domString += `<th>Price</th>`;
  domString += `<th>Quantity</th>`;
  domString += `<th></th>`;
  domString += `</tr>`;
  items.forEach(element => {
    domString += `<tr>`;
    domString += `<td>${element.name}</td>`;
    domString += `<td>$${element.price.toFixed(2)}</td>`;
    domString += `<td>${element.purchaseNum}</td>`;
    domString += `<td><button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td>`;
    domString += `</tr>`;
  });
  domString += `</table>`;
  domString += getTotals(items);
  domString += `</div>`;
  return domString;
};

const getTotals = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  items.forEach(element => {
    itemTotal += (element.purchaseNum * 1);
    priceTotal += (element.purchaseNum * element.price);
  });
  return totalsString(itemTotal, priceTotal);
};

const totalsString = (itemNum, total) => {
  let domString = '';
  domString += `<h4>Total number of items: ${itemNum}</h4>`;
  domString += `<h4>Total price: $${total.toFixed(2)}</h4>`;
  return domString;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cardOutputDiv.innerHTML = cartDomString(cartItems);
};

module.exports = printCartToDom;
