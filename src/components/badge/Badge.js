import React from 'react'

const Badge = ({ children, color, shape }) => {
  return (
    <div className={`Badge ${color} ${shape}`}>
      {children}
    </div>
  )
}

export default Badge
