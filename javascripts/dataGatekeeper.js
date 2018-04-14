const startApp = require('./departments');
const domBuilder = require('./departmentDom');
const data = require('./data');

const successFunction = function () {
  const depData = JSON.parse(this.responseText).departments;
  data.setDepartments(depData);
  domBuilder(data);
};

const failFunction = function () {
  console.log('Something broke.');
};

const initializer = () => {
  startApp(successFunction, failFunction);
};

module.exports = {
  initializer,
};
