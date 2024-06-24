"use client";
import { Listbox, Transition } from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

interface props {
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
  statuses: string[];
}

const StatusListbox = ({ setFilter, filter, statuses }: props) => {
  const [selected, setSelected] = useState('#FFFFFF');

  useEffect(() => {
    if(filter === 'All'){
      setSelected('#FFFFFF')
    }else if(filter == 'Compliant' || filter == 'Evaluated'){
      setSelected('#008743')
    }else if(filter == 'Non-Compliant' || filter == 'Not-Evaluated'){
      setSelected('#F41E1E')
    }else if(filter == 'Partially Compliant'){
      setSelected('#D9A40F')
    }
  }, [filter])

  return (
    <Listbox value={filter} onChange={setFilter}>
      <div className="relative mt-1">
        <Listbox.Button className="relative h-10 min-w-44 w-full pl-2 pr-8 flex items-center gap-2.5 text-left bg-transparent border border-black/30 rounded-md">
          <span className="block w-4 h-4 rounded-full" style={{background: `${selected}`}}></span>
          <span className="block truncate">{filter}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <IoIosArrowDown
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {statuses.map((status, statusIdx) => (
              <Listbox.Option
                key={statusIdx}
                className={({ active }) =>
                  `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={status}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {status}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                      absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <FaCheck className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default StatusListbox;
