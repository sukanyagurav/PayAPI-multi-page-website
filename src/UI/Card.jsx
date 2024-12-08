import React from 'react'

const Card = ({children,classes=''}) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${classes}`}>
      {children}
    </div>
  )
}

export default Card
