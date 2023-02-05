function editElement(ref, match, replacer) {

  let text = ref.textContent;
  let result = text.split(match).join(replacer);
  ref.textContent = result;
  //console.log(result);
}
editElement("zdraveite name kak ste", "name", "age");
