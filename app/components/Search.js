var React = require('react')

var Button = require('./Button')
var Input = require('./Input')

function Search () {
    return (
        <div className='search'>
            <h1 className='main-text'>enter a city and state</h1>
            <Input className='search__input' />
            <Button className='search__button' />
        </div>
    )
}

module.exports = Search