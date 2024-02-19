

// export const App_Router = () => {
//     return (
//         <Routes>

//             <Route path='/dashboard/*' element={<Dashboard_main />} />
//             <Route path='/*' element={<Public_main />} />

//         </Routes>

//     )
// }



import { useRoutes } from 'react-router-dom';
import { app_routesConfig } from './Routes';


export const AppRoutes = () => {

    const routes = useRoutes(app_routesConfig);
    return <>{routes}</>;
};
