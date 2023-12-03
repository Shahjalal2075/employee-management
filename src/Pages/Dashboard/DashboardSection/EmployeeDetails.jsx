import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EmployeeDetails = () => {

    const employee = useLoaderData();

    /*useEffect(() => {
        fetch(`https://employee-server-wine.vercel.app/salary/${employee.email}`)
            .then(res => res.json())
            .then(d => {
                for (let i = 0; ; i++) {
                    if (d[i] === undefined)
                        break;
                    const temp = {name: d[i].month,month: d[i].ammount}
                    data.push(temp);
                }
            })
    }, [employee.email]);*/

    const data = [
        {
            name: 'May 23',
            month: 20000,
        },
        {
            name: 'Jun 23',
            month: 25000
        },
        {
            name: 'Jul 23',
            month: 30000
        },
        {
            name: 'Aug 23',
            month: 35000
        },
        {
            name: 'Sep 23',
            month: 40000
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center">
            {
                employee.photoURL ? <img className="mask mask-circle w-52" src={employee.photoURL} /> : <img className="mask mask-circle w-52" src="https://i.ibb.co/0rcvLrD/users.png" />
            }

            <h2 className="font-bold text-2xl my-6">Name: {employee.name}</h2>
            <h2 className="font-bold text-2xl mb-6">Email: {employee.email}</h2>

            <div className="my-10">
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={40}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="0 3" />
                    <Bar dataKey="month" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default EmployeeDetails;