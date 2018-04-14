const startApp = require('./departments');

const successFunction = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log(data);
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
