var React = require('react')
var Link = require('react-router-dom').Link
var PropTypes = require('prop-types')

function Button (props) {
    return (
        <Link 
            className={props.className}
            to={props.to}>
                {props.text}
        </Link>
    )
}

Button.propType = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

Button.defaultProps = {
    className: 'button',
    text: 'get weather',
    to: '/'
}
module.exports = Button