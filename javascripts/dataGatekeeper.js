const startApp = require('./departments');
const loadItems = require('./items.js');
const domBuilder = require('./departmentDom');
const data = require('./data');

const successFunction = function () {
  const depData = JSON.parse(this.responseText).departments;
  data.setDepartments(depData);
  domBuilder(depData);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log(itemsData);
};

const failFunction = function () {
  console.log('Something broke.');
};

const initializer = () => {
  startApp(successFunction, failFunction);
  loadItems(whenItemsLoad, failFunction);
};

module.exports = {
  initializer,
};
