import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/Contacts/ContactForm';
import ContactUsMap from '../Components/Contacts/ContactUsMap';
import Footer from '../Components/Footer';


function ContactsView() {
  return (
    <>
      <Navbar />
      <ContactUsMap />
      <ContactForm />
      <Footer />
      
    </>
  )
}

export default ContactsView