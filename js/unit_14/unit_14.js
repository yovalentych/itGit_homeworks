// API INFO
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'e09cd95b418f6d73f0dc4adb3006df2e';
// END API
// CONSTS
const cities = [
  { value: '703448', text: 'Kyiv' },
  { value: '702550', text: 'Lviv' },
  { value: '698740', text: 'Odesa' },
  { value: '706483', text: 'Kharkiv' },
];
//   END CONSTS
// ADDITIONAL FUNCTIONS
function getWindSpeedCategory(speed) {
  const speedCategories = [
    { category: 'Calm', minSpeed: 0, maxSpeed: 1 },
    { category: 'Light Air', minSpeed: 1, maxSpeed: 3 },
    { category: 'Light Breeze', minSpeed: 4, maxSpeed: 6 },
    { category: 'Gentle Breeze', minSpeed: 7, maxSpeed: 10 },
    { category: 'Moderate Breeze', minSpeed: 11, maxSpeed: 16 },
    { category: 'Fresh Breeze', minSpeed: 17, maxSpeed: 21 },
    { category: 'Strong Breeze', minSpeed: 22, maxSpeed: 27 },
    { category: 'Near Gale', minSpeed: 28, maxSpeed: 33 },
    { category: 'Gale', minSpeed: 34, maxSpeed: 40 },
    { category: 'Strong Gale', minSpeed: 41, maxSpeed: 47 },
    { category: 'Storm', minSpeed: 48, maxSpeed: 55 },
    { category: 'Violent Storm', minSpeed: 56, maxSpeed: 63 },
    { category: 'Hurricane Force', minSpeed: 64, maxSpeed: Infinity },
  ];
  const category = speedCategories.find(
    (category) => speed >= category.minSpeed && speed <= category.maxSpeed
  );
  return category ? category.category : 'Invalid speed';
}
function getWindDirection(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  degrees = ((degrees % 360) + 360) % 360;
  const index = Math.floor((degrees + 22.5) / 45) % 8;
  return directions[index];
}
// END ADD FUNC

// MAIN FUNC
const getWeather = (selectedCity = 0) => {
  let weather = fetch(
    `${URL}?id=${cities[selectedCity].value}&appid=${APIKEY}`
  );
  weather
    .then((response) => response.json())
    .then((data) => {
      const outcityName = document.getElementById('city-name');
      const outTemp = document.getElementById('temperature');
      const outCloud = document.getElementById('cloudDescription');
      const outCloudIcon = document.getElementById('cloudIcon');
      const outPressure = document.getElementById('pressure');
      const outWindSpeed = document.getElementById('windSpeed');
      const outWindDirection = document.getElementById('windDirection');
      // features
      outcityName.innerHTML = data.name;
      outTemp.innerHTML = `<span>${Math.round(
        data.main.temp - 273.15
      )}°C</span>`;
      outCloud.innerHTML = `<span>${data.weather[0].description}</span>`;
      outCloudIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="cloud icon">`;
      outPressure.innerHTML = `Pressure: <span>${data.main.pressure} P </span>`;
      outWindSpeed.innerHTML = `Wind speed:<span> ${getWindSpeedCategory(
        data.wind.speed
      )}</span>`;
      outWindDirection.innerHTML = `Wind direction: <span>${getWindDirection(
        data.wind.deg
      )}</span>`;
    })

    .catch((err) => {
      console.error('Error fetching data:', err);
    });
};
const showWeather = () => {
  const citySelect = document.getElementById('city');
  citySelect.addEventListener('change', () => {
    const selectedIndex = citySelect.selectedIndex;
    getWeather(selectedIndex);
  });
};
// END MAIN FUNC
getWeather();
showWeather();

const selectCity = document.getElementById('city');

const populateCityOptions = (citiesArray, selectElement) => {
  citiesArray.forEach((city) => {
    const option = document.createElement('option');
    option.value = city.value;
    option.text = city.text;
    selectElement.appendChild(option);
  });
};
populateCityOptions(cities, selectCity);
