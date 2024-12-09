import React from 'react'



const Button = ({btnText,classes=""}) => {
  return (
    <button className={`py-[0.8rem] px-6 bg-dark_pink rounded-full text-white font-bold block hover:opacity-65 ${classes} `}>
      {btnText}
    </button>
  )
}

export default Button
