import Image from 'next/image'
import React from 'react' 


const Schedule = () => {
    return (
        <div className='__schedule py-16' >
            <div className='max-w-6xl mx-auto px-5 font-siliguri' >

                <h1 className="text-[22px] md:text-[52px] font-[600] opacity-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent/40 text-center" > অনুষ্ঠানের সময়সূচী </h1>

                <div className=' mt-5 md:mt-8' >
                    <Image src='/images/NOHS reunion programme schedule - nilkamal osmania high school reunion programme schedule.png' width={1000} height={1000} className='w-full h-full object-contain' alt='NOHS reunion programme schedule - nilkamal osmania high school reunion programme schedule' />
                </div>

            </div>
        </div>
    )
}

export default Schedule