import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'



//const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
//const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {

    const role = [
        { name: 'Employee' },
        { name: 'HR' },
        { name: 'Admin' },
    ]

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selected, setSelected] = useState(role[0]);



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const accountNo = e.target.account_no.value;
        const salary = e.target.salary.value;
        const designation = e.target.designation.value;
        const password = e.target.password.value;
        const role = selected.name;
        //const profile = {image: data.image[0]}
        console.log(name + " " + email + " " + role);
        const user = { name, email, accountNo, salary, designation, role }

        if (password.length < 6) {
            toast("Password is less than 6 characters.");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast("Password don't have a capital letter");
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            toast("Password don't have a special character");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                toast("User Create Succsessfully.");

                updateProfile(result.user, {
                    displayName: name,
                })
                    .then()
                    .catch()

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })

                setTimeout(() => {
                    navigate("/");
                }, 1600);
            })
            .catch(error => {
                console.error(error);
                toast(error.message);
            })
    }

    return (
        <div className="grid lg:grid-cols-5 grid-cols-2">

            <div className=" col-span-2 flex flex-col items-center justify-center">

                <h2 className="text-4xl mt-8 font-bold">Create Account</h2>
                <p className="text-base font-medium mt-6 mb-4">Please Enter Your Details</p>
                {/*<button onClick={handleGoogleSignin} className="border-[#38C6D1] border-2 px-6 py-1 rounded-2xl text-xl font-semibold my-6 w-80 flex justify-center items-center gap-4">
                    <img className="w-6" src="https://i.ibb.co/5kpQLKC/google.png" alt="Google" />
                    Log In with Google
                </button>
                <div className="flex gap-4 items-center">
                    <hr className="w-20" />
                    <p>or</p>
                    <hr className="w-20" />
    </div>*/}
                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handleRegister} className="flex flex-col justify-center items-center" action="">
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Full Name" type="text" name="name" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Bank Account Number" type="text" name="account_no" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Salary" type="text" name="salary" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Designation" type="text" name="designation" required />
                        <input className="h-10 rounded-2xl mt-4 file-input file-input-bordered  w-full max-w-xs" type="file" name="image" />

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
                                        {role.map((person, personIdx) => (
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
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Password" type="password" name="password" required />
                        <input className="cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Register"} />
                    </form>
                    <Link to={"/login"} className="text-base font-bold text-black">Allready Have An Account? Login Now</Link>
                </div>
                <ToastContainer />

            </div>
            <div className="flex justify-center items-center col-span-3">
                <img className="w-3/4" src="https://i.ibb.co/hczH6xT/hotelentry.png" alt="" />
            </div>
        </div>
    );
};

export default Register;