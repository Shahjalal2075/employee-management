import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Link} from 'react-router-dom';

const month = [
    { name: "Select Month" },
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

const EmployeeView = ({ employee, index }) => {

    const [selectedMonth, setSelectedMonth] = useState(month[0]);


    const verifyUser = () => {
        fetch(`http://localhost:5000/users/${employee.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ verify: !isVerify, role: employee.role })
        })

        setIsVerify(!isVerify);
    }
    const [isVerify, setIsVerify] = useState(employee.verify);


    const mId=`my_modal_${index+1}`;

    const handleOpenModal = () => {
        document.getElementById(mId).showModal();
    }




    return (
        <tr>
            <th>{index + 1}</th>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td><button onClick={verifyUser}>{isVerify ? <img className="w-8" src="https://i.ibb.co/dJqs5tT/check.png" alt="" /> : <img className="w-8" src="https://i.ibb.co/1G71M4K/cross.png" alt="" />}</button></td>
            <td>{employee.accountNo}</td>
            <td>{employee.salary}</td>
            <td>
                {isVerify ? <button onClick={() => handleOpenModal()} className="bg-[#2AD252] px-3 py-2 font-bold text-base rounded-xl text-white">Pay</button> : <button className="bg-[#707270] px-3 py-2 font-bold text-base rounded-xl text-white" disabled>Pay</button>}
                <dialog id={mId} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl text-center">Are you sure to send salary?</h3>
                        <div className="flex justify-between items-center mt-2">
                            <p className='font-bold text-xl mt-2'>Salary: {employee.salary}</p>
                            <Listbox className="" value={selectedMonth} onChange={setSelectedMonth}>
                                <div className="relative">
                                    <Listbox.Button className="border px-6 py-2 font-semibold text-lg text-black rounded-2xl mt-4 w-60 relative cursor-default bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                        <Listbox.Options className="absolute mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
                        </div>
                        <div className="flex justify-between mt-6">
                            {
                                (selectedMonth === month[0]) ? <Link className='px-3 py-2 bg-[#2AD252] text-white font-bold rounded-xl'>Pay</Link> : <Link to={`/dashboard/employee/payment/${employee._id}/${selectedMonth.name}`} className='px-3 py-2 bg-[#2AD252] text-white font-bold rounded-xl'>Pay</Link>
                            }
                            <form method="dialog">
                                <button className="px-3 py-2 bg-[#E54E60] text-white font-bold rounded-xl">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>
            <td>
                <Link to={`/dashboard/employee/${employee._id}`} className="bg-[#7054DC] px-3 py-2 font-bold text-base rounded-xl text-white">Details</Link>
            </td>
        </tr>
    );
};

export default EmployeeView;

EmployeeView.propTypes = {
    employee: PropTypes.object,
    index: PropTypes.number
}