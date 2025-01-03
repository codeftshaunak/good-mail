import { CalendarCog, CirclePlus, ContactRound,  Download } from 'lucide-react'
import React from 'react'
import TableThree from '../Tables/TableThree'

const Contact = () => {
  return (
  <div>

 <div className="bg-teal-200 bg-opacity-5 border border-gray-4 py-8 px-5 rounded-md">
 <div className='text-primary flex gap-2'>
           <ContactRound />
            <h4 className='text-lg font-semibold'>Contacts</h4>
           </div>
    <div className='flex justify-between items-center mt-2'>
    <p>This is your contact database. From here, you can view, organize and manage <br /> your contacts,     individually or as a group.
    </p>
    <div className='flex gap-4'>
        <div className='flex gap-2 items-center bg-transparent border border-indigo-400 p-2 rounded-md cursor-pointer'>
            <CirclePlus
            color='#5614f0' size={22} strokeWidth={2} />
            <p className='text-primary text-lg'>Create a contact</p>
        </div>
        <button className='flex  items-center gap-2 bg-primary px-4 py-2 rounded-md'>
            <Download color='white' size={22}/>
            <p className='text-white  text-base'>Import contacts</p>
        </button>
    </div>
    </div>
    </div>

    <div className="bg-teal-200  bg-opacity-5 mt-3 border border-gray-4 py-8 px-5 rounded-md mb-4">
       
       <div className='flex gap-4 ml-3'>
       <select
       className='px-5 py-3 w-[300px] bg-white border border-gray-4 rounded-lg appearance-none pr-10 bg-right bg-no-repeat cursor-pointer font-medium text-black'
       style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
        backgroundPosition: 'right 12px center',
        backgroundSize: '25px 25px', // Increased icon size by ~10%
        paddingRight: '28px', // Adjusted padding for the larger icon
    }}
       >
        <option value="">Load a list or a segment</option>
        <option value="">Load a list or a segment</option>
       </select>
       <select
       className='px-5 py-3 w-[300px] bg-white border border-gray-4 rounded-lg appearance-none pr-10 bg-right bg-no-repeat cursor-pointer font-medium text-black'
       style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
        backgroundPosition: 'right 12px center',
        backgroundSize: '25px 25px', // Increased icon size by ~10%
        paddingRight: '28px', // Adjusted padding for the larger icon
    }}
       >
        <option value="">Use segment template</option>
        <option value="">Use segment template</option>
       </select>
       <select
       className='px-5 py-3 w-[150px] bg-white border border-gray-4 rounded-lg appearance-none pr-10 bg-right bg-no-repeat cursor-pointer font-medium text-black'
       style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
        backgroundPosition: 'right 12px center',
        backgroundSize: '25px 25px', // Increased icon size by ~10%
        paddingRight: '28px', // Adjusted padding for the larger icon
    }}
       >
        <option value="">Add filter</option>
        <option value="">Add filter</option>
       </select>
       </div>

      <div className="bg-transparent border border-gray-5 py-2 pl-4 pr-3 rounded-md ml-3 flex justify-between items-center mt-3">
        
       <div className='flex gap-6'>
       <div className='flex gap-4'>
        <p className='text-base font-medium text-black dark:text-white'>728,320 contacts</p>
        <p>+1 anonymous contact</p>
        </div>

         <span className=' border border-gray-4 border-r-1'></span>
         
         <div className='text-primary flex gap-2'>
         <CalendarCog />
         <p>Customize columns</p>
         </div>
       </div>


   <div className="relative">
                   <button className="absolute top-[25px] left-5 -translate-y-1/2 text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                       <svg
                           className="fill-current"
                           width="18"
                           height="18"
                           viewBox="0 0 18 18"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                       >
                           <g clipPath="url(#clip0_1791_1693)">
                               <path
                                   fillRule="evenodd"
                                   clipRule="evenodd"
                                   d="M8.625 2.0625C5.00063 2.0625 2.0625 5.00063 2.0625 8.625C2.0625 12.2494 5.00063 15.1875 8.625 15.1875C12.2494 15.1875 15.1875 12.2494 15.1875 8.625C15.1875 5.00063 12.2494 2.0625 8.625 2.0625ZM0.9375 8.625C0.9375 4.37931 4.37931 0.9375 8.625 0.9375C12.8707 0.9375 16.3125 4.37931 16.3125 8.625C16.3125 10.5454 15.6083 12.3013 14.4441 13.6487L16.8977 16.1023C17.1174 16.3219 17.1174 16.6781 16.8977 16.8977C16.6781 17.1174 16.3219 17.1174 16.1023 16.8977L13.6487 14.4441C12.3013 15.6083 10.5454 16.3125 8.625 16.3125C4.37931 16.3125 0.9375 12.8707 0.9375 8.625Z"
                                   fill=""
                               />
                           </g>
                           <defs>
                               <clipPath id="clip0_1791_1693">
                                   <rect width="18" height="18" fill="white" />
                               </clipPath>
                           </defs>
                       </svg>
                   </button>
                   <input
                       type="text"

                       placeholder="Search for a campaign"
                       className={`w-[480px] rounded-lg border-2 bg-white border-gray-4 py-3 pl-13.5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:focus:border-primary
                           }`}
                   />

   </div>

      </div>
    </div>
    <TableThree/>
  </div>
  )
}

export default Contact