import Image from 'next/image'
import React from 'react'
//
import Icon from '@/common/components/shared/icon'


const About = () => {
    return (
        <div className='__about py-16' >
            <div className='max-w-6xl mx-auto px-5 font-siliguri' >

                <h1 className="text-[22px] md:text-[52px] font-[600] opacity-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent/40 text-center" > ভূমিকা </h1>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 md:mt-8' >
                    <div className='hidden lg:block' >
                        <Image src='/images/nilkamal osmania high school - programme introduction - NOHS.png' width={500} height={500} className='w-full h-full object-cover' alt='Nilkamal osmania high school - reunion 2024' />
                    </div>

                    <div className='text-center lg:text-left' >
                        <h1 className='text-[20px] md:text-[33px] text-[#87B502] font-[600]' > প্রাক্তন শিক্ষার্থী মিলনমেলা - ২০২৪ </h1>
                        <div className="flex gap-[5px] items-center justify-center lg:justify-start text-[14px] md:text-[20px] text-black/80 font-medium" > <Icon className="!text-[15px] md:!text-[17px]" name='calendar' /> ০৯ ফেব্রুয়ারী ২০২৪ </div>
                    
                        <div className='mt-4 text-[14px] md:text-[16px]' >
                            <p> জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে </p>
                            <p className='mt-3' > জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About