import React from 'react'

const BookNowRectangular: React.FC<{ className?: string, text?: string }> = ({ className, text }) => {
  return (
    <div className={`bg-[#D2451E] w-[228.53px] h-[68.94px] text-[65px] relative flex items-center justify-center  ${className}`}>
      <a href="/flukes/book-now" className='uppercase font-["Salford_Sans"] font-black text-[#FBFBF8] block w-full text-center'>{text ? text : 'Book Now'}</a>
      <span className='absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] top-[-5px] left-[-5px]'></span>
      <span className='absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] top-[-5px] right-[-5px]'></span>
      <span className='absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] bottom-[-5px] right-[-5px]'></span>
      <span className='absolute bg-[#FBFBF8] w-[12px] h-[12px] rounded-[50%] bottom-[-5px] left-[-5px]'></span>
    </div>
  )
}

export default BookNowRectangular