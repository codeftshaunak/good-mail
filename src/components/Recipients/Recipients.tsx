"use client"
import React, { useState } from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'
import { ChevronDown, CircleDot, MoveLeft, PencilLine, X } from 'lucide-react'

const Recipients = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
        <div className="bg-white bg-opacity-85 py-4 px-5 rounded-md flex justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <MoveLeft className="text-black  cursor-pointer" />
          <div>
            <h4 className="text-black  text-xl font-medium">Test</h4>
            <div className="flex items-center gap-2 mt-2">
              <PencilLine className="cursor-pointer" size={16} strokeWidth={1.2} />
              <h4 className="text-black  text-sm">Draft</h4>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <ButtonDefault
            label="Cancel"
            link=""
            customClasses="bg-transparent border border-[#1f69ff] text-black  rounded-[5px] text-base md:text-normal py-[6px] px-4 md:py-[1px] md:px-8 md:font-normal"
          />
          <ButtonDefault
            label="Create campaigns"
            link="/create-campaign"
            customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[10px] md:px-6 md:font-normal ml-2"
          />
        </div>
      </div>

      <div>
      <h4 className='text-black dark:text-white text-xl font-medium mt-8 mb-8'>Manage your campaign</h4>
      </div>

      <div className='bg-white bg-opacity-70 dark:bg-opacity-90 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2' color="#7033ff" strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black  font-medium'>Sender</h4>
                        <p className='flex gap-3 text-sm'>
                            <span className='text-black'>Miracle Regen</span>
                            <span className='text-primary'>Review your sender status</span>
                        </p>
                    </div>
                </div>
                <ChevronDown />
      </div>

      <div className='bg-white bg-opacity-70 dark:bg-opacity-90 py-4 px-3 rounded-md mt-5'>
               <div className='flex justify-between items-center'>
               <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black  font-medium'>Recipients</h4>
                            <span className='text-black'>The people who receive your campaign.</span>
                    </div>
                </div>
                {isOpen?<X size={20} onClick={()=>setIsOpen(false)} className='cursor-pointer mb-[40px]'/>:<ChevronDown onClick={()=>setIsOpen(true)} className='cursor-pointer'/>}
               </div>
               { isOpen&&<div>
               <h4 className='text-lg text-black dark:text-white font-medium mt-8 mb-5'>Add Recipients</h4>
               <div className='flex gap-4'>
                <p className='w-7 h-7 flex items-center justify-center bg-yellow-light text-white bg-opacity-90 rounded-md'>J</p>
                  <p className='text-black dark:text-white'>Jenny Wilson</p>
                  <p className='w-7 h-7 flex items-center justify-center bg-transparent border border-gray-4 bg-opacity-90 rounded-md text-black'>+</p>
               </div>
               <div className='flex gap-4 mt-3 mb-3'>
                <p className='w-7 h-7 flex items-center justify-center bg-emerald-300 text-white bg-opacity-90 rounded-md'>J</p>
                <p className='text-black dark:text-white'>Jenny Wilson</p>
                <p className='w-7 h-7 flex items-center justify-center bg-transparent border border-gray-4 bg-opacity-90 rounded-md text-black'>+</p>
               </div>
               <div className='flex gap-4'>
                <p className='w-7 h-7 flex items-center justify-center bg-cyan-500 text-white bg-opacity-90 rounded-md'>J</p>
                <p className='text-black dark:text-white'>Jenny Wilson</p>
                <p className='w-7 h-7 flex items-center justify-center bg-transparent border border-gray-4 bg-opacity-90 rounded-md text-black'>+</p>
               </div>
               <p className='mt-3 mb-3'>See more</p>
               <p className='mt-4 mb-7 text-lg text-black dark:text-white font-medium'>Send to</p>
               <div className='flex items-center justify-between mb-8'>
                <p className='text-lg'>Search lists or segments.</p>
                <ChevronDown/>
               </div>
               <input type="checkbox" />
               <p className='mt-3 mb-3 text-lg text-black dark:text-white'>Don’t send to unengaged contacts</p>
               <p className='text-xl font-medium text-black dark:text-white mb-4'>0 Recipients</p>
               <p className='text-black dark:text-white mb-3'>Send to as many recipients as you want.</p>
               <div className="flex gap-4 mt-2 mb-2">
          <ButtonDefault
            label="Cancel"
            link=""
            customClasses="bg-transparent border border-[#1f69ff] text-black  rounded-[5px] text-base md:text-normal py-[6px] px-4 md:py-[1px] md:px-8 md:font-normal"
          />
          <ButtonDefault
            label="Create campaigns"
            link="/create-campaign"
            customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[10px] md:px-6 md:font-normal ml-2"
          />
        </div>
               </div>}
      </div>

      <div className='bg-white bg-opacity-70 dark:bg-opacity-90 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black  font-medium'>Subject</h4>
                            <span className='text-black'>Add a subject line for this campaign.</span>
                    </div>
                </div>
                <ChevronDown />
      </div>

      <div className='bg-white bg-opacity-70 dark:bg-opacity-90  py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black  font-medium'>Design</h4>
                            <span className='text-black'>Create your email content.</span>
                    </div>
                </div>
                <button  className='bg-white border text-sm  rounded-lg text-black  border-gray-4 py-[12px] px-[25px]'>Start Designing</button>
      </div>

      <div className='flex justify-between items-center mt-10 mb-5'>
                        <h4 className='text-xl text-black dark:text-white font-medium'>Additional settings</h4>
                <button  className='bg-white border text-sm  rounded-lg text-black  border-gray-4 py-[12px] px-[25px]'>Edit Settings</button>
      </div>

    </div>
  )
}

export default Recipients