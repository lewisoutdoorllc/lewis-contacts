import './App.css';
// import Contact from './components/Contact';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';
import React, { useEffect, useState } from 'react';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/





// let contacts = [
//   { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'John Musk', phone: '321-456-7891', email: 'test@test.com' },
//   { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Cody Lewis', phone: '321-456-7892', email: 'test1@test.com' },
//   { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Sara Jones', phone: '321-456-7893', email: 'test2@test.com' },
//   { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Brooke Lewis', phone: '321-456-7894', email: 'test3@test.com' },
//   { profilePic: '/images/IMG_9994 (1).jpg', contactName: 'Maverick Lewis', phone: '321-456-7895', email: 'test4@test.com' },
//   { profilePic: '/images/bg-green-flame.jpg', contactName: 'Zach Johnson', phone: '321-456-7896', email: 'test5@test.com' },
// ]


function App() {

  // console.log(useState());

  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=10')
      .then(response => response.json())
      .then(json => setContacts(json))
  }, [])





  return (
    <div className="App">
      <Sidebar />
      <Contactslist contacts={contacts} />
      {/* {contacts.map((contact, index) => {
        return <Contact 
          key={index}
          profilePic={contact.profilePic}
          contactName={contact.contactName}
          phone={contact.phone}
          email={contact.email}
        />
      })} */}

    </div>
  );
}

export default App;
