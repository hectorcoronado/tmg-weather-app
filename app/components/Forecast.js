var React = require('react')
var queryString = require('query-string')

var api = require('../utils/api')

class Forecast extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            loading: true,
            forecast: null
        }
    }

    componentDidMount () {
        var queryParam = queryString.parse(this.props.location.search)

        console.log(queryParam)
        api.getCurrentWeather(queryParam.city)
            .then(function(results) {
                if (results === null) {
                    return this.setState(function () {
                        return {
                            error: 'there was an error...',
                            loading: false
                        }
                    })
                }

                this.setState(function () {
                    return {
                        forecast: results,
                        loading: false
                    }
                })
            }.bind(this))
    }

    render () {
        var forecast = JSON.stringify(this.state.forecast)
        return (
            <div>
                { this.state.loading ? <h2>Loading</h2> : <p>{forecast}</p>}
            </div>
        )
    }
}

module.exports = Forecast