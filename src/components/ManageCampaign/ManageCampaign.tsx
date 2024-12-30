import { ChevronDown, CircleDot, MoveLeft, PencilLine, } from 'lucide-react';
import React from 'react';
import ButtonDefault from '../Buttons/ButtonDefault';

const ManageCampaign = () => {
  return (
    <div>
      
      <div className="bg-white bg-opacity-85 py-4 px-5 rounded-md flex justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <MoveLeft className="text-black dark:text-white cursor-pointer" />
          <div>
            <h4 className="text-black dark:text-white text-xl font-medium">Test</h4>
            <div className="flex items-center gap-2 mt-2">
              <PencilLine className="cursor-pointer" size={16} strokeWidth={1.2} />
              <h4 className="text-black dark:text-white text-sm">Draft</h4>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <ButtonDefault
            label="Cancel"
            link=""
            customClasses="bg-transparent border border-[#1f69ff] text-black dark:text-white rounded-[5px] text-base md:text-normal py-[6px] px-4 md:py-[1px] md:px-8 md:font-normal"
          />
          <ButtonDefault
            label="Create campaigns"
            link="/create-campaign"
            customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[10px] md:px-6 md:font-normal ml-2"
          />
        </div>
      </div>

      <div>
         <h4 className='text-black dark:text-white text-xl font-medium mt-6 mb-6'>Manage your campaign</h4>
      </div>

      <div className='bg-white bg-opacity-70 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2' color="#7033ff" strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Sender</h4>
                        <p className='flex gap-3 text-sm'>
                            <span>Miracle Regen</span>
                            <span className='text-primary'>Review your sender status</span>
                        </p>
                    </div>
                </div>
                <ChevronDown />
      </div>

      <div className='bg-white bg-opacity-70 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Recipients</h4>
                            <span>The people who receive your campaign.</span>
                    </div>
                </div>
                <ChevronDown />
      </div>
      <div className='bg-white bg-opacity-70 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Subject</h4>
                            <span>Add a subject line for this campaign.</span>
                    </div>
                </div>
                <ChevronDown />
      </div>

      <div className='bg-white bg-opacity-70 py-4 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <CircleDot className='mt-2'strokeWidth={2.5} size={24} /> 
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Design</h4>
                            <span>Create your email content.</span>
                    </div>
                </div>
                <button  className='bg-white border text-sm  rounded-lg text-black dark:text-white border-gray-4 py-[12px] px-[25px]'>Start Designing</button>
      </div>

      <div className='flex justify-between items-center mt-10 mb-5'>
                        <h4 className='text-xl text-black dark:text-white font-medium'>Additional settings</h4>
                <button  className='bg-white border text-sm  rounded-lg text-black dark:text-white border-gray-4 py-[12px] px-[25px]'>Edit Settings</button>
      </div>

    </div>
  );
};

export default ManageCampaign;
