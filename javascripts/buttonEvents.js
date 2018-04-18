const cartDom = require('./cartDom');

const dataGatekeeper = require('./dataGatekeeper');
const goToDepartments = document.getElementById('go-to-departments');
const itemsDiv = document.getElementById('items');
const departmentsDiv = document.getElementById('depHolder');
const cartDiv = document.getElementById('cart');
const goToCart = document.getElementById('go-to-cart');

const departmentButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGatekeeper.initializer();
  });
};

const cartButton = () => {
  goToCart.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    cartDom();
  });
};

module.exports = {
  departmentButton,
  cartButton,
};
