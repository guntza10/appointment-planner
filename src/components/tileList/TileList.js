import React from "react"
import Tile from "../tile/Tile"

const TileList = React.memo(({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Tile data={contact} />
      ))}
    </div>
  )
})

export default TileList
