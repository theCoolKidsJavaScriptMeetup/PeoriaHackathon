import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccess = () => {
    return (<div className="Content center-text">
        <h2>Congrats! You're officially registered for the 2017 Peoria Civic Hackathon!</h2>
        <p>Take a peek at our <Link to='/faq'>FAQ's</Link></p>
    </div>)
}

export default RegistrationSuccess