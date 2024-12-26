import AddCampaign from "@/components/AddCampaign";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Campaign = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full">

                <AddCampaign />
            </div>
        </DefaultLayout>
    );
};

export default Campaign;
