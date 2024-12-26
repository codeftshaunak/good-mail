import { AlignLeft, Clock, CodeXml, GripHorizontal, Image, MoveLeft, Quote, Sheet, Signature, SquareMinus, SquarePlay, Type } from "lucide-react"

const CampaignDesign = () => {
    return (
        <div>
            <div className="flex items-center gap-6">
                <MoveLeft color="black" size={24} strokeWidth={1.5} />
                <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">Newsletter4</h4>
                    <div className="flex items-center gap-1">
                        <Clock size={16} strokeWidth={1.5} />
                        <p>Last saved 9:36 PM</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-8">Items</h4>
                <div className="grid grid-cols-3 gap-4 w-[325px]">
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <AlignLeft size={36} strokeWidth={1} />
                        <p className="text-lg text-black dark:text-white">Text</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <Type size={36} strokeWidth={1.5} />
                        <p className="text-lg text-black dark:text-white">Title</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <Image size={36} strokeWidth={1.5} />                        <p className="text-lg text-black dark:text-white">Image</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <SquarePlay size={36} strokeWidth={1.5} />
                        <p className="text-lg text-black dark:text-white">Video</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <Sheet size={36} strokeWidth={1.5} />                        <p className="text-lg text-black dark:text-white">Table</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <Quote size={36} strokeWidth={1.5} />                        <p className="text-lg text-black dark:text-white">Quote</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <SquareMinus size={36} strokeWidth={1.5} />                         <p className="text-lg text-black dark:text-white">Button</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <Signature size={36} strokeWidth={1.5} />
                        <p className="text-lg text-black dark:text-white">Signature</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <CodeXml size={36} strokeWidth={1.5} />                        <p className="text-lg text-black dark:text-white">HTML</p>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <AlignLeft size={36} strokeWidth={1} />
                        <p className="text-lg text-black dark:text-white">Text</p>
                    </div>  <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <AlignLeft size={36} strokeWidth={1} />
                        <p className="text-lg text-black dark:text-white">Text</p>
                    </div>  <div className="px-4 py-2 flex flex-col gap-1 items-center bg-transparent border border-gray-4 rounded-lg w-[100px]">
                        <GripHorizontal size={24} strokeWidth={1.5} />
                        <AlignLeft size={36} strokeWidth={1} />
                        <p className="text-lg text-black dark:text-white">Text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignDesign
