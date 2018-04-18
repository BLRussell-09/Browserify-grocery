let departments = [];
let items = [];
const cart = [];

const getdepartments = () => {
  return departments;
};

const getItems = () => {
  return items;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach(element => {
    if (element.departmentId === departmentId) {
      selectedItems.push(element);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  console.log(newItem);
  cart.push(newItem);
};

const getCart = () => {
  return cart;
};

module.exports = {
  getdepartments,
  getItems,
  setDepartments,
  setItems,
  getItemsByDepartment,
  setCart,
  getCart,
};
