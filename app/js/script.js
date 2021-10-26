const daysDiv = document.querySelector("#days");
const hoursDiv = document.querySelector("#hours");
const minutesDiv = document.querySelector("#minutes");
const secondsDiv = document.querySelector("#seconds");
const clocks = document.querySelectorAll(".time__container");

const deadlineTime = new Date();
deadlineTime.setDate(deadlineTime.getDate() + 4);

const storedTimeValues = {
  days: 4,
  hours: 23,
  minutes: 59,
  seconds: 59,
};

const countdown = setInterval(() => {
  const now = new Date().getTime();

  let timeToGo = deadlineTime - now;
  timeToGo <= 1000 && clearInterval(countdown); // stop once the countdown is done
  let days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

  // padStart to keep the leading zeros
  secondsDiv.innerText = seconds.toString().padStart(2, "0");
  daysDiv.innerText = days.toString().padStart(2, "0");
  hoursDiv.innerText = hours.toString().padStart(2, "0");

  minutesDiv.innerText = minutes.toString().padStart(2, "0");

  // flip animation
  clocks.forEach((clockCard) => {
    // check for second element
    const numberContainer = clockCard.getElementsByTagName("span")[1];
    const timeType = numberContainer.id;
    const timeValue = parseInt(numberContainer.innerText);
    // add class if current time value is lower than stored one
    if (storedTimeValues[timeType] > timeValue) {
      clockCard.classList.toggle("flip");
      timeType !== "seconds" && (storedTimeValues[timeType] = timeValue); // prevent seconds' flip from being locked
    }
  });
}, 1000);
