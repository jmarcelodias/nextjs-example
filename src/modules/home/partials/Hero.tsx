import Image from "next/image"
//
import Icon from "@/common/components/shared/icon"
import Marquee from "react-fast-marquee";



const Hero = () => {


    return (
        <div className="__hero min-h-screen relative  flex flex-col items-center justify-center" >

            <div className="absolute inset-0 flex items-center justify-center" >
                <div className="w-[500px] h-[500px] blur-[150px] opacity-50 bg-[#CDF683] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-5 " >

                <div className="relative z-[9999] font-siliguri text-center flex justify-center flex-col items-center" >
                    <h3 className="text-[16px] md:text-[35px] font-[500] opacity-70" > নীলকমল ওছমানীয়া উচ্চ বিদ্যালয়ের </h3>
                    <h1 className="text-[22px] md:text-[70px] font-[600] opacity-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent/40" > প্রাক্তন শিক্ষার্থী মিলনমেলা - ২০২৪ </h1>
                    <h3 className="text-[14px] md:text-[28px] font-[500] opacity-60 mt-[-4px] md:mt-[-10px]" > 1950-2023 এর প্রাক্তন শিক্ষার্থী </h3>

                    <button className="btn text-[20px] font-[600] text-black/70 mt-3 md:mt-8" > <Icon name='ticket' /> রেজিস্ট্রেশন করুন </button>

                    <div className="flex gap-5 mt-2 md:mt-4 items-center" >
                        <div className="flex gap-[5px] items-center text-[14px] md:text-[16px]" > <Icon className="!text-[15px] md:!text-[17px]" name='calendar' /> ০৯ ফেব্রুয়ারী ২০২৪ </div>
                        <div className="gap-[5px] items-center hidden md:flex" > <Icon className="!text-[17px]" name='clock' /> 09 : 00 AM </div>
                        <div className="gap-[5px] items-center hidden md:flex" > <Icon className="!text-[17px]" name='location' /> নীলকমল ওছমানীয়া উচ্চ বিদ্যালয় </div>
                    </div>
                </div>

            </div>

            <Marquee className="gap-2 md:gap-4 " >
                <div className=" flex gap-2 md:gap-4 mt-12" >
                    {new Array(6).fill(0).map((e, i: number) => (
                        <Image src={`/images/nohs/nilkamal osmania high school - ${i + 1}.jpg`} width={300} height={300} alt="Nilkamal Osmania High School Images" className="w-[150px] md:w-full h-full object-cover rounded-sm md:rounded-lg opacity-80 border border-[2px] border-[#CDF683]" />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default Hero