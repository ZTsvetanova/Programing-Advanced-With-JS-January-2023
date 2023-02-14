function encodeAndDecodeMessages() {
  let textAreas = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", code);
  buttons[1].addEventListener("click", decode);

  function code() {
    let codedMessage = "";
    let input = textAreas[0].value;
    for (let i = 0; i < input.length; i++) {
      const el = input[i];
      codedMessage += String.fromCharCode(el.charCodeAt(0) + 1);
    }
    textAreas[1].value = codedMessage;
    textAreas[0].value = "";
  }
  function decode() {
    let decodedMessage = "";
    let codedInput = textAreas[1].value;
    for (let i = 0; i < codedInput.length; i++) {
      const el = codedInput[i];
      decodedMessage += String.fromCharCode(el.charCodeAt(0) - 1);
    }
    textAreas[1].value = decodedMessage;
    
  }
}
