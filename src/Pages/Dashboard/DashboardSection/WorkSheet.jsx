import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from "../../../Providers/AuthProvider";


const WorkSheet = () => {

    const { user } = useContext(AuthContext);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const bookingDate = selectedDate
        ? `${selectedDate.getMonth() + 1}`
        : 'No date selected';

    const types = [
        { name: "Sales" },
        { name: "Support" },
        { name: "Content" },
        { name: "Proper-work" },
        { name: "Project" }
    ]

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    const [selected, setSelected] = useState(types[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const type = selected.name;
        const hours = e.target.hours.value;
        const month = months[bookingDate - 1];
        const work = { name, type, hours, month }
        console.log(work);
        fetch('https://employee-server-wine.vercel.app/worksheets', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(work)
        })
        toast('Works Add Successful');
    }

    return (
        <div className="">

            <h2 className="text-center font-bold text-2xl my-6">Submit Work</h2>

            <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center" action="">

                    <Listbox className="" value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="border px-6 py-2 font-semibold text-lg text-black rounded-2xl mt-4 w-80 relative cursor-default bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
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
                                    {types.map((person, personIdx) => (
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
                    <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Hours" type="number" name="hours" required />
                    <DatePicker className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Select a date"
                    />
                    <input className="cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Submit"} />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default WorkSheet;