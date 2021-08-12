const daysDiv = document.querySelector("#clock__days");
const hoursDiv = document.querySelector("#clock__hours");
const minutesDiv = document.querySelector("#clock__minutes");
const secondsDiv = document.querySelector("#clock__seconds");

const deadline = new Date();
const deadlineTime = deadline.setDate(deadline.getDate() + 9); // counting down from 9 days as in mockup

const countdown = setInterval(() => {
  const now = new Date().getTime();
  let timeToGo = deadlineTime - now;

  let days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

  daysDiv.innerText = days;
  hoursDiv.innerText = hours;
  minutesDiv.innerText = minutes;
  secondsDiv.innerText = seconds;
}, 1000);
