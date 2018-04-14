const departments = [];

const getdepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

module.exports = {
  getdepartments,
  setDepartments,
};
