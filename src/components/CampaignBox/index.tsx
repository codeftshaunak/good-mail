
"use client";
import { FolderOpen, Plus, Search } from "lucide-react";
import { useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import TableThree from "../Tables/TableThree";

const CampaignBox = () => {
    const [active, setActive] = useState("send");

    const renderButton = (label: string, count: number, type: string) => (
        <button
            className={`flex gap-2 items-center rounded-[5px] text-sm md:text-base py-[3px] px-[5px] md:py-[7px] md:px-3 font-medium border ${active === type ? "bg-primary text-white" : "dark:text-white text-black"
                }`}
            onClick={() => setActive(type)}
        >
            <p>{label}</p>
            <p
                className={`bg-white px-[8px] py-[2px] rounded-full ${active === type ? "text-black" : "text-black"
                    }`}
            >
                {count}
            </p>
        </button>
    );

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-8 mb-5 bg-[#F7F9FF] border border-[#94a8f7] rounded-lg shadow-sm">
                <h3 className="text-lg md:text-2xl font-bold text-[#4263EB]">Campaigns</h3>
                <ButtonDefault
                    label="Create campaigns"
                    link="/add-campaign"
                    customClasses="bg-primary rounded-[5px] text-white text-sm md:text-xl py-[5px] px-3 md:py-[11px] md:px-6 md:font-normal ml-2"
                >
                    <Plus color="white" size={22} strokeWidth={1.5} />
                </ButtonDefault>
            </div>

            {/* Subheader */}
            <h4 className="text-primary text-lg font-medium">Grow your business further</h4>
            <p>Powerful content for business growth, engagement, and lasting success.</p>

            {/* Controls */}
            <div className="md:flex gap-2 justify-between mt-5 mb-5">
                <div className="flex items-center justify-center gap-3 border border-gray-4 rounded-[5px] bg-black bg-opacity-5 bg-transparent px-2 py-2">
                    {renderButton("Send", 0, "send")}
                    {renderButton("Draft", 0, "draft")}
                    {renderButton("Outbox", 0, "outbox")}
                </div>

                <div className="md:flex gap-2 items-center">
                    {/* Search Input */}
                    <div className="relative w-full mt-4 md:mt-0">
                        <button className="absolute top-[25px] left-5 -translate-y-1/2 text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary">
                            <Search size={20} strokeWidth={1} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search for a campaign"
                            className="w-full rounded-lg border-2 bg-transparent border-gray-4 bg-gray-2 py-3 pl-13.5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:focus:border-primary xl:w-[300px]"
                        />
                    </div>

                    {/* Create Folder Button */}
                    <ButtonDefault
                        label="Create folder"
                        link="/campaign"
                        customClasses="bg-primary h-[50px] rounded-[5px] text-white text-base md:text-normal py-2 md:px-6 md:font-normal w-full mt-4 md:mt-0"
                    >
                        <FolderOpen color="white" size={24} />
                    </ButtonDefault>
                </div>
            </div>

            {/* Table */}
            <TableThree />
        </div>
    );
};

export default CampaignBox;
