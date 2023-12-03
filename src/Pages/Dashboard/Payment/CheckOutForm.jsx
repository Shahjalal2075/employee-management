import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CheckOutForm = () => {

    const employee = useLoaderData();

    const { months } = useParams();

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);

    const [clientSecret, setClientSecret] = useState('');
    const employeeSalary = employee.salary;

    useEffect(() => {
        axios.post('https://employee-server-wine.vercel.app/create-payment-intent', { salary: employeeSalary })
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            })
    }, [employeeSalary])

    const handlePay = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            toast(error.message);
        }
        else {
            console.log(paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email,
                    name: user.displayName
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', clientSecret);
            toast(confirmError.message);
        }
        else {
            console.log('pay intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id);
                const email = employee.email;
                const month = months
                const transaction = paymentIntent.id;
                const ammount = paymentIntent.amount / 100;
                const bill = { email, month, transaction, ammount };
                fetch('https://employee-server-wine.vercel.app/payment', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(bill)
                })
                toast('Payment Successful');
            }
            else
                toast('Payment Unsuccessful');
        }
    }

    return (
        <div className="">
            <form onSubmit={handlePay}>
                <CardElement>
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                </CardElement>
                <button disabled={!stripe || !clientSecret} className="btn btn-sm btn-primary my-6" type="submit">
                    Pay
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOutForm;