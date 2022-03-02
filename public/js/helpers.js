const table = document.querySelector('#appointments');
const elementCreator = (name) => document.createElement(name);

const elementWithValue = (name, value) => {
  const element = elementCreator(name);
  element.innerText = value;
  return element;
};

const appendElement = (parent, child) => {
  parent.appendChild(child);
};
