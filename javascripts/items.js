const loadItems = (success, fail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', success);
  myRequest.addEventListener('error', fail);
  myRequest.open('GET', './db/items.json');
  myRequest.send();
};

module.exports = loadItems;
