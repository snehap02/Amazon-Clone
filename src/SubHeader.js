import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function SubHeader() {
  return (
    <div className='subheader bg-[#232F3E] w-full h-10 flex justify-between items-center px-3 text-white text-[14px] font-medium z-10 relative'>
        <div class="flex gap-4">
          <div
            class="flex gap-1 cursor-pointer hover:border hover:border-white px-1 py-1"
            id="all"
          >
            <MenuOutlinedIcon className='text-white mt-[1px]'/>
            <h2 className='mt-1'>All</h2>
          </div>
          <div class="flex gap-3">
          <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Prime
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Today's Deal
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              New Releases
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Books
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Buy Again
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Amazon miniTV
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Sell
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Amazon Pay
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Gift Cards
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Gift Ideas
            </h2>
            
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Coupons
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Gift Ideas
            </h2>
            <h2
              class="cursor-pointer hover:border hover:border-white px-1 py-[9px]"
            >
              Fashion
            </h2>
          </div>
        </div>
        <div className="advertise hover:border hover:border-white px-1 py-">
            <img src="/assets/ad.png" alt="Advertisement" className='w-80 cursor-pointer' />
        </div>
    </div>
  )
}

export default SubHeader