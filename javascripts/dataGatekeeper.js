const startApp = require('./departments');
const loadItems = require('./items');
const domBuilder = require('./departmentDom');
const data = require('./data');

const depArray = [];

const successFunction = function () {
  const depArray = JSON.parse(this.responseText).departments;
  data.setDepartments(depArray);
  domBuilder(depArray);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  data.setItems(itemsData);
};

const failFunction = function () {
  console.log('Something broke.');
};

const initializer = () => {
  startApp(successFunction, failFunction);
  loadItems(whenItemsLoad, failFunction);
};

const getDeps = () =>
{
  return depArray;
};

module.exports = {
  initializer,
  getDeps,
};
