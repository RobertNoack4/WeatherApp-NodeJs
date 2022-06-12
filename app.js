import request from 'postman-request';

const url = "http://api.weatherstack.com/current?access_key=b75b0f4617abdccbe9a5c9d825a7bb97&query=37.8267,-122.4233&units=m"

request({url: url, json: true}, (error, response)=> {
    console.log("It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees")
})