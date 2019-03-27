var React = require('react')

var Button = require('./Button')
var Input = require('./Input')


class Search extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            cityName: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = require('../utils/handleInputChange')
    
    render () {
        console.log(this.props.location)
        return (
            <div className='search'>
                <h1 className='main-text'>enter a city and state</h1>
                <Input
                    className='search__input'
                    handleInputChange={this.handleInputChange}
                />
                <Button className='search__button' />
            </div>
        )
    }
}

module.exports = Search