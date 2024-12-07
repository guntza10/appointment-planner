import React from "react"

const ContactPicker = React.memo(({ contacts, value, onChange, name }) => {
  return (
    <select name={name} value={value} onChange={onChange} required>
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        <option
          key={contact.id}
          value={`${contact.name}, ${contact.email}, ${contact.phone}`}
        >
          {contact.name}
        </option>
      ))}
    </select>
  )
})

export default ContactPicker
