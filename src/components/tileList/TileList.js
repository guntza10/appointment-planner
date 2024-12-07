import React from "react"
import Tile from "../tile/Tile"

const TileList = React.memo(({ datas }) => {
  return (
    <div>
      {datas.map(({ id, name, ...rest }) => (
        <Tile key={id} name={name} description={rest} />
      ))}
    </div>
  )
})

export default TileList
