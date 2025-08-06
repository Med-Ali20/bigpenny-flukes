import React from 'react'

const BookNowRectangular: React.FC<{ className?: string, text?: string, spanColor?: string  }> = ({ className, text, spanColor }) => {
  let spanBG
  if(spanColor) {
    spanBG = `[${spanColor}]`
  } else if(className?.includes('bg-secondary')){
    spanBG = 'primary'
  } else {
    spanBG = 'secondary'
  }
  return (
    <div className={`${className} px-[1.2rem] bg-primary text-[#ebe9db] relative flex items-center justify-center`}>
      <a href="/flukes/book-now" className='uppercase font-["Salford_Sans"] font-black  block w-full text-center'>{text ? text : 'Book Now'}</a>
      <span className={`absolute bg-${spanBG}  w-[15px] md:w-[20px] h-[15px] md:h-[20px] rounded-[50%] top-[-8px] left-[-8px]`}></span>
      <span className={`absolute bg-${spanBG}  w-[15px] md:w-[20px] h-[15px] md:h-[20px] rounded-[50%] top-[-8px] right-[-8px]`}></span>
      <span className={`absolute bg-${spanBG}  w-[15px] md:w-[20px] h-[15px] md:h-[20px] rounded-[50%] bottom-[-8px] right-[-8px]`}></span>
      <span className={`absolute bg-${spanBG}  w-[15px] md:w-[20px] h-[15px] md:h-[20px] rounded-[50%] bottom-[-8px] left-[-8px]`}></span>
    </div>
  )
}

export default BookNowRectangular