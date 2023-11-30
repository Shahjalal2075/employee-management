import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu/DashboardMenu";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="">
                <DashboardMenu></DashboardMenu>
            </div>
            <div className="col-span-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;