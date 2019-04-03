var axios = require('axios')

var API_KEY = process.env.REACT_APP_WEATHER_KEY

function handleError (error) {
    console.warn(error)
    return null
}

module.exports = {
    getCurrentWeather: function (cityName) {
        var currentWeatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + API_KEY
    
        return axios.get(currentWeatherEndpoint)
            .then(function(response) {
                console.log(response.data)
                return response.data
            })
            .catch(handleError)
    },

    getFiveDayForecast: function (cityName) {
        var fiveDayForecastEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&APPID=' + API_KEY + '&cnt=5'

        return axios.get(fiveDayForecastEndpoint)
            .then(function(response) {
                console.log(response.data)
                return response.data
            })
            .catch(handleError)
    }
}