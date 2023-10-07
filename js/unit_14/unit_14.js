const URL = 'https://api.openweathermap.org/data/2.5/weather';
const apikey = 'e09cd95b418f6d73f0dc4adb3006df2e';

const cityID = document.querySelector('#cities');
const weather_description = document.querySelector('.small');
const current_temp = document.querySelector('#temperature');
const wind = document.querySelector('#windy');
const humidity = document.querySelector('#humidity');
const feels_like = document.querySelector('#feels');
const image = document.querySelector('img');
const city_name = document.querySelector('#city_name');

cityID.addEventListener('change', () => {
  const selectedCityID = cityID.value;

  fetch(`${URL}?id=${selectedCityID}&appid=${apikey}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      weather_description.textContent = data.weather[0].description;
      current_temp.textContent = `${Math.floor(
        data.main.temp - 273.15
      )}\u00B0C`;
      feels_like.textContent = `${Math.floor(
        data.main.feels_like - 273.15
      )}\u00B0C`;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      humidity.textContent = data.main.humidity + '%';
      const windSpeed = data.wind.speed * 10;
      if (windSpeed < 5) {
        wind.textContent = 'Low winds';
      } else if (windSpeed >= 5 && windSpeed < 15) {
        wind.textContent = 'Moderate wind';
      } else if (windSpeed >= 15 && windSpeed < 25) {
        wind.textContent = 'Strong winds';
      } else {
        wind.textContent = 'Very strong winds';
      }
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
});
