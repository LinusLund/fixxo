import React from 'react'
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/Contacts/ContactForm';
import ContactUsMap from '../Components/Contacts/ContactUsMap';
import Footer from '../Components/Footer';
import BreadcrumbSection from '../Components/BreadcrumbSection';


function ContactsView() {
  return (
    <>
      <Navbar />
      <BreadcrumbSection currentPage={"Contacts"} />
      <ContactUsMap />
      <ContactForm />
      <Footer />
      
    </>
  )
}

export default ContactsView