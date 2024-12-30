import { CalendarDays, MoveLeft, PencilLine, ScanEye } from 'lucide-react'
import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'

const ManageCampaign = () => {
  return (
    <div>
         <div className="bg-white bg-opacity-85 py-4 px-5 rounded-md flex justify-between">

<div className='flex items-center gap-4'>
    <MoveLeft className='text-black dark:text-white cursor-pointer'/>
    <div>
    <h4 className='text-black dark:text-white text-xl font-medium'>Test</h4>
    <div className='flex items-center gap-2 mt-2'>
    <PencilLine className='cursor-pointer' size={16} strokeWidth={1.2} />
    <h4 className='text-black dark:text-white text-sm'>Draft</h4>
    </div>
    </div>
</div>

<div className='flex gap-4'>
                    <ButtonDefault
                        label="Cancel"
                        link=""
                        customClasses="bg-tranparent border border-[#1f69ff] text-black dark:text-white rounded-[5px] text-base md:text-normal py-[6px] px-4 md:py-[1px] md:px-8 md:font-normal"
                    >
                    </ButtonDefault>
                    <ButtonDefault
                        label="Create campaigns"
                        link="/create-campaign"
                        customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[10px] md:px-6 md:font-normal ml-2"
                    >
                    </ButtonDefault>
                </div>

</div>
    </div>
  )
}

export default ManageCampaign