import { menuItems } from './menuItems';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="bg-blackish">
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.text}
          Icon={menuItem.icon}
          link={menuItem.link}
          text={menuItem.text}
        />
      ))}
    </div>
  );
}

const MenuItem = ({ Icon, text, link }) => {
  const router = useRouter();
  const isActive = link === router.pathname;
  return (
    <Link href={link}>
      <a
        className={`flex  cursor-pointer relative ${
          isActive ? 'text-balNameCol' : 'text-white'
        } hover:text-balNameCol py-1 md:pt-4 mt-1`}
      >
        <Icon className="px-4 md:pl-1 md:pr-2 w-12 h-4 md:h-5 fill-current" />
        <div className="text-xs md:text-sm md:absolute md:left-0 md:ml-12">
          {text}
        </div>
      </a>
    </Link>
  );
};
