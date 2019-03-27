var React = require('react')
var PropTypes = require('prop-types')

function Button (props) {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    )
}

Button.propType = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    className: 'button',
    text: 'get weather'
}
module.exports = Button