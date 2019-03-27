var api = require('./api')

function handleOnSubmit (e, cityName) {
    e.preventDefault()

    return api.getFiveDayForecast(cityName)
    
    // this.setState(function () {
    //     return {
    //         cityName: value
    //     }
    // })
}

module.exports = handleOnSubmit