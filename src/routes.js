import DashbaordPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import TicketsPage from "./pages/TicketsPage";
import { LOGIN_ROUTE, DASHBOARD_ROUTE, TICKETS_ROUTE } from "./utils/constants";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: (props) => <LoginPage {...props} />,
    }
];

export const privateRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: (props) => <DashbaordPage {...props} />,
    },
    {
        path: TICKETS_ROUTE,
        Component: (props) => <TicketsPage {...props} />,
    }
]