import React from "react"

const ContactForm = React.memo(
  ({
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
            type="text"
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
            type="tel"
            name="phone"
            value={contactForm.phone}
            onChange={handleChangeContactForm}
            pattern="^(0[689]{1}[0-9]{8}|0[2-9]{1}[0-9]{7})$"
          />
          <small>
            Format: 10 digits, starting with 06, 08, 09 for mobile or 02 for
            landlines.
          </small>
        </section>
        <section>
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            value={contactForm.email}
            onChange={handleChangeContactForm}
          />
        </section>

        <button type="submit">Add New Contact</button>
      </form>
    )
  }
)

export default ContactForm
