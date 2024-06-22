import useMainStore from '@/stores/main';
import React from 'react'
import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import { MdBarChart, MdStore } from 'react-icons/md';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const menu = [
  {
    id: 1,
    href: "/",
    name: "home",
    icon: <GoHomeFill className='size-7' />
  },
  {
    id: 2,
    href: "/eval",
    name: "My Eval",
    icon: <MdBarChart className='size-7' />
  },
  {
    id: 3,
    href: "/help",
    name: "Help",
    icon: <BiSolidCommentDetail className='size-7' />
  },
  {
    id: 4,
    href: "/vendor",
    name: "Vendor",
    icon: <MdStore className='size-7' />
  },
]

const Sidebar = () => {
  const store = useMainStore();
  const pathname = usePathname();

  return (
    <div className={`fixed top-16 ${store.sidebarOpen ? 'left-0' : '-left-full'} transition-all duration-500 ease-in-out z-[9999] bg-white max-w-60 h-screen w-full px-3 py-9`}>
      <ul className='flex flex-col gap-4'>
        {menu.map(item => (
          <li className='w-full group hover:bg-brand-blue/10 rounded-md cursor-pointer py-1 px-2' key={item.id}>
            <Link className={`flex items-center gap-3.5 capitalize ${pathname == item.href ? 'text-brand-blue' : 'text-brand-gray'} group-hover:text-brand-blue`} href={item.href}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar