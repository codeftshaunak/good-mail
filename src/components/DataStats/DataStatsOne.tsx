import { dataStats } from "@/types/dataStats";
import React from "react";

const dataStatsList = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6L12 12L21 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 15L21 18L18 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    color: "#004EEB",
    text: "green",
    title: "Delivered",
    value: "42,642.1",
    growthRate: 0.43,
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="48" height="48" rx="24" fill="#F76707" />
        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#E8590C" stroke-width="8" />
        <path d="M19.3333 28H22.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M28.3333 19V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.1333 23.8021L21.9333 21.6021" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M32.5334 23.8021L34.7334 21.6021" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.1333 32.203L21.9333 34.403" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M28.3333 28L37.3333 31L33.3333 33L31.3333 37L28.3333 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    color: "#E8590C",
    text: 'red',
    title: "Opned",
    value: "26,843",
    growthRate: 4.35,
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="48" height="48" rx="24" fill="#7950F2" />
        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#7048E8" stroke-width="8" />
        <path d="M20.8888 38C21.4782 38 22.0434 37.7659 22.4602 37.3491C22.8769 36.9324 23.1111 36.3671 23.1111 35.7778C23.1111 35.1884 22.8769 34.6232 22.4602 34.2064C22.0434 33.7897 21.4782 33.5555 20.8888 33.5555C20.2995 33.5555 19.7342 33.7897 19.3175 34.2064C18.9008 34.6232 18.6666 35.1884 18.6666 35.7778C18.6666 36.3671 18.9008 36.9324 19.3175 37.3491C19.7342 37.7659 20.2995 38 20.8888 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M33.1111 38C33.7004 38 34.2657 37.7659 34.6824 37.3491C35.0992 36.9324 35.3333 36.3671 35.3333 35.7778C35.3333 35.1884 35.0992 34.6232 34.6824 34.2064C34.2657 33.7897 33.7004 33.5555 33.1111 33.5555C32.5217 33.5555 31.9565 33.7897 31.5397 34.2064C31.123 34.6232 30.8889 35.1884 30.8889 35.7778C30.8889 36.3671 31.123 36.9324 31.5397 37.3491C31.9565 37.7659 32.5217 38 33.1111 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M33.1111 33.5556H20.8888V18H18.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.8889 20.2222L36.4444 21.3333L35.3333 29.1111H20.8889" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    color: "#8155FF",
    text: "green",
    title: "Clicked",
    value: "525,753",
    growthRate: 2.59,
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="48" height="48" rx="24" fill="#7950F2" />
        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#7048E8" stroke-width="8" />
        <path d="M20.8888 38C21.4782 38 22.0434 37.7659 22.4602 37.3491C22.8769 36.9324 23.1111 36.3671 23.1111 35.7778C23.1111 35.1884 22.8769 34.6232 22.4602 34.2064C22.0434 33.7897 21.4782 33.5555 20.8888 33.5555C20.2995 33.5555 19.7342 33.7897 19.3175 34.2064C18.9008 34.6232 18.6666 35.1884 18.6666 35.7778C18.6666 36.3671 18.9008 36.9324 19.3175 37.3491C19.7342 37.7659 20.2995 38 20.8888 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M33.111 38C33.7004 38 34.2656 37.7659 34.6824 37.3491C35.0991 36.9324 35.3332 36.3671 35.3332 35.7778C35.3332 35.1884 35.0991 34.6232 34.6824 34.2064C34.2656 33.7897 33.7004 33.5555 33.111 33.5555C32.5216 33.5555 31.9564 33.7897 31.5397 34.2064C31.1229 34.6232 30.8888 35.1884 30.8888 35.7778C30.8888 36.3671 31.1229 36.9324 31.5397 37.3491C31.9564 37.7659 32.5216 38 33.111 38Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M33.1111 33.5556H20.8888V18H18.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.8888 20.2222L36.4444 21.3333L35.3332 29.1111H20.8888" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    color: "#18BFFF",
    text: "red",
    title: "Subscribe",
    value: "425",
    growthRate: 0.25,
  },
];

const DataStatsOne: React.FC<dataStats> = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 xl:grid-cols-4 2xl:gap-5">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
          >
            <div
              className="flex h-14.5 w-14.5 items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <span className="text-lg font-normal text-black dark:text-white">{item.title}</span>

                <h4 className="text-4xl font-bold text-dark dark:text-white">
                  {item.value}
                </h4>
              </div>

              <span
                className={`flex items-center gap-1.5 text-[14px] text-${item.text} rounded-md px-1 font-medium border border-${item.text} "`}
              >
                {item.growthRate}%
                {item.growthRate > 0 ? (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                      fill=""
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
