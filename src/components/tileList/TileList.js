import React from "react"
import Tile from "../tile/Tile"

const TileList = React.memo(({ datas }) => {
  return (
    <div>
      {datas.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
      ))}
    </div>
  )
})

export default TileList
