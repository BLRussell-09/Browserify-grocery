let departments = [];
let items = [];

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

module.exports = {
  getdepartments,
  getItems,
  setDepartments,
  setItems,
};
