function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "7f93ac40d6a70cd0b701becc6a8cfe94";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherDiv = document.getElementById("weather");
            weatherDiv.innerHTML = `
                <h2>Clima en ${data.name}</h2>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Descripción: ${data.weather[0].description}</p>
                <p>Viento: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => console.error(error));
}

