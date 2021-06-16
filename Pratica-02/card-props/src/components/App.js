import React from 'react';
import ContactCards from './ContactCards';


function App() {
  return (
    <div className="contacts">

      <ContactCards
        className="contact-card"
        image="http://placekitten.com/300/200"
        name="Mr. Kit Kat"
        phone="(21) 98765-4321"
        email="kitkat@gatos.com"
      />

      <ContactCards
        className="contact-card"
        image="http://placekitten.com/400/200"
        name="Garibaldi"
        phone="(85) 98215-4971"
        email="garibaldi@gatos.com"
      />

      <ContactCards
        className="contact-card"
        image="http://placekitten.com/400/300"
        name="Darth Vader"
        phone="(24) 17765-0021"
        email="darthvader@gatos.com"
      />

      <ContactCards
        className="contact-card"
        image="http://placekitten.com/200/100"
        name="Rosita"
        phone="(21) 00565-1321"
        email="rosita@gatos.com"
      />

    </div>
  )
}

export default App;
