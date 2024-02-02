import React from 'react'
import ContactForm from '../components/contact_form/Simpleform'
import { Helmet } from 'react-helmet'

export const Contacts = () => {
  return (
    <>
    <Helmet><title>Contacts - Meditapp</title></Helmet>
    <div className='form-container'>
    <ContactForm />
    </div>
    </>
  )
}