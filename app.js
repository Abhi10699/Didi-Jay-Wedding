const daysLeftElem = document.getElementById("days_left");

const hoursLeftElem = document.getElementById("hours_left");
const minutesLeftElem = document.getElementById("minutes_left");
const secondsLeftElem = document.getElementById("seconds_left");

const today = Date.now()
const endDate = new Date("2024-12-26").getTime();

const hoursLeft = parseInt(((endDate - today) / 1000) / 3600)
const daysLeft = parseInt(hoursLeft / 24)

setInterval(() => {

  const today = Date.now()
  const endDate = new Date("2024-12-26").getTime();
  const hoursLeft = parseInt(((endDate - today) / 1000) / 3600)
  const daysLeft = parseInt(hoursLeft / 24)
  

  let now = moment();
  let timeDiff = moment(now).endOf('day') - now;
  let dur = moment.duration(timeDiff);

  daysLeftElem.innerText = daysLeft + " Days";
  hoursLeftElem.innerText = dur.hours() + " Hours"
  minutesLeftElem.innerText = dur.minutes() + " Minutes"
  secondsLeftElem.innerText = dur.seconds() + " Seconds"
},[])


const dateBtn = document.getElementById("date_btn")
dateBtn.addEventListener('click', () => {
  window.location = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mm9sM3FlbDlrNjA1OGhsM3JkazYxc2p1b20gcGF0ZWxhYmhpMTA2OTlAbQ&tmsrc=patelabhi10699%40gmail.com";
})