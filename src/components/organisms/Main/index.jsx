import Divider from "@/components/atoms/Divider";
import SideBarOption from "@/components/molecules/SideBarButtonOption";
import SideBarTextOption from "@/components/molecules/SideBarTextOption";
import { XIcon } from "@heroicons/react/outline";

function Main() {
  return (
    <div className="flex h-[calc(100vh-60px)]">
      <div className="border">
        <SideBarOption />
        <Divider />
        <SideBarTextOption />
      </div>

      {/* Content */}
      <div className="flex-1 border py-10">
        <div className="w-[70%] max-w-7xl mx-auto">
          {/* Ad Section */}
          <div className="bg-indigo-400 transition-all relative px-8 py-4 rounded-lg ">
            <button className="p-3 rounded-md active:ring-white active:ring absolute cursor-pointer right-0">
              <XIcon className="w-5 h-5" />
            </button>
            <div className="my-5 text-white">
              <h3 className="font-medium">Your Subscrition is Due</h3>
              <p className="font-bold mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elitam,
                nihil ipsum perferendis necessitatibus officia?
              </p>
            </div>

            <button className="font-medium bg-white rounded-md px-7 inline-block py-2">
              Pay now
            </button>
          </div>

          <div className="flex justify-between mt-10">
            <div className="max-w-2xl">
              <h1 className="font-bold my-5 text-2xl">
                Welcome back.
                <br /> Here’s how your business looks like!
              </h1>

              <h3 className="font-semibold my-2 text-xl">Today</h3>
              <div className="flex space-x-4 border">
                <div className="flex-1">
                  <h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis, eveniet porro assumenda mollitia autem non,
                    dolor consequuntur consequatur deserunt sunt libero ab,
                    voluptatem numquam doloribus ad iste facere rem sequi.
                  </h1>
                </div>
                <div className="border flex-1">
                  <h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis, eveniet porro assumenda mollitia autem non,
                    dolor consequuntur consequatur deserunt sunt libero ab,
                    voluptatem numquam doloribus ad iste facere rem sequi.
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-72 ml-4">
              <h3 className="font-bold">Last 30 Days</h3>
              <ul className="font-light text-sm group">
                <div className="flex justify-between items-center border-b">
                  <li className="py-3">Total Customers</li>
                  <li className="py-3">300</li>
                </div>
                <div className="flex justify-between items-center border-b">
                  <li className="py-3">New Customers</li>
                  <li className="py-3">50</li>
                </div>
                <div className="flex justify-between items-center border-b">
                  <li className="py-3">Total Orders</li>
                  <li className="py-3">300</li>
                </div>
                <div className="flex justify-between items-center border-b">
                  <li className="py-3">New Orders</li>
                  <li className="py-3">20</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
