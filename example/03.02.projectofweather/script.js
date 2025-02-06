const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a"; 

function updateWeather() { 
    let city = document.getElementById("cityInput").value; 
    
    if(city){
        localStorage.setItem('city', city);
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl) 
    .then(response => response.json())  
    .then(data => { 
        if (data.cod === 200) { 
            document.getElementById("cityName").innerHTML = data.name;   
            document.getElementById("temperature").innerHTML = `Temperature: ${data.main.temp}°C`;  
            document.getElementById("description").innerHTML = `${data.weather[0].description}`;
            document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;  
            document.getElementById("windSpeed").innerHTML = `Wind Speed: ${data.wind.speed} m/s`;   
        } else { 
            console.log("Error: ", data.message); 
            alert('City not found');
        } 
    }) 
    .catch(error => { 
        console.log("Error:", error);  
    }); 
}
function localCity() {
    const save = localStorage.getItem('city');
    if(save){
        document.getElementById("cityInput").value = save;
        updateWeather();
        updateWeek();

    }
}

function updateWeek() {
    let city = document.getElementById("cityInput").value;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        if (data.cod === "200") {
            const forecastDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
            forecastDays.forEach((day, index) => {
                const forecast = data.list[index * 8];
                const temperature = forecast.main.temp; 
                const weatherIcon = temperature < 0
                    ? 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-cloudy-weather-forecast-cloud-overcast-png-image_5246453.png' 
                    : 'https://static.vecteezy.com/system/resources/thumbnails/013/743/930/small/sun-or-brightness-icon-png.png';
                document.getElementById(day).querySelector('.forecast-temp').textContent = `${forecast.main.temp}°C`;
                document.getElementById(day).querySelector('.weather-icon').src = weatherIcon; 
            });
        } else {
            console.log("Error: ", data.message);
            alert('City not found');
        }
    })
    .catch(error => {
        console.log("Error:", error);
    });
}


function handleClick() {
        localCity();
    updateWeather();
    updateWeek();

}
