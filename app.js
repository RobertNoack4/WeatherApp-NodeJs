import request from 'postman-request';

const urlGeoCoding = "http://api.openweathermap.org/geo/1.0/direct?q=Dresden,de&limit=1&appid=e0387cf96f96fa0fb36a6bd9fe5cc754"
var lat
var lon

request({url: urlGeoCoding}, (error, response)=>{

    const dataJSON = JSON.parse(response.body)
    lat = dataJSON[0].lat
    lon = dataJSON[0].lon
})
setTimeout(()=>{
    const urlWeather = "http://api.weatherstack.com/current?access_key=b75b0f4617abdccbe9a5c9d825a7bb97&query="+ lon + "," + lat + "&units=m"

    request({url: urlWeather, json: true}, (error, response)=> {
        console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees")
    })    
}, 2000)
