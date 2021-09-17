import Table from "@/components/molecules/Table";
import Header from "@/components/organisms/Header";
import { SearchIcon } from "@heroicons/react/outline";

export default function CustomersPage() {
  return (
    <div>
      <Header title="Customers" />
      <div className="flex my-5">
        <div className="w-72">
          <button className="p-4 text-left cursor-pointer inline-block w-full bg-gray-100">
            All Customers
          </button>
        </div>
        {/* First Header */}
        <div className="mx-6 flex-1">
          <div className="flex justify-between items-center">
            <div className="border flex items-center px-4 py-3 rounded-md ">
              <SearchIcon className="w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none "
              />
            </div>

            <div className="space-x-3 text-sm">
              <a
                href="/import-customers"
                className="p-4 bg-gray-100 rounded-md"
              >
                Import Customers
              </a>
              <a
                href="/export-customers"
                className="p-4 bg-gray-100 rounded-md"
              >
                Export Customers
              </a>
              <button className="p-4 text-yellow-400 bg-gray-100 rounded-md">
                Create Customers
              </button>
            </div>
          </div>

          {/* Second Header */}
          <div className="flex justify-between items-center my-5">
            <h3>300 Total Customers</h3>
            <button className="py-2 px-10 border rounded-md cursor-pointer">
              Filter
            </button>
          </div>
          {/* Table */}

          <div className="relative">
            <Table />
            <div className="w-96 border absolute translate-x-[1500px] transition">
              <div>Here</div>
              <div>Here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
