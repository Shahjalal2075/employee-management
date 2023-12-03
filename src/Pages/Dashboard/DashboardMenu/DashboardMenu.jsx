import { NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import "./DashboardMenu.css";

const DashboardMenu = ({emp}) => {

    return (
        <div className="flex lg:flex-col flex-row mb-4 justify-center items-center text-xl font-semibold bg-[#E84F74] border-2 border-[#E84F74]">
            {emp.role==='Admin'&&<NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/all-employee'}>All Employee List</NavLink>}
            {emp.role==='HR'&&<NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/employee'}>Employee List</NavLink>}
            {emp.role==='HR'&&<NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/progress'}>Progress</NavLink>}
            {emp.role==='Employee'&&<NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/payment-history'}>Payment History</NavLink>}
            {emp.role==='Employee'&&<NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/work-sheet'}>Work Sheet</NavLink>}
        </div>
    );
};

export default DashboardMenu;

DashboardMenu.propTypes = {
    emp: PropTypes.object
}