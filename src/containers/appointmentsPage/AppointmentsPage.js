import React, { useState } from "react"

import AppointmentForm from "../../components/appointmentForm/AppointmentForm"
import TileList from "../../components/tileList/TileList"

const initialAppointmentForm = {
  name: "",
  contact: "",
  date: "",
  time: "",
}
const AppointmentsPage = React.memo(
  ({ appointments, contacts, handleAddAppointment }) => {
    const [appointmentForm, setAppointmentForm] = useState(
      initialAppointmentForm
    )

    const handleChangeAppointmentForm = ({ target: { name, value } }) => {
      setAppointmentForm((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      handleAddAppointment(appointmentForm)
      setAppointmentForm(initialAppointmentForm)
    }

    return (
      <div>
        <section>
          <h2>Add Appointment</h2>
          <AppointmentForm
            appointmentForm={appointmentForm}
            contacts={contacts}
            handleChangeAppointmentForm={handleChangeAppointmentForm}
            handleSubmit={handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
          <TileList datas={appointments} />
        </section>
      </div>
    )
  }
)

export default AppointmentsPage
