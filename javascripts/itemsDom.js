const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach(element => {
    domString += `<div class="col-sm-3 text-center item">`;
    domString += `<div class="panel panel-info">`;
    domString += `<div class="panel-heading">`;
    domString += `<h3 class="panel-title">${element.name}</h3>`;
    domString += `</div>`;
    domString += `<div class="panel-body">`;
    domString += `<div class="row">`;
    domString += `<img src="${element.img}">`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

module.exports = printToDom;
