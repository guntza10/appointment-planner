import React, { useState } from "react"

import ContactForm from "../../components/contactForm/ContactForm"
import TileList from "../../components/tileList/TileList"

const initialContactForm = {
  name: "",
  phone: "",
  email: "",
}

const ContactsPage = React.memo(({ contacts, handleAddContact }) => {
  const [contactForm, setContactForm] = useState(initialContactForm)
  const [isDuplidatedName, setIsDuplicatedName] = useState(false)

  const handleChangeContactForm = ({ target: { name, value } }) => {
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (name === "name") {
      const isDuplicated =
        value.trim() !== "" &&
        contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase())
      setIsDuplicatedName(isDuplicated)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !isDuplidatedName &&
      contactForm.name &&
      contactForm.email &&
      contactForm.email
    ) {
      handleAddContact(contactForm)
      setContactForm(initialContactForm)
    }
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contactForm={contactForm}
          isDuplidatedName={isDuplidatedName}
          handleChangeContactForm={handleChangeContactForm}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList datas={contacts} />
      </section>
    </div>
  )
})

export default ContactsPage
