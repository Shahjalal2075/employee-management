import { useEffect, useState } from "react";
import AllEmployeeView from "./AllEmployeeView";
import axios from "axios";

const AllEmployee = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('https://employee-server-wine.vercel.app/users/HR/Employee/Admin',{withCredentials: true})
        .then(res=>{
            setEmployees(res.data);
        })
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
                            employees.map((employee, index) => <AllEmployeeView
                            key={employee._id}
                            employee={employee}
                            index={index}
                            ></AllEmployeeView>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllEmployee;