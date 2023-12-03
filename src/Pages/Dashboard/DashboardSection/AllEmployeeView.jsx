import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AllEmployeeView = ({ employee, index }) => {

    const navigate = useNavigate();

    const handleMakeHr = () => {
        fetch(`https://employee-server-wine.vercel.app/users/${employee.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ verify: employee.verify, role: "HR" })
        })

        setIsHR("HR");
    }

    const [isHR, setIsHR] = useState(employee.role);

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure to Fire?',
            text: ``,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: "No",
            confirmButtonText: "Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://employee-server-wine.vercel.app/users/${employee._id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        res.json()
                    })
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Fired!',
                            `Fired Successfully`,
                            'success'
                        )
                        setTimeout(() => {
                            window.location.reload();
                        }, 1600);
                    })
            }
        })



    }



    return (
        <tr >
            <th>{index + 1}</th>
            <td>{employee.name}</td>
            <td>{isHR}</td>
            <td><button onClick={handleMakeHr} className="bg-[#2AD252] px-3 py-2 font-bold text-base rounded-xl text-white">Make HR</button></td>
            <td><button onClick={handleDelete} className="bg-[#E65B65] px-3 py-2 font-bold text-base rounded-xl text-white">Fire</button></td>
        </tr >
    );
};

export default AllEmployeeView;

AllEmployeeView.propTypes = {
    employee: PropTypes.object,
    index: PropTypes.number
}