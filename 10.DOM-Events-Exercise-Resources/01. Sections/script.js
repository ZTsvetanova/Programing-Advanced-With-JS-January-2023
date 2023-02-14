function create(words) {
  for (let word of words) {
   
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.innerText = word;
    p.style.display = "none";

    div.appendChild(p);
    div.addEventListener("click", showWord);

    document.getElementById("content").appendChild(div);
  }

  function showWord(event) {
    if (event.target.nodeName === "P") {
      return;
    }

    let p = event.target.children[0];
    p.style.display = "block";
  }
}
