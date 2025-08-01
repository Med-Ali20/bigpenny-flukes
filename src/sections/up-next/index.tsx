import React from 'react'
import Image from 'next/image'

const UpNext:React.FC<any> = ({data}) => {
    console.log(data)
    return (
        <section className='pt-[60px] xl:mt-[40px] text-center mx-auto font-["Salford_Sans"]'>
            <Image src="/flukes/illustrations/separator.svg" alt='Flukes' width={341} height={22} className='mx-auto mb-[86px] lg:hidden' />
            <Image src="/flukes/illustrations/separator-desktop.svg" alt='Flukes' width={1518} height={43.57} className='mx-auto mb-[105px] hidden lg:block' />
            <p className='max-w-[343px] text-center mx-auto text-[25px] md:[text-30px] lg:max-w-[1200px] leading-[32px] xl:leading-[45px]  xl:text-[45px] mb-4'>{data.firstParagraph}</p>
            <p className='max-w-[343px] text-center mx-auto text-[25px] md:[text-30px] mt-2 lg:max-w-[1200px] leading-[32px] xl:leading-[45px] xl:text-[45px]'>{data.secondParagraph}</p>
            <Image src="/flukes/illustrations/separator.svg" alt='Flukes' width={341} height={22} className='mx-auto mt-[86px] lg:hidden' />
            <Image src="/flukes/illustrations/separator-desktop.svg" alt='Flukes' width={1518} height={43.57} className='mx-auto mt-[105px] hidden lg:block' />
        </section>
    )
}

export default UpNext