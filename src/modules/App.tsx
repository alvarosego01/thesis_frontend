
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes';


import "../core/components/GeneralComponents.styles.sass"

const App = () => {

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )

}

export default App
