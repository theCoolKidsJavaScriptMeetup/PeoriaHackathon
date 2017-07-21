import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccess = (props) => {
    return (<div className="Content center-text">
        <h2>Congrats!</h2>
        
        <h3><div className="green"><i className="fa fa-check-square-o"></i></div> You're officially registered {(props.match.params.id !== null && props.match.params.id !== "undefined") ? "with Team " + props.match.params.id : null } for the 2017 Peoria Civic Hackathon!</h3>
        <p>Expect to receive a confirmation e-mail from us in a few days, as well as updates on the Hackathon leading up to the event. Have any questions? Take a peek at our <Link className="whiteLink" to='/faq'>FAQ's</Link>.</p>
    </div>)
}

export default RegistrationSuccess