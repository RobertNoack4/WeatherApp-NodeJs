import request from 'postman-request';

const urlGeoCoding = "http://api.openweathermap.org/geo/1.0/direct?q=Dresden,de&limit=1&appid=e0387cf96f96fa0fb36a6bd9fe5cc754"

request({url: urlGeoCoding, json: true}, (error, response)=>{
    console.log(response.body)
})

const urlWeather = "http://api.weatherstack.com/current?access_key=b75b0f4617abdccbe9a5c9d825a7bb97&query=37.8267,-122.4233&units=m"

request({url: urlWeather, json: true}, (error, response)=> {
    console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees")
})
