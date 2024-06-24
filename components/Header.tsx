'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GridIcons } from './incons'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import useMainStore from '@/stores/main'
import Sidebar from './common/Sidebar'

export const Header = () => {
  const store = useMainStore();

  const handleToggle = () => {
    store.setSidebarOpen(!store.sidebarOpen);
  }

  const handleClose = () => {
    store.setSidebarOpen(false);
  }

  return (
    <>
      <header className='fixed top-0 z-[999] w-full bg-white shadow-2xl'>
        {/* container */}
        <div className='max-w-[1920px] flex items-center justify-between mx-auto px-5 py-3'>
          {/* left */}
          <div className='flex items-center gap-5'>
            <button onClick={handleToggle}>
              <FiMenu className='size-8' />
            </button>
            <Link href='#'>
              <Image src={'/img/logo.png'} width={162} height={45} alt='' />
            </Link>
          </div>
          {/* right */}
          <div className='flex items-center gap-5'>
            <button className='flex items-center justify-center h-10 px-4 gap-2.5 border border-brand-blue rounded-md'>
              <GridIcons />
              <span className='text-brand-blue text-lg font-roboto'>
              Products
              </span>
            </button>
            <button>
              <IoMdNotificationsOutline className='size-6 text-brand-blue' />
            </button>
            <Menu>
              <MenuButton className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center">Z</MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl bg-white p-1 text-brand-blue transition duration-100 ease-out shadow-2xl z-[999]"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg hover:bg-brand-blue/10 py-1.5 px-3 text-black">
                    Edit
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘E</kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg hover:bg-brand-blue/10 py-1.5 px-3 text-black">
                    Duplicate
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘D</kbd>
                  </button>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg hover:bg-brand-blue/10 py-1.5 px-3 text-black">
                    Archive
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘A</kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg hover:bg-brand-blue/10 py-1.5 px-3 text-black">
                    Delete
                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘D</kbd>
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </header>
      <Sidebar />
      {store.sidebarOpen && <div onClick={handleClose} className="fixed top-0 left-0 w-full h-screen z-30 bg-black/60"></div>}
    </>
  )
}
