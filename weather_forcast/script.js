
        document.getElementById('search-form').addEventListener('submit', function(e) {
            e.preventDefault(); 
            const city = document.getElementById('city-input').value;
            fetchWeatherData(city);
        });

        function fetchWeatherData(city) {
            const apiKey = '8f97478d4a8049e887012049243004'; 
            const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Weather data not found.');
                    }
                    return response.json();
                })
                .then(data => displayWeatherData(data))
                .catch(error => console.error('Error:', error));
        }

        function displayWeatherData(data) {
            const weatherDetails = document.getElementById('weather-details');
            const { current, forecast, location } = data;
            const currentConditionsHtml = `
                <h2>Weather in ${location.name}, ${location.country}</h2>
                <p><strong>Temperature:</strong> ${current.temp_c} °C</p>
                <p><img src="${current.condition.icon}" alt="Weather Icon"> ${current.condition.text}</p>
                <p><strong>Humidity:</strong> ${current.humidity}%</p>
                `;

            let forecastHtml = '<h3>5-Day Forecast</h3>';
            forecast.forecastday.forEach(day => {
                forecastHtml += `
                    <div>
                        <h4>${day.date}</h4>
                        <p>Max: ${day.day.maxtemp_c} °C, Min: ${day.day.mintemp_c} °C</p>
                        <p><img src="${day.day.condition.icon}" alt="Weather Icon"> ${day.day.condition.text}</p>
                    </div>
                `;
            });

            weatherDetails.innerHTML = currentConditionsHtml + forecastHtml;
        };
