import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {

    const employee = useLoaderData();
    const { months } = useParams();

    const [isPayment, setIsPayment] = useState(true);

    useEffect(() => {
        fetch(`https://employee-server-wine.vercel.app/salary/${employee.email}`)
            .then(res => res.json())
            .then(data => {
                for (let i = 0; ; i++) {
                    if (data[i] === undefined)
                        break;
                    if (data[i].month === months)
                        setIsPayment(false)
                }
            })
    }, [employee.email,months])


    return (
        <div>
            <h2 className="twxt-2xl text-center font-bold">Payment </h2>
            {
                isPayment ?
                    <div className="">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm></CheckOutForm>
                        </Elements>
                    </div>
                    :
                    <div className="">
                        <h2 className="text-center font-bold text-3xl my-24">Allready Payment This Month.</h2>
                    </div>
            }
        </div>
    );
};

export default Payment;