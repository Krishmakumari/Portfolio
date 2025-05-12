import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & conditions</p>
            <p>|</p>
            <p>Privacy policy</p>
        </div>
        <div className='flex gap-3'>
            <div className='social-icon'>
                <a href='https://github.com/Krishmakumari' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/github.svg' alt='github' className=' w-7 h-1/2' /></a>
            </div>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/krishma-kumari/' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/l.jpg' alt='linkedin' className='w-10 h-3/2' /></a>
            </div>
            <div className='social-icon'>
                <a href='https://leetcode.com/u/krishma24/' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/leetcode.png' alt='instagram' className='w-7 h-1/2' /></a>
            </div>
        </div>
        <p className='text-white-500'>© 2025 Krishma. All rights reserved.</p>
    </section>
  )
}

export default Footer
