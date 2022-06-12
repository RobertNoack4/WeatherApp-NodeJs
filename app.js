import request from 'postman-request';

const url = "http://api.weatherstack.com/current?access_key=b75b0f4617abdccbe9a5c9d825a7bb97&query=37.8267,-122.4233"

request({url: url}, (error, response)=> {
    const data = JSON.parse(response.body)
    console.log(data.current)
})