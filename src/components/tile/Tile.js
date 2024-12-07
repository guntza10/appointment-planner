import React from "react"

const Tile = React.memo(({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {Object.entries(description).map(([key, value]) => (
        <div className="tile" key={key}>
          {value}
        </div>
      ))}
    </div>
  )
})

export default Tile
