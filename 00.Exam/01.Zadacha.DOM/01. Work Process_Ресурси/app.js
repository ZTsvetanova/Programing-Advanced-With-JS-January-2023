function solve() {
  //взимане на елементи от инпута
  let firstName = document.getElementById("fname");
  let lestName = document.getElementById("lname");
  let email = document.getElementById("email");
  let birth = document.getElementById("birth");
  let position = document.getElementById("position");
  let salary = document.getElementById("salary");
  let addWorkerBtn = document.getElementById("add-worker");

  let table = document.getElementById("tbody");
  let sumOfSalary = document.getElementById("sum");
  let sum = 0;

  //добавяне на евент на бутона
  addWorkerBtn.addEventListener("click", addFunction);

  function addFunction(event) {
    event.preventDefault();

    let first = firstName.value;
    let second = lestName.value;
    let em = email.value;
    let bir = birth.value;
    let pos = position.value;
    let sal = salary.value;

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

    //създаване на таблица

    let newRow = document.createElement("tr");
    table.appendChild(newRow);

    let tdFirstName = document.createElement("td");
    tdFirstName.textContent = first;
    newRow.appendChild(tdFirstName);

    let tdLastName = document.createElement("td");
    tdLastName.textContent = second;
    newRow.appendChild(tdLastName);

    let tdEmail = document.createElement("td");
    tdEmail.textContent = em;
    newRow.appendChild(tdEmail);

    let tdBirth = document.createElement("td");
    tdBirth.textContent = bir;
    newRow.appendChild(tdBirth);

    let tdPosition = document.createElement("td");
    tdPosition.textContent = pos;
    newRow.appendChild(tdPosition);

    let tdSalary = document.createElement("td");
    tdSalary.textContent = sal;
    newRow.appendChild(tdSalary);

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

    sum += Number(sal);

    sumOfSalary.textContent = sum.toFixed(2);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";

    editBtn.addEventListener("click", add);
    firedBtn.addEventListener("click", fired);

    function add() {
      console.log("aaa");
      sum = sum - Number(sal);
      sumOfSalary.textContent = sum.toFixed(2);
      document.getElementById("fname").value = first;
      document.getElementById("lname").value = second;
      document.getElementById("email").value = em;
      document.getElementById("birth").value = bir;
      document.getElementById("position").value = pos;
      document.getElementById("salary").value = sal;
      tdButtons.parentElement.remove();
    }

    function fired() {
      console.log(sal);
      sum = sum - Number(sal);
      sumOfSalary.textContent = sum.toFixed(2);
      tdButtons.parentElement.remove();
    }
  }
}
solve();
