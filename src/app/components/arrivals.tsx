import Image from "next/image"
import image1 from '@/app/assets/image 7.png'
import image2 from '@/app/assets/image 8.png'
import image3 from '@/app/assets/image 9.png'
import image4 from '@/app/assets/image 10.png'
import stars from '@/app/assets/Frame 35.png'
import dis from '@/app/assets/Frame 59.png'
export default function Arrivals() {
    return(
        <div>

            {/* arrivals */}
            <h1 className="text-[48px] text-center text-black font-black mt-4 max-sm:text-[30px] max-sm:text-white">NEW ARRIVALS</h1>
            <div className="flex justify-center gap-3 mt-5 flex-wrap max-sm:gap-40">
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image1} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">T-SHIRT WITH TAPE DETAILS</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <p className="text-[18px] font-bold">$120</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image2} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">Skiny Feet Jins</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <Image src={dis} alt="dis" width={120} height={120} />
        <p className="text-[18px] font-bold">$240</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image3} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">Checkred Shirt</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <p className="text-[18px] font-bold">$180</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image4} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">Sleeve Stripped T-Shirt</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <Image src={dis} alt="dis" width={120} height={120} />
        <p className="text-[18px] font-bold">$130</p>
    </div>
</div>

            <div className="m-auto w-[210px] h-[20px] mt-44">
            <button className="w-[150px] h-[38px] rounded-[62px] border-2 pt-1 text-[14px] max-sm:w-[280px] max-sm:relative right-8 ">View All</button>
            </div>
        </div>
        
    )
}
