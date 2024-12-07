import React from "react"
import ContactPicker from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
}

const AppointmentForm = React.memo(
  ({
    contacts,
    appointmentForm,
    handleChangeAppointmentForm,
    handleSubmit,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={appointmentForm.name}
            onChange={handleChangeAppointmentForm}
            required
          />
        </section>

        <section>
          <h2>Contact</h2>
          <ContactPicker
            name="contact"
            contacts={contacts}
            value={appointmentForm.contact}
            onChange={handleChangeAppointmentForm}
          />
        </section>

        <section>
          <h2>Date</h2>
          <input
            type="date"
            name="date"
            min={getTodayString()}
            value={appointmentForm.date}
            onChange={handleChangeAppointmentForm}
            required
          />
        </section>

        <section>
          <h2>Time</h2>
          <input
            type="time"
            name="time"
            value={appointmentForm.time}
            onChange={handleChangeAppointmentForm}
            required
          />
        </section>

        <button type="submit">Add New Appointment</button>
      </form>
    )
  }
)

export default AppointmentForm
