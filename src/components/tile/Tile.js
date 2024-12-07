import React from "react"

const Tile = React.memo(({ data }) => {
  return (
    <div className="tile-container">
      <div className="tile tile-title">{data?.name}</div>
      <div className="tile">{data?.phone}</div>
      <div className="tile">{data?.email}</div>
    </div>
  )
})

export default Tile
