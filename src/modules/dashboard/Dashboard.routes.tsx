import { Suspense, lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

const Account = lazy(() => import('./pages/account/AccountPage'));
const Notifications = lazy(() => import('./pages/notifications/NotificationsPage'));


// const routes: Route_I[] = [
//     {
//         to: '/account/*',
//         path: '/account',
//         // Component: Account,
//         Component: AccountPage,
//         name: 'Cuenta'
//     },
//     {
//         to: '/notifications/*',
//         path: '/notifications',
//         // Component: Notifications,
//         Component: NotificationsPage,
//         name: 'Notificaciones'
//     },

// ]


const LazyComponent: React.FC<{ Component: React.ComponentType }> = ({ Component }) => (
    <Suspense fallback={'Loading...'}>
        <Component />
    </Suspense>
);


export const dashboard_routesConfig: RouteObject[] = [
    {
        path: '/account/*',
        element: <LazyComponent Component={Account} />
    },
    {
        path: '/notifications/*',
        element: <Notifications />
    },
     {
        path: '*',
        element: <Navigate to={'/dashboard/account'}  />
        // element: <Public_main />
    }
];


export const Dashboard_routes = () => {

    const routes = useRoutes(dashboard_routesConfig);
    return <>{routes}</>;


}
