import React from 'react'
import Image from 'next/image'
import BookNowElliptic from '@/components/book-now-elliptic'

const FreeCocktail = () => {
    return (
        <section className="bg-[url('/flukes/illustrations/union-orange.svg')] font-['Salford_Sans'] flex flex-col md:pl-6 xl:py-38 text-center lg:flex-row justify-center align-center md:bg-contain w-full bg-center bg-repeat-x bg-[cover] z-50 bg-no-repeat py-[80px] relative" style={{ marginTop: '35px' }}>
            <div className='lg:w-[210px] lg:h-[400px] xl:w-[262.9px] xl:h-[450.02px] hidden lg:flex overflow-hidden relative'>
                <Image src="/flukes/illustrations/Illustrations_13.svg" className='rotate-[1.15]' alt='trophy' fill />
            </div>
            <div className='flex lg:hidden px-8 justify-center items-center'>
                <h3 className='font-black text-[45px] uppercase leading-[40px] sm:text-[60px] sm:leading-[55px] mb-4 mt-6 text-[#FBFBF8] text-left'>FREE COCKTAILS OR MOCKTAILS ON ARRIVAL</h3>
                <Image src="/flukes/illustrations/Illustrations_13.svg" className='rotate-[1.15]' alt='trophy' width={110.68} height={189.45} />
            </div>
            <p className='my-auto text-[25px] px-8 lg:leading-12 leading-[30px] text-[#FBFBF8] text-left lg:hidden mt-2'>For everyone in your group. How about that? Book before 8 May to bag this.</p>
            <div className='text-[#FBFBF8] text-left flex flex-col max-w-[916px] my-auto lg:ml-16'>
                <h3 className='font-black text-[25px] lg:text-[85px] xl:text-[111px] xl:leading-[85px] uppercase leading-8 lg:leading-16 mb-4 mt-6 hidden lg:block'>FREE COCKTAILS OR MOCKTAILS ON ARRIVAL</h3>
                <div className='flex align-center'>
                    <p className='my-auto lg:text-[32px] lg:leading-[32px] xl:text-[47px] xl:leading-[47px] mt-2 max-w-[70%] hidden lg:block'>For everyone in your group. How about that? Book before 8 May to bag this.</p>
                    <BookNowElliptic className='text-[#D2451E] border-[2px] ml-auto mr-15 mb-2 hidden xl:block lg:mt-12 uppercase' orangeBackground={true} />
                </div>
            </div>
        </section>
    )
}

export default FreeCocktail
