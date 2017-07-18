import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../faq.css'

const FAQCard = ({title, answer}) => { 
    return (<div className = "FaqCard">
        <div className="FaqQuestion">{title}</div>
        <div className= "FaqAnswer">{answer}</div>
    </div>)
}

export default class FAQ extends Component {
    render() {
        return (
            <div className="Content">
                <h2>FAQ</h2>
                <div className="faq-group">
                    <FAQCard title="Who can attend?" answer="Anyone over the age of 18 with a willingness to work on solving civic challenges can attend the hackathon."/>
                    <FAQCard title="How much does it cost?" answer="Due to our generous sponsors, the Peoria Civic Hackathon is free to attend!"/>
                    <FAQCard title="What if I don't code?" answer="Coding is a necessary part of this event, but the hackathon is open to all levels of experience. If you are new to coding, it is recommended that you join or create a team with experienced coders."/>
                    <FAQCard title="What are the prizes?" answer="1st Prize: $1,000 - 2nd Prize: $500"/>
                    <FAQCard title="Are there travel reimbursements?" answer="Unfortunately, we will not be able to provide travel reimbursements to attendees."/>
                    <FAQCard title="When should I arrive?" answer={<div><div>Friday 8/11: <i>(Optional)</i> Join us between 6:00PM-8:00PM for a social event before the hackathon begins on Saturday. This is a good opportunity to create or join a team and socialize with fellow participants.<br/><br/>Saturday 8/12: Check-in and registration will take place between 8AM-8:30AM on Saturday morning.</div></div>}/>
                    <FAQCard title="Do I need a team?" answer="Teams may be formed prior to or at the beginning of the event; there will be an opportunity to find a team during Friday’s social event. Recommended team size is 2-7 people."/>
                    <FAQCard title="How do I register a team?" answer={<div>Please head over to the <Link to="/registration">team registration form!</Link></div>}/>
                    <FAQCard title="Will there be food?" answer="All meals, snacks, and drinks will be provided during Saturday's event. If you have a dietary restriction, please indicate it when registering."/>
                    <FAQCard title="Who do I contact with questions before the event?" answer={<div><div>Please contact event organizer <a href="mailto:pkobak@peoriagov.org">Peter Kobak</a> with any questions prior to the hackathon.</div></div>}/>
                    <FAQCard title="Will you have hardware?" answer="This will be a BYOD (Bring Your Own Device) hackathon. No hardware will be provided."/>
                    <FAQCard title="What is expected of participants?" answer="Registered participants have agreed to the Terms of Use and are expected to follow the Peoria Civic Hackathon Code of Conduct."/>
                </div>
            </div>
        );
    }
}