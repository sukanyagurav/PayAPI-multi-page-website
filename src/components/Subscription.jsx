import React from 'react'
import Button from '../UI/Button'

const Subscription = () => {
  return (
    <div>
      <div className='flex rounded-full relative max-w-[420px]'>
        <input type="email" placeholder='Enter email address' className='py-3 px-4 rounded-full bg-white flex-1 pr-[11rem]' />
        <Button btnText="Schedule a Demo" classes="md:absolute top-0 bottom-0 right-0 text-sm flex-[0.4]"/>
      </div>
    </div>
  )
}

export default Subscription
