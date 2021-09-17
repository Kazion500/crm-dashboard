import ButtonIcon from "@/components/atoms/ButtonIcon";
import { CogIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { UserGroupIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/outline";
import { PresentationChartLineIcon } from "@heroicons/react/outline";

export default function SideBarButtonOption() {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <ButtonIcon
        Icon={CogIcon}
        title="Settings"
        bgColor="bg-blue-300"
        routeName="settings"
      />
      <ButtonIcon Icon={HomeIcon} title="Home" bgColor="bg-blue-300" />
      <ButtonIcon
        Icon={PresentationChartLineIcon}
        title="Reports"
        bgColor="bg-blue-300"
        routeName="reports"
      />
      <ButtonIcon
        Icon={UsersIcon}
        title="Customers"
        bgColor="bg-blue-300"
        routeName="customers"
      />
      <ButtonIcon
        Icon={CogIcon}
        title="Items"
        bgColor="bg-blue-300"
        routeName="items"
      />
      <ButtonIcon
        Icon={UserGroupIcon}
        title="Team"
        bgColor="bg-blue-300"
        routeName="team"
      />
    </div>
  );
}
