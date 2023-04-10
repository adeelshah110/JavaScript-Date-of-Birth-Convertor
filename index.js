let date_of_birth;
let isDOB = false;
const settingIcon = document.getElementById("settingIcon");
const settinContent = document.getElementById("setting_content");
const beforeDOBEl = document.getElementById("beforeDOB");
const afterDOBEl = document.getElementById("afterDOB");
const dobInput = document.getElementById("dobInput");

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
/////////////////////////////////////////////////////

const toggleDOB = () => {
  if (isDOB) {
    settinContent.classList.add("hide");
  } else {
    settinContent.classList.remove("hide");
  }
  isDOB = !isDOB;
};
const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : "0${number}";
};

function updateAge() {
  const current_date = new Date();
  const date_difference = current_date - date_of_birth;

  const years = Math.floor(date_difference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(date_difference / (1000 * 60 * 60 * 24 * 365)) % 12;

  const days = Math.floor(date_difference / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor(date_difference / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(date_difference / (1000 * 60)) % 60;
  const seconds = Math.floor(date_difference / 1000) % 60;
  year.innerHTML = years;
  month.innerHTML = months;
  day.innerHTML = days;
  hours.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}

const setDOBHandler = () => {
  const dateString = dobInput.value;
  date_of_birth = dateString ? new Date(dateString) : null;
  if (date_of_birth) {
    beforeDOBEl.classList.add("hide");

    setInterval(() => updateAge(), 1000);
  }
};

//////////////////////////////////////////////////////

settingIcon.addEventListener("click", toggleDOB);
dobButton.addEventListener("click", setDOBHandler);
