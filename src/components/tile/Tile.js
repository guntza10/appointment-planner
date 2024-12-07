import React from "react"

const Tile = React.memo(({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {Object.values(description).map((v) => (
        <div className="tile">{v}</div>
      ))}
    </div>
  )
})

export default Tile
