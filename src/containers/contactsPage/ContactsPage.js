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
  }
  const handleCheckIsDuplicateName = () => {
    const isDuplicated =
      contactForm.name.trim() !== "" &&
      contacts.some(
        ({ name }) => name.toLowerCase() === contactForm.name.toLowerCase()
      )

    return isDuplicated
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isDuplicated = handleCheckIsDuplicateName()
    setIsDuplicatedName(isDuplicated)
    if (!isDuplicated) {
      const uniqueId = crypto.randomUUID()
      handleAddContact({ ...contactForm, id: uniqueId })
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
