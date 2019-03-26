var React = require('react')

function Input (props) {
    return (
        <input className={props.className} placeholder='city, state'></input>
    )
}

module.exports = Input