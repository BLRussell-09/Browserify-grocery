const data = require('./data');
const itemsDom = require('./itemsDom');

const departmentContainerDiv = document.getElementById('depHolder');
const departmentCards = document.getElementsByClassName('department');

const showDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};

const hideDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};

const showItems = (e) => {
  const departmentId = e.target.parentNode.children[0].dataset.departmentId;
  console.log(departmentId);
  const selectedItems = data.getItemsByDepartment(departmentId);
  console.log(selectedItems);
  departmentContainerDiv.innerHTML = '';
  itemsDom(selectedItems);
};

const addDepartmentEvents = () => {
  for (let idx = 0; idx < departmentCards.length; idx++)
  {
    departmentCards[idx].addEventListener('mouseenter', showDepartmentName);
    departmentCards[idx].addEventListener('mouseleave', hideDepartmentName);
    departmentCards[idx].addEventListener('click', showItems);
  }
};

module.exports = {
  addDepartmentEvents,
};
