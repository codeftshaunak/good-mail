"use client"
import React, { useState } from 'react'
import { ChevronDown, CircleDot, Cross, Divide, Settings as Setting, X } from 'lucide-react';

const Settings = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
       <div className='bg-white py-4 px-3 rounded-md text-primary flex gap-2'>
         <Setting />
         <p className='text-base font-semibold'>Settings</p>
       </div>

       <div className='bg-white py-4 px-3 rounded-md text-primary mt-4 flex justify-between'>
         <div className='flex justify-between items-center'>
           <div className='flex gap-3'>
           <CircleDot/>
           <div className={`${!isOpen}`}>           
           <p className='text-base font-semibold text-black'>General</p>
            {isOpen&& <div>
               <p className='text-base font-semibold text-black mt-5 mb-2'>Time zone</p>
            <select
       className='px-5 py-3 w-[300px] bg-white border border-gray-4 rounded-lg appearance-none pr-10 bg-right bg-no-repeat cursor-pointer font-medium text-black'
       style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
        backgroundPosition: 'right 12px center',
        backgroundSize: '25px 25px', // Increased icon size by ~10%
        paddingRight: '28px', // Adjusted padding for the larger icon
    }}
       >
        <option value="">(GMT + 07:00)  Bangkok</option>
        <option value="">(GMT + 07:00)  Bangkok</option>
            </select>
            <p className='text-base font-semibold text-black mt-5 mb-2'>Time format</p>
            <div className='flex gap-6 text-black'>

            <div className='flex gap-2'>
            <input type="checkbox" />
            <p>24 hours</p>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" />
            <p>24 hours</p>
            </div>

            </div>
            <p className='text-base font-semibold text-black mt-5 mb-2'>Date format</p>
            <div className='flex gap-6 text-black'>

            <div className='flex gap-2'>
            <input type="checkbox" />
            <p>DD-MM-YYYY</p>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" />
            <p>MM-DD-YYYY</p>
            </div>

            </div>
              </div>}
         </div>
           </div>
         </div>
        <div className='cursor-pointer'>
        {isOpen?<X size={22} onClick={()=>setIsOpen(!isOpen)}/>: <ChevronDown onClick={()=>setIsOpen(!isOpen)}/>}
        </div>
         </div>

       <div className='bg-white py-4 px-3 rounded-md text-black mt-4'>
         <div className='flex justify-between items-center'>
           <div className='flex gap-3'>
           <CircleDot />
           <p className='text-base font-semibold'>Notification</p>
           </div>
           <ChevronDown />
         </div>
       </div>

       <div className='bg-white py-4 px-3 rounded-md text-black mt-4'>
         <div className='flex justify-between items-center'>
           <div className='flex gap-3'>
           <CircleDot />
           <p className='text-base font-semibold'>Your Invoices</p>
           </div>
           <ChevronDown />
         </div>
       </div>
    </div>
  )
};

export default Settings;