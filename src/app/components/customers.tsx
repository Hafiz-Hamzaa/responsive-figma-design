import Image from "next/image"
import custom from '@/app/assets/customer.png'
import custom1 from '@/app/assets/customer 1.png'
import custom2 from '@/app/assets/customer 2.png'
import footer from '@/app/assets/Group 5.png'

export default function Customers() {
    return(
        <div>
            {/* customers */}
            <h1 className="font-black text-[42px] ml-40 mt-10 max-sm:relative right-20 max-sm:text-[32px]">OUR HAPPY CUSTOMERS</h1>
            <div className="flex gap-2 mt-10 ml-40 flex-wrap max-sm:relative right-20 bottom-6 ">
                <Image src={custom} alt="img" width={410} height={500} className="max-sm:w-[230px]"/>
                <Image src={custom1} alt="img" width={410} height={500}  className="max-sm:w-[230px]"/>
                <Image src={custom2} alt="img" width={410} height={500}  className="max-sm:w-[230px]"/>
            </div>
            <Image src={footer} alt="footer" className="mt-6"/>
        </div>
    )
}