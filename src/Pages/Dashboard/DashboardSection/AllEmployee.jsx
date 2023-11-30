import { useEffect, useState } from "react";

const AllEmployee = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/HR/Employee/Admin')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <div>
            <h2 className="text-center font-bold text-2xl">All Employee List</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Make HR</th>
                            <th>Fire</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map((employee, index) => <tr key={employee._id}>
                                <th>{index + 1}</th>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td><button className="bg-[#2AD252] px-3 py-2 font-bold text-base rounded-xl text-white">Make HR</button></td>
                                <td><button className="bg-[#E65B65] px-3 py-2 font-bold text-base rounded-xl text-white">Fire</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllEmployee;