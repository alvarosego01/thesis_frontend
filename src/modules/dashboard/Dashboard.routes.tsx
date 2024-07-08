import { FC, Suspense, lazy, useEffect } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { useAuthStore } from "../../core/store";

const Account = lazy(() => import('./pages/account/AccountPage'));
const Role = lazy(() => import('./pages/byRole/ByRolePage'));
const Notifications = lazy(() => import('./pages/notifications/NotificationsPage'));
const HiringConfig = lazy(() => import('./pages/hireConfig/HireConfigPage'));
const Contracts = lazy(() => import('./pages/contracts/ContractsPage'));

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
        path: '/contracts/*',
        element: <Contracts />
    },
    {
        path: '/hiring-config/*',
        element: <LazyComponent Component={HiringConfig} />
    },
    {
        path: '*',
        element: <Navigate to={'/dashboard/account'} />
        // element: <Public_main />
    }
];


export const Dashboard_routes: FC = () => {

    const {
        state: {
            status,
            session_isChecked
        },
        emit_checkAuthToken
    } = useAuthStore();


    useEffect(() => {
        emit_checkAuthToken();
    }, [])



    const routes = useRoutes(dashboard_routesConfig);

    return (
        <>
            {
                (session_isChecked) && (
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
        </>
    )

}
