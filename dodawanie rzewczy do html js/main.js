const list = document.querySelector("#list");
const list2 = document.querySelector("#list2");

// for(let i = 0; i < 5; i++) {
//     const li = document.createElement("li");

//     li.append(document.createTextNode(`Element listy ${i + 1}`));

//     list.append(li);
// }

const dc = document.createDocumentFragment();
for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element listy ${i + 1}`));

    dc.append(li);
}
list.append(dc);

const dc2 = document.createDocumentFragment();
for(let i = 0; i < 3; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Dodany element ${i + 1}`));

    dc2.append(li);
}
list2.append(dc2);