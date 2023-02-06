function toggle() {
  let btn = document.querySelector(".button");
  let text = document.querySelector("#extra");
  if (btn.textContent === "More") {
    text.style.display = "block";
    btn.textContent = "Less";
  } else {
    text.style.display = "none";
    btn.textContent = "More";
  }
}
