"use client";
import Link from "next/link";
import Image from "next/image";

import {
  AlarmClock,
  AlignLeft,
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

const CampaignDesign = () => {
  return (
    <div className="flex gap-3">
      <div className="w-[600px] rounded-xl border bg-white px-[20px] pb-[30px] pt-[15px]">
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

          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <AlignLeft size={30} strokeWidth={1} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Text
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Type size={30} strokeWidth={1.5} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Title
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Images size={30} strokeWidth={1.5} />{" "}
                <p className="text-lg font-medium text-black dark:text-white">
                  Image
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <SquarePlay size={30} strokeWidth={1.5} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Video
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Sheet size={30} strokeWidth={1.5} />{" "}
                <p className="text-lg font-medium text-black dark:text-white">
                  Table
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Quote size={30} strokeWidth={1.5} />{" "}
                <p className="text-lg font-medium text-black dark:text-white">
                  Quote
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <SquareMinus size={30} strokeWidth={1.5} />{" "}
                <p className="text-lg font-medium text-black dark:text-white">
                  Button
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <Signature size={30} strokeWidth={1.5} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Signature
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <CodeXml size={30} strokeWidth={1.5} />{" "}
                <p className="text-lg font-medium text-black dark:text-white">
                  HTML
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <AlignLeft size={30} strokeWidth={1} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Text
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <AlignLeft size={30} strokeWidth={1} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Text
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-4 bg-transparent  px-[48px] py-[8px]">
                <GripHorizontal size={20} strokeWidth={1.5} />
                <AlignLeft size={30} strokeWidth={1} />
                <p className="text-lg font-medium text-black dark:text-white">
                  Text
                </p>
              </div>
            </div>
          </div>

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

      <div className="rounded-lg border bg-white p-4">
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
            src={"/images/logo/logo-dark.svg"}
            alt="Logo"
            priority
            className="mb-7 mt-7"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <textarea
          rows={8}
          placeholder="Start typing..."
          className="w-full rounded-[7px] border-[1.5px] border-stroke bg-teal-300 bg-transparent bg-opacity-15 px-5.5 py-3 text-dark outline-none"
        ></textarea>
        <p className="mt-6 text-base text-black">
          This email was sent to{" "}
          <span className="text-blue-600">akmalnsrllh@gmail.com</span>. If you'd
          rather not receive this kind of email, you can{" "}
          <span className="text-blue-600">
            unsubscribe or manage your email preferences
          </span>
          .
        </p>
        <p className="mt-2 text-base text-black">
          Stripe, 510 Townsend Street, San Francisco, CA 94103
        </p>
      </div>

      <div className="rounded-lg border bg-white p-5">
        <div className="flex items-center justify-between gap-5">
          <Eye />
          <div className="flex justify-end gap-3">
            <button
              className="flex justify-center rounded-[7px] border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
              type="submit"
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-6 px-6">
          <button className="text-base font-normal text-black border-black border-b-2 px-8 pb-2 ">Design</button>

          <button className="text-base font-normal text-black px-8 pb-2">Setting</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDesign;
