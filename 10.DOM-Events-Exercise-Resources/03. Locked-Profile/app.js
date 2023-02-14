function lockedProfile() {

  Array.from(document.querySelectorAll(".profile button")).forEach((element) =>
    element.addEventListener("click", onClick)
  );

  function onClick(event) {
    const parent = event.target.parentElement;
    const unlockedCheck = parent.querySelector('input[value="unlock"]');

    if (unlockedCheck.checked) {
      const hidden = parent.querySelector("div");

      hidden.style.display === "block"
        ? (hidden.style.display = "none")
        : (hidden.style.display = "block");

      event.target.textContent === "Show more"
        ? (event.target.textContent = "Hide it")
        : (event.target.textContent = "Show more");
    }
  }
}
