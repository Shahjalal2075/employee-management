import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Contact from '../Pages/Contact/Contact';
import AllEmployee from '../Pages/Dashboard/DashboardSection/AllEmployee';
import Progress from '../Pages/Dashboard/DashboardSection/Progress';
import EmployeeList from '../Pages/Dashboard/DashboardSection/EmployeeList';
import PaymentHistory from '../Pages/Dashboard/DashboardSection/PaymentHistory';
import WorkSheet from '../Pages/Dashboard/DashboardSection/WorkSheet';
import EmployeeDetails from '../Pages/Dashboard/DashboardSection/EmployeeDetails';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Progress></Progress>
                    },
                    {
                        path: "/dashboard/progress",
                        element: <Progress></Progress>
                    },
                    {
                        path: "/dashboard/all-employee",
                        element : <AllEmployee></AllEmployee>
                    },
                    {
                        path: "/dashboard/employee",
                        element : <EmployeeList></EmployeeList>
                    },
                    {
                        path: "/dashboard/payment-history",
                        element : <PaymentHistory></PaymentHistory>
                    },
                    {
                        path: "/dashboard/work-sheet",
                        element : <WorkSheet></WorkSheet>
                    },
                    {
                        path: "/dashboard/employee/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/users/Employee/${params.id}`),
                        element : <EmployeeDetails></EmployeeDetails>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default Routes;