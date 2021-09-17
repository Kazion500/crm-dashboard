import Link from "next/link";

function ButtonIcon({ title, Icon, bgColor,routeName='/' }) {
  return (
    <Link href={routeName}>
      <a
      className={`text-center h-20 w-16 cursor-point flex flex-col justify-center items-center`}
    >
      <div
        className={`w-full h-full ${bgColor} rounded-md mb-1 p-1 flex justify-center items-center`}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xs">{title}</h3>
    </a>
    </Link>
  
  );
}

export default ButtonIcon;
