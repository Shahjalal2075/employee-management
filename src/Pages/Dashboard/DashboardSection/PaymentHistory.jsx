import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const PaymentHistory = () => {

    const [payments, setPayments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://employee-server-wine.vercel.app/salary/${user.email}`)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [user.email]);

    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Month</th>
                            <th>Amount</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.month}</td>
                                <td>{payment.ammount}</td>
                                <td>{payment.transaction}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;