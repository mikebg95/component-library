import React from 'react'
import Badge from './Badge'

const BadgesSection = () => {
  const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
  const badgeShapes = ["square", "pill"]

  return (
    <div className="BadgesSection">
      <h1>Badges</h1>
      {badgeShapes.map(shape => {
        return (
          <>
            {badgeColors.map(color => {
              return (
                <Badge color={color} shape={shape}>
                  Badge
                </Badge>
              )
            })}
            <br/>
          </>
        )
      })}
    </div>
  )
}

export default BadgesSection
