const list = document.querySelector('#list');

const title = document.querySelector('.title')
console.log(title.firstChild)

const titleDIV = document.querySelector('.container');
console.log(titleDIV.firstElementChild.firstChild);

const children = list.childNodes;
const elementChildren = list.children;

const first = list.firstChild;
const firstElement = list.firstElementChild;

const last = list.lastChild;
const lastElement = list.lastElementChild;

const second = firstElement.nextSibling;
const secondElement = firstElement.nextElementSibling;

const lastButOne = lastElement.previousSibling;
const lastButOneElement = lastElement.previousElementSibling;

const parentElement = firstElement.parentNode;