function validate() {
  const pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)/g;
  let input = document.getElementById("email");

  input.addEventListener("change", check);

  function check(event) {
    if (pattern.test(event.target.value)) {
      event.target.removeAttribute("class");
      return;
    }
    event.target.className = "error";
  }
}
