//взимане на елемент по ИД
firstName = document.getElementById("fname");

//взимане на елемент по клас
firstName = document.getElementsByClassName("fname");

//взимане на елемент по таг
firstName = document.getElementsByTagName('div')

//взимане на елемент със селектор
firstName = document.querySelector('#id');
firstName = document.querySelector('.class');
firstName = document.querySelector('tag');

//да не се рестартира страницата при клик
event.preventDefault();

//изтриване на елемент
li.remove();

//проверка за празни полета
if (
  first === "" ||
  second === "" ||
  em === "" ||
  bir === "" ||
  pos === "" ||
  sal === ""
) {
  return;
}

//създаване на елемент, приемане на стойност и връзване към дървото
let tdLastName = document.createElement("td");
tdLastName.textContent = second;
newRow.appendChild(tdLastName);

//добавяне на клас
editBtn.classList.add("edit");

//изтриване на парент елемент
tdButtons.parentElement.remove();

//исчистване на стойности
document.getElementById("fname").value = "";
document.getElementById("lname").value = "";
document.getElementById("email").value = "";
document.getElementById("birth").value = "";
document.getElementById("position").value = "";
document.getElementById("salary").value = "";

//създаване на поле с 2 бутона с клас и евенти
let tdButtons = document.createElement("td");
newRow.appendChild(tdButtons);
let firedBtn = document.createElement("button");
firedBtn.classList.add("fired");
firedBtn.textContent = "Fired";
tdButtons.appendChild(firedBtn);
let editBtn = document.createElement("button");
editBtn.classList.add("edit");
editBtn.textContent = "Edit";
tdButtons.appendChild(editBtn);
editBtn.addEventListener("click", add);
firedBtn.addEventListener("click", fired);

//добавяне на картинка или снимка
<img src='./static/img/hero-bg.png.png' alt='image'></img>
