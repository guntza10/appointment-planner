import React from "react"

const TileList = React.memo(({ contacts }) => {
  return (
    <div>
      {contacts.map(({ name, phone, email }, index) => (
        <div className="tile-container">
          <div className="tile tile-title">{name}</div>
          <div className="tile">{phone}</div>
          <div className="tile">{email}</div>
        </div>
      ))}
    </div>
  )
})

export default TileList
