window.addEventListener("load", solve);

function solve() {
  let genre = document.getElementById("genre");
  let songName = document.getElementById("name");
  let author = document.getElementById("author");
  let date = document.getElementById("date");
  let addBtn = document.getElementById("add-btn");

  let allHits = document.getElementById("all-hits");
  let divAllHits = document.querySelector(".all-hits-container");

  let likes = document.querySelector('#total-likes .likes p');


  addBtn.addEventListener("click", addFun);

  function addFun(event) {
    event.preventDefault();
    if (
      genre.value === "" ||
      songName.value === "" ||
      author.value === "" ||
      date.value === ""
    ) {
      return;
    }
    let divHitInfo = document.createElement("div");
    divHitInfo.classList.add("hits-info");
    divAllHits.appendChild(divHitInfo);

    let picture = document.createElement("img");
    picture.src = './static/img/img.png';

    let genreHTwo = document.createElement("h2");
    genreHTwo.textContent = `Genre: ${genre.value}`;

    let nameHTwo = document.createElement("h2");
    nameHTwo.textContent = `Name: ${songName.value}`;

    let authorHTwo = document.createElement("h2");
    authorHTwo.textContent = `Author: ${author.value}`;

    let dateHTwo = document.createElement("h3");
    dateHTwo.textContent = `Date: ${date.value}`;

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = `Save song`;
    saveBtn.addEventListener('click', saveSongFun);

    let likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.textContent = `Like song`;
    likeBtn.addEventListener('click', likeSongFun);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = `Delete`;
    deleteBtn.addEventListener('click', deleteSongFun);

    divHitInfo.appendChild(picture);
    divHitInfo.appendChild(genreHTwo);
    divHitInfo.appendChild(nameHTwo);
    divHitInfo.appendChild(authorHTwo);
    divHitInfo.appendChild(dateHTwo);
    divHitInfo.appendChild(saveBtn);
    divHitInfo.appendChild(likeBtn);
    divHitInfo.appendChild(deleteBtn);

    document.getElementById("genre").value = "";
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
  }
}
