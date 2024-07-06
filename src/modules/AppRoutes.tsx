



import { useRoutes } from 'react-router-dom';
import { app_routesConfig } from './Routes';


export const AppRoutes = () => {

    const routes = useRoutes(app_routesConfig);
    return <>{routes}</>;
};
