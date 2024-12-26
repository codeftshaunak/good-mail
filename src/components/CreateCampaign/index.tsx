'use client'
import { ChangeEvent, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";

const CreateCampaign = () => {
    const [active, setActive] = useState("regular")

    const [inputValue, setInputValue] = useState("");
    const maxLength = 128;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(value);

        if (value.length <= maxLength) {
            setInputValue(value);
        }
    };
    return (
        <div>
            <div className="max-w-2xl mx-auto bg-white p-12 rounded-md items-center">
                <h4 className="text-2xl font-semibold text-black">Create an email campaign</h4>
                <div className="bg-black bg-opacity-5 mt-10 py-2 px-2 rounded-md grid grid-cols-2">
                    <button
                        className={`text-base rounded-md font-semibold py-2  ${active === "regular" ? "bg-white text-primary" : `bg-transparent text-black`
                            }`}
                        onClick={() => setActive("regular")}
                    >
                        Regular
                    </button>
                    <button
                        className={`text-base rounded-md font-semibold py-2  ${active === "abTest" ? "bg-white text-primary" : `bg-transparent text-dark`
                            }`}
                        onClick={() => setActive("abTest")}
                    >
                        A/B Test
                    </button>
                </div>
                <p className="text-base mt-4 text-gray-6">Keep your subscribers engaged by sharing updates, promoting top <br />products, or announcing exciting events.</p>
                <h4 className="text-lg font-medium text-black mt-4 mb-4">Campaign name</h4>

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
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Search for a campaign"
                        className={`w-full rounded-lg border-2 bg-transparent border-gray-4 bg-gray-2 py-3 pl-13.5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:focus:border-primary ${inputValue.length >= maxLength ? "text-red-500" : ""
                            }`}
                    />

                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {inputValue.length}/{maxLength}
                </div>
                {inputValue.length === maxLength && (
                    <p className="text-sm text-red-500">Character limit reached!</p>
                )}

                <div className='flex gap-8 justify-end mt-6'>
                    <button className='text-lg font-medium text-black'>Cancle</button>
                    <ButtonDefault
                        label="Create campaigns"
                        link="/review-campaign"
                        customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[11px] md:px-6 md:font-normal ml-2"
                    >
                    </ButtonDefault>
                </div>
            </div>
        </div>
    )
}

export default CreateCampaign
