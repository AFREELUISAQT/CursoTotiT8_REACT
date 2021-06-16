import React from 'react';


function ContactCards(props) {
    return (
        <div className="contact-card">
            <img src= {props.image} />
            <h3> {props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCards