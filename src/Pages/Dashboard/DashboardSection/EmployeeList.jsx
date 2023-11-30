import { useEffect, useState } from "react";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Employee List</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Bank Account</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map((employee,index) => <tr key={employee._id}>
                                <th>{index+1}</th>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td><button><img className="w-8" src="https://i.ibb.co/dJqs5tT/check.png" alt="" /></button></td>
                                <td>{employee.accountNo}</td>
                                <td>{employee.salary}</td>
                                <td><button className="bg-[#2AD252] px-3 py-2 font-bold text-base rounded-xl text-white">Pay</button></td>
                                <td><button className="bg-[#7054DC] px-3 py-2 font-bold text-base rounded-xl text-white">Details</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EmployeeList;