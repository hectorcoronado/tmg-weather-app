var axios = require('axios')

var API_KEY = process.env.REACT_APP_WEATHER_KEY

function handleError (error) {
    console.warn(error)
    return null
}

function groupByDay (arr) {
    // var result = []
    return arr.reduce(function (result, item) {
        result[item.weekday] = result[item.weekday] || []
        result[item.weekday].push(item)

        return result
    }, [])
}

module.exports = {
    getCurrentWeather: function (cityOrZip) {
        var currentWeatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityOrZip + '&type=accurate&APPID=' + API_KEY
    
        return axios.get(currentWeatherEndpoint)
            .then(function(response) {
                return response.data
            })
            .catch(handleError)
    },

    getFiveDayForecast: function (cityOrZip) {
        var fiveDayForecastEndpoint = Number(cityOrZip) 
            ? 'https://api.openweathermap.org/data/2.5/forecast?zip=' + cityOrZip + ',us&units=imperial&appid=' + API_KEY
            : 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityOrZip + ',us&units=imperial&appid=' + API_KEY

        return axios.get(fiveDayForecastEndpoint)
            .then(function(response) {

                var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

                var forecastData = response.data.list.map(function(listItem) {
                    var dayCode = new Date(listItem.dt * 1000).getDay()

                    // create an object with relevant forecast data
                    var forecast = {}

                    forecast.timestamp = listItem.dt
                    forecast.dayCode = dayCode
                    forecast.weekday = weekdays[dayCode]
                    forecast.temp = listItem.main.temp
                    forecast.conditions = listItem.weather[0].description

                    return forecast
                })

                forecastData = groupByDay(forecastData)

                console.log(forecastData)
                
                return forecastData
            })
            .catch(handleError)
    }
}