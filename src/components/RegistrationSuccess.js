import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccess = (props) => {
    return (<div className="Content center-text">
        <h2>Congrats!</h2>
        <p>You're officially registered {(props.match.params.id !== null && props.match.params.id !== "undefined") ? "with Team " + props.match.params.id : null } for the 2017 Peoria Civic Hackathon!</p>
        <p>Now take a peek at our <Link className="whiteLink" to='/faq'>FAQ's</Link>.</p>
    </div>)
}

export default RegistrationSuccess