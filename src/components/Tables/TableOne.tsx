import { BRAND } from "@/types/brand";

const brandData: BRAND[] = [
  {
    name: "Discover our new app features",
    campaign: "New app launch",
    status: "Sent",
    date: "02/03/2024",
    time: "at 1:35pm",
    emailSent: "2,183",
    openRate: "35%",
  },
  {
    name: "Abandoned cart",
    campaign: "Automated email",
    status: "Sent",
    date: "02/03/2024",
    time: "at 1:35pm",
    emailSent: "2,183",
    openRate: "35%",
  },
  {
    name: "Discover our new app features",
    campaign: "New app launch",
    status: "Sent",
    date: "02/03/2024",
    time: "at 1:35pm",
    emailSent: "2,183",
    openRate: "35%",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-md dark:bg-gray-800 dark:shadow-lg">
      <h4 className="mb-5 text-xl font-bold text-gray-800 dark:text-white">
        Last Emails
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300">Email</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 text-center">Campaign</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 text-center">Status</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 text-center">Time</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 text-center">Email sent</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 text-center">Open rate</th>
            </tr>
          </thead>
          <tbody>
            {brandData.map((brand, key) => (
              <tr
                key={key}
                className={`${key % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                  } hover:bg-gray-100 dark:hover:bg-gray-600`}
              >
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 cursor-pointer">{brand.name}</td>
                <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300 cursor-pointer">{brand.campaign}</td>
                <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-300 cursor-pointer">{brand.status}</td>
                <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300 text-sm cursor-pointer">{brand.date} <br />{brand.time}</td>
                <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300 cursor-pointer">{brand.emailSent}</td>
                <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300 cursor-pointer">{brand.openRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
