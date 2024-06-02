const chartImgElem = document.getElementById('waterLevelChart');
const selectElem = document.getElementById('select');
const form = document.getElementById("dropdownForm");
const siagaElem = document.getElementById("statusSiaga")

form.addEventListener('submit', event => {
    event.preventDefault()
    chartImgElem.src = './chart_images/' + selectElem.value + '.csv.png';

    if (selectElem.value == 'Pasar_Ikan_-_Laut') {
        siagaElem.innerText = "> Siaga II"
    }
    else {
        siagaElem.innerText = "> Belum ada Siaga"
    }
})

const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=-6.200000&lon=106.816666&units=metric&appid=ea0b8aae6963a492e37462c3b9c835ce`;

fetch(weather_api)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].main;
        const weather_desc = data.weather[0].description;
        const temp = data.main.temp;

        document.getElementById('weatherName').innerText = `> ${weather} /`;
        document.getElementById('weatherDesc').innerText = ` / ${weather_desc}`;
        document.getElementById('temperature').innerText = `(${temp}°C)`;
    })



