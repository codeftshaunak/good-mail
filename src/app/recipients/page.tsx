import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Recipients from "@/components/Recipients/Recipients";

const Campaign = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full">
                <Recipients />
            </div>
        </DefaultLayout>
    );
};

export default Campaign;