var React = require('react')
var PropTypes = require('prop-types')

function Input (props) {
    return (
        <input
            autoComplete='off'
            className={props.className}
            onChange={props.handleInputChange}
            placeholder='city, state'
            type='text'
            value={props.cityName}
        />
    )
}

Input.propType = {
    cityName: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    className: 'input'
}

module.exports = Input