async function Weather() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/' +
        'weather?id=686967&appid=54168ca77e1b33fd8b913072710dda13');
    let response2 = await response.json();
    console.log(response2);
    let data = new Date();
    document.getElementById('datetime').innerText +=data.toDateString();
    document.getElementById('city').innerText +=response2.name + ', ' + response2.sys.country;
    let tempnow = Math.round(response2.main.temp - 273.15) + '°C';
    document.getElementById('temp').innerText += tempnow;
    let feeltemp = Math.round(response2.main.feels_like - 273.15) + '°C';
    document.getElementById('feeltemp').innerText +=feeltemp;
    document.getElementById('wind').innerText +=response2.wind.speed + ' m/s';
    document.getElementById('pressure').innerText +=response2.main.pressure/10 + ' kPa';
    document.getElementById('long').innerText +=response2.coord.lon;
    document.getElementById('latitude').innerText +=response2.coord.lat;
}