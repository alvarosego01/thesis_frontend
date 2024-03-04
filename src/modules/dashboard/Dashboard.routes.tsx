import { Suspense, lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { useAuthStore } from "../../core/store";

const Account = lazy(() => import('./pages/account/AccountPage'));
const Role = lazy(() => import('./pages/byRole/ByRolePage'));
const Notifications = lazy(() => import('./pages/notifications/NotificationsPage'));

const LazyComponent: React.FC<{ Component: React.ComponentType }> = ({ Component }) => (
    <Suspense fallback={'Loading...'}>
        <Component />
    </Suspense>
);


const dashboard_routesConfig: RouteObject[] = [
    {
        path: '/account/*',
        element: <LazyComponent Component={Account} />
    },
    {
        path: '/notifications/*',
        element: <Notifications />
    },
    {
        path: '/role/*',
        element: <Role />
    },
    {
        path: '*',
        element: <Navigate to={'/dashboard/account'} />
        // element: <Public_main />
    }
];


export const Dashboard_routes = () => {

    const {
        state: {
            status
        }
    } = useAuthStore();

    const routes = useRoutes(dashboard_routesConfig);

    return (
        <>
            {
                (status === 'authenticated') && (
                    routes
                )
            }
            {
                (status === 'not-authenticated') && (
                    <Navigate to='/' replace />
                )
            }
        </>
    )

}
