// // script.js
document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value;
    if (!city) return;

    fetch(`http://weatherapi.com/v1/forecast.json?key=8f97478d4a8049e887012049243004&q=${city}&days=5`)
        .then(response => response.json())
        .then(data => {
            const current = data.current;
            const forecast = data.forecast.forecastday;

            let output = `
                <div class="weather-info">
                    <h2>Weather in ${data.location.name}</h2>
                    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
                    <p>Temperature: ${current.temp_c} °C</p>
                    <p>Condition: ${current.condition.text} <img src="${current.condition.icon}" alt="Condition Icon"></p>
                    <p>Humidity: ${current.humidity} %</p>
                </div>
                <h3>5-Day Forecast</h3>
                <ul>
            `;

            forecast.forEach(day => {
                output += `
                    <li>
                        <div class="weather-info">
                            <h4>${day.date}</h4>
                            <p>Condition: ${day.day.condition.text} <img src="${day.day.condition.icon}" alt="Condition Icon"></p>
                            <p>Temperature: ${day.day.mintemp_c} - ${day.day.maxtemp_c} °C</p>
                        </div>
                    </li>
                `;
            });

            output += '</ul>';

            document.getElementById('weatherData').innerHTML = output;
        })
        .catch(error => console.error('Error:', error));
});
