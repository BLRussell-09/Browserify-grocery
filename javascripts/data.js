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

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach(element => {
    if (element.departmentId === departmentId) {
      selectedItems.push(element);
    }
  });
  return selectedItems;
};

module.exports = {
  getdepartments,
  getItems,
  setDepartments,
  setItems,
  getItemsByDepartment,
};
