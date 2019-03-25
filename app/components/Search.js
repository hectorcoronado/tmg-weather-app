var React = require('react')

var Header = require('./Header')

function Search () {
    return (
        <>
            <Header />
            <h1 className='main-text'>enter a city and state</h1>
        </>
    )
}

module.exports = Search