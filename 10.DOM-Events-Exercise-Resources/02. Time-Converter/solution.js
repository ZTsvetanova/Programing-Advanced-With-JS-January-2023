function attachEventsListeners() {
  let inputDays = document.getElementById("days");
  let inputHours = document.getElementById("hours");
  let inputMinutes = document.getElementById("minutes");
  let inputSeconds = document.getElementById("seconds");

  let daysBtn = document.getElementById("daysBtn");
  let hoursBtn = document.getElementById("hoursBtn");
  let minutesBtn = document.getElementById("minutesBtn");
  let secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", convert);
  hoursBtn.addEventListener("click", convert);
  minutesBtn.addEventListener("click", convert);
  secondsBtn.addEventListener("click", convert);

  function convert(event) {
    const parent = event.target.parentElement;
    
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (parent.textContent.includes("Days")) {
      days = Number(parent.querySelector("#days").value);
      hours = days * 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Hours")) {
      hours = Number(parent.querySelector("#hours").value);
      days = hours / 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Minutes")) {
      minutes = Number(parent.querySelector("#minutes").value);
      hours = minutes / 60;
      days = hours / 24;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Seconds")) {
      seconds = Number(parent.querySelector("#seconds").value);
      minutes = seconds / 60;
      hours = minutes / 60;
      days = hours / 24;
    }
    inputDays.value = days;
    inputHours.value = hours;
    inputMinutes.value = minutes;
    inputSeconds.value = seconds;
  }
}
