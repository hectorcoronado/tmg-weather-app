var axios = require('axios')

var API_KEY = process.env.REACT_APP_WEATHER_KEY
var currentWeatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + API_KEY
var fiveDayForecastEndpoint = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&APPID=' + API_KEY + '&cnt=5'