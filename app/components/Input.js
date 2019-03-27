var React = require('react')
var PropTypes = require('prop-types')

function Input (props) {
    return (
        <input
            className={props.className}
            placeholder='city, state'
            onChange={props.handleInputChange}
        />
    )
}

Input.propType = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    className: 'input'
}

module.exports = Input