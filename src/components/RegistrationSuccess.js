import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccess = () => {
    return (<div className="Content center-text">
        <h2>Congrats!</h2>
        <p>You're officially registered for the 2017 Peoria Civic Hackathon!</p>
        <p>Now take a peek at our <Link className="whiteLink" to='/faq'>FAQ's</Link>.</p>
    </div>)
}

export default RegistrationSuccess