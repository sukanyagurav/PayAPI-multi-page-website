import React from 'react'
import Button from '../UI/Button'

const Subscription = () => {
  return (
    <div>
      <div className='flex rounded-full relative w-full md:max-w-[420px] flex-col items-center gap-8'>
        <input type="email" placeholder='Enter email address' className='py-3 px-4 rounded-full bg-white flex-1 pr-[11rem] shadow-2xl w-full' />
        <Button btnText="Schedule a Demo" classes="md:absolute top-0 bottom-0 right-0 text-sm w-full md:w-auto md:flex-[0.4] hover:opacity-65  "/>
      </div>
    </div>
  )
}

export default Subscription
