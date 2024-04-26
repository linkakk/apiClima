document.addEventListener("DOMContentLoaded", function() {
    const btnConsulta = document.querySelector(".botonConsulta");

    btnConsulta.addEventListener("click", getWeather);

    function getWeather() {
        const cityInput = document.getElementById("cityInput").value;
        const apiKey = "e02e7bee620664795b72fbd15de3d214"; 

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById("weatherInfo");
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Humedad: ${data.main.humidity}%</p>
                    <p>Descripción: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.error("Error al obtener los datos del clima:", error);
            });
    }
});