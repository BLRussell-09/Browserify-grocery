const events = require('./events');

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
  events.addDepartmentEvents();
};

const domBuilder = (depArr) => {
  let domString = '';
  depArr.forEach(element => {
    domString += `<div class="col-md-3 department">`;
    domString += `<h3 class="hide department-title" data-department-id="${element.id}">${element.name}</h3>`;
    domString += `<img class="department-image"src="${element.img}">`;
    domString += `</div>`;
  });
  printToDom(domString, 'depHolder');
};

module.exports = domBuilder;
