import React from "react"

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
}

const AppointmentForm = React.memo(
  ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
  }) => {
    return <></>
  }
)

export default AppointmentForm
