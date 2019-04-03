var React = require('react')

var Button = require('./Button')
var Input = require('./Input')

var api = require('../utils/api')

class Search extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            cityName: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = require('../utils/handleInputChange')

    handleSubmit (e) {
        e.preventDefault()
    }
    
    render () {
        return (
            <div className='search'>
                <h1 className='main-text'>enter a city and state</h1>
                <form
                    className='search__form'
                    onSubmit={this.handleSubmit}>
                    <Input
                        cityName={this.state.cityName}
                        className='search__input'
                        handleInputChange={this.handleInputChange}
                    />
                    <Button
                        className='button search__button'
                        // onClick={this.handleSubmit}
                        to={'/forecast?city=' + this.state.cityName}
                    />
                </form>
            </div>
        )
    }
}

module.exports = Search