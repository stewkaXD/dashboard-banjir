const chartImgElem = document.getElementById('waterLevelChart');
const selectElem = document.getElementById('select');
const form = document.getElementById("dropdownForm");
const siagaElem = document.getElementById("statusSiaga")

form.addEventListener('submit', event => {
    event.preventDefault()
    chartImgElem.src = './chart_images/' + selectElem.value + '.csv.png';

    if (selectElem.value == 'Pasar_Ikan_-_Laut') {
        siagaElem.innerText = "Siaga II"
    }
    else {
        siagaElem.innerText = "Belum ada Siaga"
    }
})

const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=-6.200000&lon=106.816666&units=metric&appid=ea0b8aae6963a492e37462c3b9c835ce`;

fetch(weather_api)
    .then(response => response.json())
    .then(data => {
        const weather_name = data.weather[0].description.toUpperCase();
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind_speed = data.wind.speed;

        document.getElementById('icon-container').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" width="200px">`
        document.getElementById('weather_name').innerText = `${weather_name}`;
        document.getElementById('temperature').innerText = `${temp}°C`;
        document.getElementById('humidity').innerText = `${humidity}%`;
        document.getElementById('wind_speed').innerText = `${wind_speed} km/s`;
    })



