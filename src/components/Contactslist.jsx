import React, { useState, useEffect, useRef } from 'react'
import Contact from './Contact'
import Sidebar from './Sidebar';


// let contacts = [
//     { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'John Musk', phone: '321-456-7891', email: 'test@test.com' },
//     { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Cody Lewis', phone: '321-456-7892', email: 'test1@test.com' },
//     { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Sara Jones', phone: '321-456-7893', email: 'test2@test.com' },
//     { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Brooke Lewis', phone: '321-456-7894', email: 'test3@test.com' },
//     { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Maverick Lewis', phone: '321-456-7895', email: 'test4@test.com' },
//     { profilePic: '/images/bg-green-flame.jpg', contactName: 'Zach Johnson', phone: '321-456-7896', email: 'test5@test.com' },
// ]



function Contactslist({ contacts }) {

    let title = useRef(null);
    let numberOfContacts = contacts.length;

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            .then(response => response.json())
            .then(response => setPhotos(response))
    }, [])

    return (
        <div className="ContactslistContainer">
            <Sidebar />
            <div className='Contactslist'>

                <div className="title">
                    <h1 ref={title}>Contacts</h1>
                    <h3>You currently have ({numberOfContacts}) contacts.</h3>
                </div>

                {contacts.map((info, index) => {
                    return <Contact
                        key={index}
                        profilePic={photos[index].urls.thumb || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2F20200610%2Fourmid%2Fpngtree-character-default-avatar-image_2237203.jpg&f=1&nofb=1'}
                        contactName={info.name}
                        phone={info.phone}
                        email={info.email}
                    />
                })}
                {/* <Contact  /> */}
            </div>
        </div>
    )
}

export default Contactslist
