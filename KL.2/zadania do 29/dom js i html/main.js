const list1 = document.querySelector("#list1");

const li = document.createElement("li");
const text = document.createTextNode("Treść");

// const li2 = document.createElement("li");
// const text2 = document.createTextNode("T2");

// li.appendChild(text);
// list1.append(li) //prepend, before, after

list1.querySelector(":last-child").remove();





const container = document.querySelector("#container");
const p = document.querySelector(".column p");
const allParagraphs = document.querySelectorAll("p");

const form = document.querySelector("#myForm");

const input = form.querySelector("[name='firstName']");

console.log(document.forms);
console.log(document.images);
console.log(document.links);

console.log(document.body);
console.log(document.documentElement);

document.getElementById("myForm");
document.getElementsByClassName("text");


