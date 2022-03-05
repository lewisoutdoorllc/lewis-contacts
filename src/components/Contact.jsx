import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact({ profilePic, contactName, phone, email }) {
    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src={profilePic}alt=""></img>
            </div>

            <div className="contactInfo">
                <h2>{contactName}</h2>
                <h2>{phone}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    )
}

export default Contact
