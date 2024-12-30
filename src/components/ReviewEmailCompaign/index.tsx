'use client'
import { CalendarDays, ChevronLeft, ChevronUp, CircleHelp, Component, NotepadText, PencilLine, ScanEye, Send, Smile, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from "../../../public/images/logo.png";
import ButtonDefault from '../Buttons/ButtonDefault';

const ReviewEmailCompaign = () => {
    const [isOpnenRecipients, setIsOpenRecipients] = useState(false);
    const [isOpnenSubject, setIsOpnenSubject] = useState(false);
    const [text, setText] = useState('');
    const [number,setNumber] = useState('');
    const maxLength = 200;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= maxLength) {
            setText(event.target.value);
        }
    };
    const handleChangeNumber = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= maxLength) {
            setNumber(event.target.value);
        }
    };

    return (
        <div>
            
            <div className="bg-black bg-opacity-5 py-8 px-5 rounded-md flex justify-between">

                <div className='flex items-center gap-3'>
                    <p className='bg-transparent border border-gray-5 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                        <ChevronLeft />
                    </p>
                    <h4 className='text-primary text-xl font-medium'>Test</h4>
                    <PencilLine className='cursor-pointer' size={22} strokeWidth={1.2} />
                    <h4 className='bg-transparent border border-gray-4 text-black dark:text-white w-[70px] flex flex-col text-center justify-center'>Draft</h4>
                </div>

                <div className='flex gap-4'>
                    <div className='flex gap-2 bg-transparent border border-indigo-400 p-2 rounded-md cursor-pointer'>
                        <ScanEye color='#5614f0' strokeWidth={1} fontWeight={"800"} />
                        <p className='text-primary text-base font-semibold'>Preview & Test</p>
                    </div>
                    <button className='flex  items-center gap-2 bg-primary px-4 py-2 rounded-md'>
                        <CalendarDays color='white' size={22} />
                        <p className='text-white  text-base'>Schedule</p>
                    </button>
                </div>

            </div>

            <div className='bg-transparent border border-gray-3 py-2 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-3'>
                    <Send className='mt-2' color="#7033ff" strokeWidth={1.5} size={22} />
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Sender</h4>
                        <p className='flex gap-3 text-sm'>
                            <span>Miracle Regen</span>
                            <span>Review your sender status</span>
                        </p>
                    </div>
                </div>
                <button className='bg-gray-2 border text-sm font-semibold rounded-2xl text-black border-gray-4 py-[6px] px-[10px]'>Manage sender</button>
            </div>

            <div className='bg-transparent border border-gray-3 py-2 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-2'>
                    <NotepadText className='mt-1' color="#7033ff" strokeWidth={1.5} size={22} />
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Recipients</h4>
                        <p className='flex gap-3 text-sm'>
                            The people who receive your compaign
                        </p>
                    </div>
                </div>
                <button onClick={() => setIsOpenRecipients(!isOpnenRecipients)} className='bg-gray-2 border text-sm font-semibold rounded-2xl text-black border-gray-4 py-[6px] px-[10px]'>Add recipients</button>
            </div>

            {isOpnenRecipients && <div className='grid gap-4 grid-cols-6 mt-8 px-8 pr-15'>
                <div className='col-span-2'>
                    <h4 className='text-lg text-black dark:text-white font-medium'>Recipients</h4>
                    <p>The people who receive your <br /> campaign</p>
                </div>
                <div className='col-span-4'>
                    <p className='text-base font-medium text-black dark:text-white mb-3'>Send to</p>
                    <select
                        name="firstDropdown"
                        id="firstDropdown"
                        className="px-5 py-3 w-full bg-transparent border border-gray-600 rounded-md  font-medium appearance-none pr-10 bg-right bg-no-repeat cursor-pointer"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '25px 25px', // Increased icon size by ~10%
                            paddingRight: '28px', // Adjusted padding for the larger icon
                        }}
                    >
                        <option
                        className='text-md text-black dark:text-white'
                         value="6">
                            Select list(s) or segment(s)
                        </option>
                        <option value="7">Advance option</option>
                    </select>
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" className='' />
                        <p>Don’t send to unengaged contacts</p>
                        <CircleHelp size={18} strokeWidth={1.75} />
                    </div>

                    <select
                        name="firstDropdown"
                        id="firstDropdown"
                        className="px-5 py-3 w-[230px] bg-transparent border border-gray-600 rounded-md text-indigo-500 font-medium mt-8 appearance-none pr-10 bg-right bg-no-repeat cursor-pointer"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '25px 25px', // Increased icon size by ~10%
                            paddingRight: '28px', // Adjusted padding for the larger icon
                        }}
                    >
                        <option value="6">Advance option</option>
                        <option value="7">Advance option</option>
                    </select>

                    <div className='flex justify-between mt-10 mb-1 pr-[4px] pl-[2px]'>
                        <p className='text-base font-semibold text-black dark:text-white'>0 recipients</p>
                        <p>4,601 remaining emails</p>
                    </div>
                    <div className='bg-transparent border border-gray-5 py-2 px-3 rounded-md flex justify-between items-center mb-2'></div>
                    <p>Send to as many recipients as you wish, within your plan limits.</p>

                    <div className='flex gap-5 mt-10 justify-end'>
                        <button className='text-lg font-medium text-black dark:text-white bg-transparent border border-gray-5 rounded-[5px] md:text-normal py-[6px] px-3 ml-2'>Cancle</button>
                        <ButtonDefault
                            label="Save"
                            link="/campaign"
                            customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[5px] md:px-6 md:font-normal ml-2"
                        >
                        </ButtonDefault>
                    </div>
                </div>
            </div>}

            <div className='bg-transparent border border-gray-3 py-2 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-2'>
                    <Send className='mt-2' color="#7033ff" strokeWidth={1.5} size={22} />
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Subject</h4>
                        <p className='flex gap-3 text-sm'>
                            Add a subject line for this campaign
                        </p>
                    </div>
                </div>
                <button onClick={() => setIsOpnenSubject(!isOpnenSubject)} className='bg-gray-2 border text-sm font-semibold rounded-2xl text-black border-gray-4 py-[6px] px-[10px]'>Add subject</button>
            </div>

            {isOpnenSubject && <div className='grid grid-cols-3 gap-5 px-[35px] mt-9'>
                <div className='col-span-1'>
                    <h4 className='text-lg font-semibold text-black dark:text-white'>Subject</h4>
                    <p>Add a subject line for this campaign</p>
                    <div className='flex flex-col relative mt-6'>
                        <Image width={330} height={330} src={logo} alt='logo' />
                        <p className='text-xs absolute bottom-1 ml-[6px]'>Actual email Preview may very depending on the email client.</p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-lg font-semibold text-black dark:text-white'>Subject line <span className='text-red-600'>*</span></h4>
                        <CircleHelp size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                        <textarea
                            className="w-full p-3 border border-gray-300 bg-transparent rounded-md"
                            rows={2}
                            value={text}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                        />
                        <div className="flex items-center gap-2 absolute bottom-2 right-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Smile size={20} strokeWidth={1.8} />
                                <User size={20} />
                            </div>
                            <div>{text.length}/{maxLength}</div>
                        </div>
                        {/* <button className='bg-transparent absolute -bottom-[50px] right-0 grid border-2 border-primary text-primary py-1 px-4 rounded-full font-semibold'>Use AI</button> */}
                    </div>
                    <div className='flex items-center gap-1 mt-[60px]'>
                        <h4 className='text-lg font-semibold text-black dark:text-white'>Preview text</h4>
                        <CircleHelp size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                        <textarea
                            className="w-full p-3 border border-gray-300 bg-transparent rounded-md"
                            rows={2}
                            value={number}
                            onChange={handleChangeNumber}
                            placeholder="Type your message here..."
                        />
                        <div className="flex items-center gap-2 absolute bottom-2 right-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Smile size={20} strokeWidth={1.8} />
                                <User size={20} />
                            </div>
                            <div>{text.length}/{maxLength}</div>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-10 justify-end'>
                        <button className='text-lg font-medium text-black dark:text-white bg-transparent border border-gray-5 rounded-[5px] md:text-normal py-[6px] px-3 ml-2'>Cancle</button>
                        <ButtonDefault
                            label="Save"
                            link="/campaign"
                            customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[5px] md:px-6 md:font-normal ml-2"
                        >
                        </ButtonDefault>
                    </div>
                </div>
            </div>}

            <div className='bg-transparent border border-gray-3 py-2 px-3 rounded-md flex justify-between items-center mt-5'>
                <div className='flex gap-2'>
                    <Component className='mt-2' color="#7033ff" strokeWidth={1.5} size={22} />
                    <div>
                        <h4 className='text-lg text-black dark:text-white font-medium'>Design</h4>
                        <p className='flex gap-3 text-sm'>
                            Add a design for this campaign
                        </p>
                    </div>
                </div>
                <button className='bg-gray-2 border text-sm font-semibold rounded-2xl text-black border-gray-4 py-[6px] px-[10px]'><Link href={"/design-campaign"}>Add design</Link></button>
            </div>

        </div>
    );
};

export default ReviewEmailCompaign;
