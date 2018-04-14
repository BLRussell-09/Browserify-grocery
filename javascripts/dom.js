
const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

const domBuilder = (depArr) => {
  let domString = '';
  depArr.forEach(element => {
    domString += `<div class="col-md-3 department">`;
    domString += `<h3 class="hide">${element.name}</h3>`;
    domString += `<img class="department-image"src="${element.img}">`;
    domString += `</div>`;
  });
  printToDom(domString, 'depHolder');
};

module.exports = domBuilder;
