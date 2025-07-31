let city = document.querySelector('.city');
let search = document.querySelector(".search");
search.addEventListener("click", ()=>{
    let loc = city.value;
    async function getWeather(){
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=86a8781615d549b98ce124709253107&q=${loc}&aqi=yes`);
        let data = await response.json();
        let city = data.location.name;
        let country = data.location.country;
        let region = data.location.region;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;
        let humidity = data.current.humidity;
        let wind = data.current.wind_kph;
        let pressure = data.current.pressure_mb;
        let visibility = data.current.vis_km;
        document.querySelector('#city').innerHTML = city;
        document.querySelector('#country').innerHTML = country;
        document.querySelector('#region').innerHTML = region;
        document.querySelector('#temp').innerHTML = temp;
        document.querySelector('#condition').innerHTML = condition;
        document.querySelector('#humidity').innerHTML = humidity;
        document.querySelector('#wind').innerHTML = wind;
        document.querySelector('#pressure').innerHTML = pressure;
        document.querySelector('#visibility').innerHTML = visibility;
    }
    
    getWeather();

});
