import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/verify/${user.email}`, { withCredentials: true })
            .then(res => {
                setEmployee(res.data);
            })
    }, [user.email]);

    return (
        <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="">
                {
                    employee.map(emp=><DashboardMenu key={emp._id} emp={emp}></DashboardMenu>)
                }
            </div>
            <div className="lg:col-span-4 mx-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;