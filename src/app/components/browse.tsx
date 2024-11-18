import Image from 'next/image'
import f61 from '@/app/assets/Frame 61.png'
import f62 from '@/app/assets/Frame 62.png'
import f63 from '@/app/assets/Frame 63.png'
import f64 from '@/app/assets/Frame 64.png'
export default function Browse() {
    return(
        <div>
             {/* browser default */}
            <div className="mt-24 m-auto w-[1239px] h-[780px] top-[2417px] left-[100px] rounded-[40px] bg-[#F0F0F0] max-sm:w-[345px] max-sm:h-[980px] max-sm:mr-[16px]">
                <h1 className="text-[42px] font-black text-center pt-16 max-sm:text-[33px] max-sm:text-black">BROWSE BY DRESS STYLE</h1>
                <div className='flex flex-wrap pt-10'>
                <Image src={f61} alt='img' width={500} height={400} className='pl-32 max-sm:relative right-16 max-sm:w-[350px] max-sm:h-[170px]'/>
                <Image src={f62} alt='img' width={600} height={400} className='pl-4 max-sm:pt-4  max-sm:w-[230px] max-sm:h-[190px] max-sm:relative left-12'/>
                <Image src={f64} alt='img'  width={700} className='pl-32 pt-5 max-sm:relative right-16 max-sm:h-[200px]'/>
                <Image src={f63} alt='img'  width={400} height={400} className='pl-4 pt-5 max-sm:w-[230px] max-sm:h-[190px] max-sm:relative left-12'/>
                </div>
            </div>

        </div>
    )
}
