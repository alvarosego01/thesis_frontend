
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';

import { core_store } from '../core/store';
import { envs } from '../core/config/envs';

const App = () => {

    return (
        <Provider store={core_store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    )

}

export default App
