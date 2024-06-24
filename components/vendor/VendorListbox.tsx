'use client'
import { Listbox } from '@headlessui/react';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const vendors = [
  { name: 'Vendor' },
  { name: 'Aretec' },
  { name: 'Precision' },
  { name: 'Search' },
  { name: 'PensDown' },
];

const VendorListbox = () => {
  const [selectedVendor, setSelectedVendor] = useState(vendors[0]);
  return (
    <div className="w-32">
      <Listbox value={selectedVendor} onChange={setSelectedVendor}>
        <div className="relative">
          <Listbox.Button className="relative group w-full flex items-center justify-between bg-brand-blue h-11 font-roboto text-white font-medium hover:bg-transparent hover:text-brand-blue transition-all ease-in-out duration-300 border border-brand-blue rounded-lg px-4">
            <span className="block truncate">{selectedVendor.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown className="size-6 text-white group-hover:text-brand-blue" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-[999] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-28 ring-1 scroll">
            {vendors.map((vendor, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                  }`
                }
                value={vendor}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-sm text-black/85`}
                    >
                      {vendor.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <FaCheck className="size-3" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default VendorListbox