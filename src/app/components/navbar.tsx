import Image from "next/image"
import search from '@/app/assets/search icon.png'
import cart from '@/app/assets/cart.png'
import icon from '@/app/assets/icon.png'
export default function Navbar() {
    return(
        <div>
            {/* navbar */}
            {/* Navbar */}
<div className="w-screen h-[38px] bg-[#000000] flex justify-center items-center">
  <div className="text-white text-[14px] font-normal leading-[18.9px] justify-center">
    Sign up and get 20% off your first order. <span className="underline decoration-white">Sign Up Now</span>
  </div>
</div>

<div className="mt-3 flex items-center justify-between px-4 lg:justify-around">
  {/* Logo */}
  <div className="text-[24px] font-black lg:text-[32px]">BOCH.CO</div>

  {/* Navigation Links - Hidden on small screens */}
  <div className="hidden lg:flex text-[16px] text-[#000000]">
    <a href="#" className="pl-6">Shop</a>
    <a href="#" className="pl-6">On Sales</a>
    <a href="#" className="pl-6">New Arrivals</a>
    <a href="#" className="pl-6">Brands</a>
  </div>

  {/* Search Bar - Hidden on small screens */}
  <div className="hidden lg:flex bg-[#F0F0F0] w-[577px] h-[48px] rounded-[62px] py-[12px] px-[16px]">
    <Image src={search} alt="icon" width={18} height={18} className="text-[#00000066]" />
    <p className="text-black text-[#00000066] pl-3">Search for Products</p>
  </div>

  {/* Icons */}
  <div className="flex">
    <i><Image src={cart} alt="icon" width={22} height={22} className="mr-2 max-sm:text-white" /></i>
    <i><Image src={icon} alt="icon" width={22} height={22} className="max-sm:text-white"/></i>
  </div>
</div>


        </div>
    )
}
