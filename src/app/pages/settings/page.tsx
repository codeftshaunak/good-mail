import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoodMail",
  description: "This is the best product for send email",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Settings" />
        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
