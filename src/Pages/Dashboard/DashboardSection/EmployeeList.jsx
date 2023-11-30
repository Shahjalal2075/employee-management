import { useEffect, useState } from "react";
import EmployeeView from "./EmployeeView";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/Employee')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    //console.log(employees);

    

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
                            employees.map((employee, index) => <EmployeeView
                            key={employee._id}
                            employee={employee}
                            index={index}
                            ></EmployeeView>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EmployeeList;