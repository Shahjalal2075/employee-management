import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeView = ({ employee, index }) => {

    const verifyUser = () => {
        fetch(`http://localhost:5000/users/${employee.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ verify: !isVerify})
        })

        setIsVerify(!isVerify);
    }
    const [isVerify, setIsVerify] = useState(employee.verify);

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td><button onClick={verifyUser}>{isVerify ? <img className="w-8" src="https://i.ibb.co/dJqs5tT/check.png" alt="" /> : <img className="w-8" src="https://i.ibb.co/1G71M4K/cross.png" alt="" />}</button></td>
            <td>{employee.accountNo}</td>
            <td>{employee.salary}</td>
            <td>{isVerify?<button className="bg-[#2AD252] px-3 py-2 font-bold text-base rounded-xl text-white">Pay</button>:<button className="bg-[#707270] px-3 py-2 font-bold text-base rounded-xl text-white" disabled>Pay</button>}</td>
            <td><Link to={`/dashboard/employee/${employee._id}`} className="bg-[#7054DC] px-3 py-2 font-bold text-base rounded-xl text-white">Details</Link></td>
        </tr>
    );
};

export default EmployeeView;

EmployeeView.propTypes = {
    employee: PropTypes.object,
    index: PropTypes.number
}