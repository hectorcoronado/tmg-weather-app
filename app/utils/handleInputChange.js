function handleInputChange (e) {
    var value = e.target.value

    this.setState(function () {
        return {
            cityName: value
        }
    })
}

module.exports = handleInputChange