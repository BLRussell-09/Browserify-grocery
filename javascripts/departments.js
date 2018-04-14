const startApp = (success, fail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', success);
  myRequest.addEventListener('error', fail);
  myRequest.open('GET', './db/departments.json');
  myRequest.send();
};

module.exports = startApp;
