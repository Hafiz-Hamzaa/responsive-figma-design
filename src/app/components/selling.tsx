import Image from "next/image"
import image1 from '@/app/assets/image 7 (1).png'
import image2 from '@/app/assets/image 8 (1).png'
import image3 from '@/app/assets/image 9 (1).png'
import image4 from '@/app/assets/image 10 (1).png'
import stars from '@/app/assets/Frame 35.png'
import dis from '@/app/assets/Frame 59.png'
export default function Selling() {
    return(
        <div>
            {/* selling */}
            {/* <div className="m-auto w-[1230px]  mt-14">
            <div className="w-[1240px] border-1 h-[2px] bg-[#0000001A] max-sm:w-[300px] max-sm:ml-[40px]"></div>
            </div> */}
            <h1 className="text-[48px] text-center text-black font-black mt-12 max-sm:text-[30px] max-sm:text-white">TOP SELLING</h1>
            <div className="flex justify-center gap-3 mt-5 flex-wrap max-sm:gap-40">
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image1} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">VERTICAL STRIPED SHIRT</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <p className="text-[18px] font-bold">$120</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image2} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">COURAGE GRAPHIC T-SHIRT</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <Image src={dis} alt="dis" width={120} height={120} />
        <p className="text-[18px] font-bold">$240</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image3} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">LOOSE FIT BERMUDA SHORTS</p>
        <Image src={stars} alt="stars" width={120} height={120} />
        <p className="text-[18px] font-bold">$180</p>
    </div>
    <div className="w-[285px] h-[270px] bg-[#F0EEED] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300">
        <Image src={image4} alt="img" className="h-[312px]" />
        <p className="text-[16px] font-bold mt-4">FADED SKINNY JEANS</p>
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
