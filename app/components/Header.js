var React = require('react')

var Button = require('./Button')
var Input = require('./Input')

function Header () {
    return (
        <div className='header'>
            <h2 className='header__text'>anthropogenic thermal maximum</h2>
            <Input className='header__input' />
            <Button className='header__button' />
        </div>
    )
}

module.exports = Header