import { useEffect, useState } from "react";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Progress = () => {

    const [works, setWorks] = useState([]);

    const [isFilter, setIsFilter] = useState(false);

    const handleFilter = () => {
        setIsFilter(!isFilter);
    }

    const handleSearch = () => {
        setIsFilter(!isFilter);
    }

    useEffect(() => {
        fetch('http://localhost:5000/worksheets')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, []);

    const employeeName = [
        { name: "Mullah Mohammad Shahjalal" },
        { name: "Md Shahjalal" },
        { name: "Shah Jalal" },
        { name: "Shah Alam" },
        { name: "Shah Poran" },
        { name: "Shah Jaman" },
        { name: "ShahPoran Shah" }
    ]

    const month = [
        { name: "January" },
        { name: "February" },
        { name: "March" },
        { name: "April" },
        { name: "May" },
        { name: "June" },
        { name: "July" },
        { name: "August" },
        { name: "September" },
        { name: "October" },
        { name: "November" },
        { name: "December" }
    ]

    const [selectedName, setSelectedName] = useState(employeeName[0]);
    const [selectedMonth, setSelectedMonth] = useState(month[0]);

    return (
        <div>
            <h2 className="text-center font-bold text-2xl my-6">Employee Progress Report</h2>
            {
                isFilter ?
                    <div className="flex justify-between mx-10 pb-60">
                        <Listbox className="" value={selectedName} onChange={setSelectedName}>
                            <div className="relative mt-1">
                                <Listbox.Button className="border px-6 py-2 font-semibold text-lg text-black rounded-2xl mt-4 w-80 relative cursor-default bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{selectedName.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
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
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {employeeName.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                        <Listbox className="" value={selectedMonth} onChange={setSelectedMonth}>
                            <div className="relative mt-1">
                                <Listbox.Button className="border px-6 py-2 font-semibold text-lg text-black rounded-2xl mt-4 w-80 relative cursor-default bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{selectedMonth.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
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
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {month.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                        <button onClick={handleSearch} className="cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-52">Search</button>
                    </div>
                    :
                    <div className="flex justify-end mx-10">
                        <button onClick={handleFilter} className="cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-52">Filter</button>
                    </div>
            }
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Work type</th>
                            <th>Work Hours</th>
                            <th>Month</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            works.map((work, index) => <tr key={work._id}>
                                <th>{index + 1}</th>
                                <td>{work.name}</td>
                                <td>{work.type}</td>
                                <td>{work.hours}</td>
                                <td>{work.month}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Progress;