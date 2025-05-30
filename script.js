const apiKey = "7bd666024ba0f6330bd21bd52ba91f82";
const card = document.querySelector(".card");
const searchBox = document.querySelector(".card__input");
const searchBtn = document.getElementById("searchBtn");
const temp = document.querySelector(".card__title--temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.querySelector(".card__weather-icon");
const date = document.getElementById("date");

const showDate = () => {
  const now = new Date();
  const day = now.getDate();
  const monthName = now.toLocaleString("en", { month: "long" });
  date.innerHTML = `${day} ${monthName}`;
};

async function getWeather(city) {
  city = city.trim();
  if (!city) return;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const result = await response.json();
    console.log(result);
  } catch (err) {
    alert(err);
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
showDate();
