import ButtonDefault from "../Buttons/ButtonDefault"

export const DashboardTopBar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-8 mb-5  bg-[#F7F9FF]  border border-[#94a8f7]  rounded-lg shadow-sm">            <div>
            <h3 className="text-2xl font-bold text-[#4263EB]">Dashboard</h3>
            <p>Welcome, Let’s dive into your personalized setup guide.</p>
        </div>
            <ButtonDefault
                label="Create campaigns"
                link="/add-campaign"
                customClasses="bg-primary rounded-[5px] text-white text-base md:text-normal py-[6px] px-2 md:py-[11px] md:px-6 md:font-normal ml-2"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 12.75H5.5V11.25H11.25V5.5H12.75V11.25H18.5V12.75H12.75V18.5H11.25V12.75Z" fill="white" />
                </svg>
            </ButtonDefault>
        </div>
    )
}

export const DashboardPerformanceNotify = () => {
    return (
        <div className="flex justify-between items-center px-5 py-8 mb-5  bg-[#F7F9FF]  border border-[#94a8f7]  rounded-lg shadow-sm">
            <div>
                <h3 className="text-xl font-semibold text-[#4263EB]">Performance Over Time</h3>
                <p>29 Sep, 2024</p>
            </div>
            <div className="flex gap-3">
                <ButtonDefault
                    label="Sort"
                    link="/"
                    customClasses="rounded-[5px] text-sm md:text-normal py-[3px] px-2 md:py-[7px] md:px-3 font-normal border text-black"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.60267 8.43579V3.58196L3.71283 5.47179L3 4.76913L6.1025 1.66663L9.20517 4.76913L8.49233 5.47179L6.6025 3.58196V8.43579H5.60267ZM9.891 14.3333L6.7885 11.2308L7.50133 10.5281L9.391 12.418V7.56413H10.391V12.418L12.2808 10.5281L12.9935 11.2308L9.891 14.3333Z" fill="black" />
                    </svg>
                </ButtonDefault>
                <ButtonDefault
                    label="Filter"
                    link="/"
                    customClasses="rounded-[5px] text-sm md:text-normal py-[3px] px-2 md:py-[7px] md:px-3 font-normal border text-black"                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.85254 11.6667V10.6667H9.14104V11.6667H6.85254ZM4.26937 8.50004V7.50004H11.7244V8.50004H4.26937ZM2.33337 5.33337V4.33337H13.6667V5.33337H2.33337Z" fill="black" />
                    </svg>

                </ButtonDefault>
            </div>
        </div>)
}

