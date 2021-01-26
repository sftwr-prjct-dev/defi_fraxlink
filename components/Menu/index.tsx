import { menuItems } from "./menuItems";

export default function Menu(){
    return (
        <div>
            {menuItems.map(menuItem => <MenuItem key={menuItem.text} Icon={menuItem.icon} text={menuItem.text} />)}
        </div>
    )
}

const MenuItem = ({Icon, text}) => {
    return <div className="flex text-white cursor-pointer hover:text-balNameCol py-1 mt-1">
        <Icon className="px-4 w-16 h-4 fill-current" />
        {/* {Icon} */}
        <span className="text-xs">{text}</span>
    </div>
}