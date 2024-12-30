import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ManageCampaign from "@/components/ManageCampaign/ManageCampaign";

const Campaign = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full">

                <ManageCampaign />
            </div>
        </DefaultLayout>
    );
};

export default Campaign;
