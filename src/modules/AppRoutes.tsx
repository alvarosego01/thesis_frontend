

import { useLocation, useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { app_routesConfig } from './Routes';
import { useNavigationStore } from '../core/store/hooks/useNavigationStore';

export const AppRoutes = () => {

    const {
        emit_setPageNavigation
    } = useNavigationStore();

    const [isMounted, setisMounted] = useState(false)

    const location = useLocation();

    useEffect(() => {
        // if (isMounted === false) return;
        emit_setPageNavigation(location.pathname);

    }, [location.pathname])

    useEffect(() => {
        setisMounted(true)
    }, [])

    const routes = useRoutes(app_routesConfig);
    return <>{routes}</>;

};
