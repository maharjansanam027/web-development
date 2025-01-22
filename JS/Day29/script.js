const button = document.querySelector('button');
button.addEventListener('click',(event)=>{
    const city = document.getElementById('city-input').value;

    const api = fetch(`http://api.weatherapi.com/v1/current.json?key=f095d2f84d314d1dbc294315252201&q=${city}&aqi=yes`);

    api.then((data)=>{
        const pro1 = data.json();
        pro1.then((data)=>{
            
             updateWeather(data);
        })
    })

})

function updateWeather(data){
    const temperature = document.querySelector(".temperature");
    const city_name = document.querySelector('.city-name');
    temperature.innerHTML = `Temperature: ${data.current.temp_c}°C`;
    city_name.innerHTML = data.location.name; 
    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`

    const wind_speed = document.querySelector('.wind-speed');
    wind_speed.innerHTML = `Wind Speed: ${data.current.wind_kph} km/h`
    const weather = document.querySelector('.description');
    weather.innerHTML = `Weather: ${data.current.condition.text}`

    const image = document.querySelector("img");
    image.src = data.current.condition.icon;

}