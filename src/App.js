import React, { useState } from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root"
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage"
import ContactsPage from "./containers/contactsPage/ContactsPage"

function App() {
  // contacts
  const [contacts, setContacts] = useState([])

  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact])
  }

  // appointments
  const [appointments, setAppointments] = useState([])

  const handleAddAppointment = () => {
    setAppointments((prev) => [
      ...prev,
      { name: "", contact: "", date: "", time: "" },
    ])
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              handleAddContact={handleAddContact}
            />
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              handleAddAppointment={handleAddAppointment}
            />
          }
        />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
