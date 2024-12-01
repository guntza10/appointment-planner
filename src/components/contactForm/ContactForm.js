import React from "react"

const ContactForm = ({
  contactForm,
  handleChangeContactForm,
  handleSubmit,
  isDuplidatedName,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Name</h2>
        <input
          name="name"
          value={contactForm.name}
          onChange={handleChangeContactForm}
        />
        {isDuplidatedName && (
          <h3 className="error-message">Name is duplicated.</h3>
        )}
      </section>
      <section>
        <h2>Phone</h2>
        <input
          name="phone"
          value={contactForm.phone}
          onChange={handleChangeContactForm}
        />
      </section>
      <section>
        <h2>Email</h2>
        <input
          name="email"
          value={contactForm.email}
          onChange={handleChangeContactForm}
        />
      </section>

      <button type="submit">Add New Contact</button>
    </form>
  )
}

export default ContactForm
