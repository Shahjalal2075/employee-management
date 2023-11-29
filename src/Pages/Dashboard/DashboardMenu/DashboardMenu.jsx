import { NavLink } from "react-router-dom";
import "./DashboardMenu.css";

const DashboardMenu = () => {
    return (
        <div className="flex flex-col justify-center items-center text-xl font-semibold bg-[#E84F74] border-2 border-[#E84F74]">
            <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/all-employee'}>All Employee List</NavLink>
            <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/employee'}>Employee List</NavLink>
            <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/progress'}>Progress</NavLink>
            <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/payment-history'}>Payment History</NavLink>
            <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/work-sheet'}>Work Sheet</NavLink>
        </div>
    );
};

export default DashboardMenu;