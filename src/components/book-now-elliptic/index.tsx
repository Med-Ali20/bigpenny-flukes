import React from 'react'

const BookNowElliptic: React.FC<{ className?: string, orangeBackground?: boolean }> = ({ className, orangeBackground }) => {
    return (
        <div className={`relative uppercase ${className}`}>
            {orangeBackground ?
                <a href="/flukes/book-now" className={`font-["Salford_Sans"] relative font-light bg-primary text-secondary text-[22px] min-[1400px]:text-[30px] border-[4px] border-secondary rounded-[60%] px-4 min-[1400px]:px-6 py-6 min-[1400px]:py-8 z-20
                before:absolute before:inset-0 before:-z-10 before:rounded-[60%] before:bg-secondary before:scale-102 before:translate-x-1 before:translate-y-2
                before:w-full before:h-full before:content-[""]
                after:absolute after:inset-0 after:-z-20 after:rounded-[60%] after:border-4 after:border-secondary after:scale-[1.04]
                after:translate-x-1 after:translate-y-[11%]`}>Book Now</a> :

                <a href="/flukes/book-now" className={`font-["Salford_Sans"] relative font-light bg-secondary text-[22px] min-[1400px]:text-[30px] border-[4px] rounded-[60%] border-[#D2451E] text-primary px-4 min-[1400px]:px-6 py-6 min-[1400px]:py-8 z-20
                    before:absolute before:inset-0 before:-z-10 before:rounded-[60%] before:bg-primary before:scale-102 before:translate-x-1 before:translate-y-2
                    before:w-full before:h-full before:content-[""]`}>Book Now</a>
            }

        </div>

    )
}

export default BookNowElliptic