const startApp = require('./departments');
const domBuilder = require('./dom');

const successFunction = function () {
  const data = JSON.parse(this.responseText).departments;
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
