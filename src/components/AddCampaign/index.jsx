
"use client";
import { CircleAlert, CircleCheck, Rocket } from 'lucide-react';
import { useState } from 'react';
import ButtonDefault from '../Buttons/ButtonDefault';


const AddCampaign = () => {
    const [active, setActive] = useState("regular");

    return (
        <div className="h-full">
            <div className="flex items-center gap-2">
                <Rocket color='blue' size={40} strokeWidth={1.5} />
                <h4 className="text-primary text-xl font-semibold">Create an email campaign</h4>
            </div>
            <p className="text-xl mt-3 w-[600px] text-amber-950 dark:text-white">Keep subscribers engaged by sharing your latest news, promoting your beastselling products,
                or announcing an upcoming event.</p>

            <div className="bg-transparent border border-gray-4 py-5 px-4 rounded-lg mt-16">
                <div className="bg-black bg-opacity-5 py-2 px-2 rounded-full grid grid-cols-2">
                    <button
                        className={`text-base rounded-full font-semibold py-2  ${active === "regular" ? "bg-primary text-white" : `bg-transparent dark:text-white text-black`
                            }`}
                        onClick={() => setActive("regular")}
                    >
                        Regular
                    </button>
                    <button
                        className={`text-base rounded-full font-semibold py-2  ${active === "abTest" ? "bg-primary text-white" : `bg-transparent dark:text-white text-black`
                            }`}
                        onClick={() => setActive("abTest")}
                    >
                        A/B Test
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-11 bg-transparent border border-gray-3 mt-4 p-8">
                <div>
                    <h3 className="text-xl mb-2 font-semibold text-black dark:text-white">Create an email campaign</h3>
                    <p className="text-base w-[280px]">Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.</p>
                </div>
                <div className="relative w-full max-w-[300px]">
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
                        placeholder="Search for a compaign"
                        className="w-full rounded-lg  border-2 bg-transparent border-gray-4 bg-gray-2 py-3 pl-13.5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:focus:border-primary xl:w-[500px]"
                    />
                </div>

            </div>
            <div className='flex items-center justify-between mt-[100px]'>
                <div className='flex gap-2 items-center'>
                    <CircleCheck size={24} color="#1f69ff" strokeWidth={3} absoluteStrokeWidth />
                    <h4 className='text-base font-medium text-black dark:text-white'>Saved just now</h4>
                    <CircleAlert size={20} strokeWidth={2} absoluteStrokeWidth />
                </div>
                <div className='flex gap-4'>
                    {/* <button className='text-lg font-medium text-black dark:text-white'>Cancle</button> */}
                    <ButtonDefault
                        label="Cancel"
                        link=""
                        customClasses="bg-tranparent border border-[#1f69ff] text-black dark:text-white rounded-[5px] text-base md:text-normal py-[6px] px-2 md:py-[11px] md:px-6 md:font-normal"
                    >
                    </ButtonDefault>
                    <ButtonDefault
                        label="Create campaigns"
                        link="/create-campaign"
                        customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[11px] md:px-6 md:font-normal ml-2"
                    >
                    </ButtonDefault>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;
