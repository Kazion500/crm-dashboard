import {
  BellIcon,
  ChatAltIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function Header({title='Home'}) {
  return (
    <div className="py-1 flex justify-between cursor-pointer items-center shadow-md">
      <button className="flex items-center p-3 w-60 rounded-md hover:bg-gray-100">
        <MenuIcon className="w-7 h-7" />
        <span className="ml-4">{title}</span>
      </button>

      <div>logo</div>

      <div className="self-end flex ml-0">
        <button className="cursor-pointer p-3 hover:bg-gray-100 rounded-md">
          <SearchIcon className="w-6 h-7" />
        </button>
        <button className="cursor-pointer p-3 hover:bg-gray-100 rounded-md">
          <ChatAltIcon className="w-7 h-7" />
        </button>
        <button className="cursor-pointer  p-3 hover:bg-gray-100 rounded-md">
          <BellIcon className="w-7 h-7" />
        </button>
        <button className="cursor-pointer  py-3 px-6  inline-block hover:bg-gray-100 rounded-md">
          <h4>Patrick Kabwe</h4>
        </button>
      </div>
    </div>
  );
}

export default Header;
