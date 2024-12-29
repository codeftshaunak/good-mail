"use client";

import Link from "next/link";

import Image from "next/image";
import {
  AlarmClock,
  AlignLeft,
  ChevronUp,
  Clock,
  CodeXml,
  Eye,
  GripHorizontal,
  Images,
  MoveLeft,
  Quote,
  Redo2,
  Save,
  Sheet,
  Signature,
  SquareMinus,
  SquarePlay,
  Type,
  Undo2,
} from "lucide-react";
import { useState } from "react";

const CampaignDesign = () => {
  const [active, setActive] = useState("Color")

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {/* Left Sidebar */}
      <div className="flex flex-col w-full rounded-xl border bg-white p-4 lg:max-w-[30%] md:max-h-[1000px]">
        <div className="flex items-center gap-6">
          <MoveLeft color="black" size={24} strokeWidth={1.5} />
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white">
              Newsletter4
            </h4>
            <div className="flex items-center gap-1">
              <Clock size={16} strokeWidth={1.5} />
              <p>Last saved 9:36 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="mb-8 text-lg font-semibold text-black dark:text-white">
            Items
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: AlignLeft, label: "Text" },
              { icon: Type, label: "Title" },
              { icon: Images, label: "Image" },
              { icon: SquarePlay, label: "Video" },
              { icon: Sheet, label: "Table" },
              { icon: Quote, label: "Quote" },
              { icon: SquareMinus, label: "Button" },
              { icon: Signature, label: "Signature" },
              { icon: CodeXml, label: "HTML" },
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-lg border border-gray-4 bg-transparent px-6 py-4"
              >
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Icon size={30} strokeWidth={1.5} />
                <p className="text-sm font-medium text-black dark:text-white">{label}</p>
              </div>
            ))}
          </div>
          {/* <h4 className="mb-4 mt-4 text-lg font-semibold text-black dark:text-white">
            Sections
          </h4> */}
          {/* <div className="flex flex-col gap-6">
            {[
              { columns: 1, label: "Single Column" },
              { columns: 2, label: "Double Column" },
            ].map(({ columns, label }, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-4 bg-transparent"
              >
                <div className="mb-4 mt-4 flex flex-col items-center justify-center gap-3">
                  <GripHorizontal size={24} strokeWidth={1.5} />
                  <div className={`flex gap-2 ${columns === 1 ? "w-[160px]" : "w-[160px]"}`}>
                    {[...Array(columns)].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-[80px] rounded-md bg-gray-6 bg-opacity-15 py-8"
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-black dark:text-gray-1">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
              <h4 className="mb-4 mt-4 text-lg font-semibold text-black dark:text-white">
            Sections
          </h4>

          <div>
            <div className="rounded-lg border border-gray-4 bg-transparent">
              <div className="mb-4 mt-4 flex flex-col items-center justify-center gap-3">
                <GripHorizontal size={24} strokeWidth={1.5} />
                <div className="w-[160px] rounded-md bg-gray-6 bg-opacity-15 py-8"></div>
                <p className="text-lg font-medium text-black dark:text-gray-1">
                  Single Column
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-gray-4 bg-transparent">
              <div className="mb-4 mt-4 flex flex-col items-center justify-center gap-3">
                <GripHorizontal size={24} strokeWidth={1.5} />
                <div className="flex gap-2">
                  <div className="w-[80px] rounded-md bg-gray-6 bg-opacity-15 py-8"></div>
                  <div className="w-[80px] rounded-md bg-gray-6 bg-opacity-15 py-8"></div>
                </div>
                <p className="text-lg font-medium text-black dark:text-gray-1">
                  Single Column
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Editor */}
      <div className="flex flex-col w-full rounded-lg border bg-white p-4 lg:max-w-[40%] lg:max-h-[800px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <AlarmClock color="black" size={20} />
            <Undo2 color="black" size={20} />
            <Redo2 color="black" size={20} />
          </div>
          <Save />
        </div>
        <Link href="/">
          <Image
            width={176}
            height={32}
            src="/images/logo/logo-dark.svg"
            alt="Logo"
            priority
            className="mb-7 mt-7"
          />
        </Link>
        <textarea
          rows={12}
          placeholder="Start typing..."
          className="w-full rounded-[7px] border-[1.5px] border-stroke bg-teal-300 bg-opacity-10 px-5.5 py-3 text-dark outline-none"
        ></textarea>
        <p className="mt-6 text-sm text-black">
          This email was sent to{" "}
          <span className="text-blue-600">akmalnsrllh@gmail.com</span>. If
          you&apos;d rather not receive this kind of email, you can{" "}
          <span className="text-blue-600">
            unsubscribe or manage your email preferences
          </span>
          .
        </p>
        <p className="mt-2 text-sm text-black">
          Stripe, 510 Townsend Street, San Francisco, CA 94103
        </p>
      </div>

      {/* Right Preview Section */}
      <div className="flex flex-col w-full rounded-lg border bg-white p-5 lg:max-w-[30%] lg:max-h-[1100px]">
  <div className="flex items-center justify-between gap-5">
    <Eye />
    <div className="flex items-center justify-end gap-3">
      <button
        className="flex items-center justify-center rounded-[7px] border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
        type="submit"
      >
        Cancel
      </button>
      <button
        className="flex items-center justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
        type="submit"
      >
        Save
      </button>
    </div>
  </div>
  <div className="flex justify-between items-center mt-6 px-6">
    <button className="text-base font-normal text-black border-black border-b-2 px-8 pb-2">
      Design
    </button>
    <button className="text-base font-normal text-black px-8 pb-2">
      Setting
    </button>
  </div>

  <div className="flex items-center justify-between mt-6 mb-5">
    <h4 className="text-lg font-semibold text-black dark:text-white">Background</h4>
    <ChevronUp />
  </div>
  <div className="bg-black bg-opacity-5 mt-10 py-2 px-2 rounded-md grid grid-cols-2">
    <button
      className={`text-base rounded-md font-semibold py-2 ${
        active === "Color" ? "bg-white text-primary" : "bg-transparent text-black"
      }`}
      onClick={() => setActive("Color")}
    >
      Color
    </button>
    <button
      className={`text-base rounded-md font-semibold py-2 ${
        active === "Image" ? "bg-white text-primary" : "bg-transparent text-dark"
      }`}
      onClick={() => setActive("Image")}
    >
      Image
    </button>
  </div>
  <div>
    <div className="bg-transparent border border-1 border-gray-4 mt-6 flex justify-between items-center px-4 py-3 rounded-md mb-5">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <input className="w-5 h-5" type="checkbox" />
        <p className="text-gray-950 dark:text-white font-medium text-lg">#FFFFFF</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-px bg-gray-600"></div>
        <p className="text-base font-medium text-black dark:text-white">100%</p>
      </div>

    </div>

    <div className="flex items-center justify-between mt-6 mb-5">
    <h4 className="text-lg font-semibold text-black dark:text-white">Padding</h4>
    <ChevronUp />
  </div>

  <div className="flex gap-4">
    <div className="flex gap-4 items-center justify-center bg-transparent border border-gray-4 rounded-md px-[20px] py-[10px] w-full">
    <div className="flex gap-[5px]">
    <span className="border border-r-1 border-gray-4"></span>
      <span className="border-2 px-[7px] py-4 rounded-[4px] border-gray-4"></span>
      <span className="border border-r-1 border-gray-4"></span>
    </div>
      <p className="text-lg font-normal text-black dark:text-white">32</p>
      <p>px</p>
    </div>
    <div className="flex items-center justify-center gap-4 bg-transparent border border-gray-4 rounded-md px-[20px] py-[10px] w-full">
    <div className="gap-[5px] flex flex-col">
  <span className="border-t-2 border-gray-4 w-full"></span>
  <span className="border-2 px-4 py-[7px] rounded-[4px] border-gray-4"></span>
  <span className="border-b-2 border-gray-4 w-full"></span>
</div>

      <p className="text-lg font-normal text-black dark:text-white">32</p>
      <p>px</p>
    </div>
  </div>

  <div className="flex items-center justify-between mt-6 mb-5">
    <h4 className="text-lg font-semibold text-black dark:text-white">Text block</h4>
    <ChevronUp />
  </div>
  <div className="flex items-center justify-between mt-6">
    <p className="text-lg font-medium text-black dark:text-white w-[140px]">Text Style</p>
    <select
                        name="firstDropdown"
                        id="firstDropdown"
                        className="px-5 py-3 w-full bg-transparent border border-gray-600 rounded-md text-black dark:text-white font-medium appearance-none pr-10 bg-right bg-no-repeat cursor-pointer"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '25px 25px', // Increased icon size by ~10%
                            paddingRight: '28px', // Adjusted padding for the larger icon
                        }}
                    >
                        <option value="6">Paragraph</option>
                        <option value="7">Paragraph 2</option>
                    </select>
  </div>
  <div className="flex items-center justify-between mt-6">
    <p className="text-lg font-medium text-black dark:text-white w-[140px]">Font</p>
  <div className="flex gap-2">
  <select
                        name="firstDropdown"
                        id="firstDropdown"
                        className="px-5 py-3 w-[152px] bg-transparent border border-gray-600 rounded-md text-black dark:text-white font-medium appearance-none pr-10 bg-right bg-no-repeat cursor-pointer"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>')`,
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '25px 25px', // Increased icon size by ~10%
                            paddingRight: '28px', // Adjusted padding for the larger icon
                        }}
                    >
                        <option value="6">Inter</option>
                        <option value="7">Mono</option>
                    </select>
                    <div className="flex gap-4 items-center justify-center bg-transparent border border-gray-4 rounded-md px-[20px] py-[10px]">
      <p className="text-lg font-normal text-black dark:text-white">32</p>
      <p>px</p>
    </div>
  </div>
  </div>
  <div className="flex items-center mt-6">
    <p className="text-lg font-medium text-black dark:text-white w-[140px]">Color</p>
    <div className="bg-transparent border border-1 border-gray-4 flex justify-between items-center px-4 py-3 rounded-md w-full">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <input className="w-5 h-5" type="checkbox" />
        <p className="text-gray-950 dark:text-white font-medium text-lg">#FFFFFF</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-px bg-gray-600"></div>
        <p className="text-base font-medium text-black dark:text-white">100%</p>
      </div>

    </div>
  </div>
  <div className="flex items-center mt-6">
    <p className="text-lg font-medium text-black dark:text-white w-[140px]">Alignment</p>
    <div className="bg-transparent border border-1 border-gray-4 flex justify-between items-center px-4 py-3 rounded-md w-full">
    <AlignLeft/>
    <AlignLeft/>
    <AlignLeft/>
    <AlignLeft/>
    </div>
  </div>
  <div className="flex items-center justify-between mt-6 mb-5">
    <h4 className="text-lg font-semibold text-black dark:text-white">Text block</h4>
    <ChevronUp />
  </div>
  <div className="mt-6 flex items-center">
  <p className="text-lg font-medium text-black dark:text-white w-[150px]">Font</p>
  <div className="flex gap-2 w-full">
    {/* First Box */}
    <div className="flex gap-4 items-center bg-transparent border border-gray-4 rounded-md px-[20px] py-[10px] w-full">
      <p className="text-lg font-normal text-black dark:text-white">14</p>
      <p>px</p>
    </div>
    {/* Second Box */}
    <div className="flex gap-4 items-center justify-center bg-transparent border border-gray-4 rounded-md px-[20px] py-[10px]">
      <AlignLeft/>
    </div>
  </div>
</div>

  </div>
</div>



</div>

  );
};

export default CampaignDesign;