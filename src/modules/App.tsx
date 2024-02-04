
import { BrowserRouter } from 'react-router-dom'
import { App_Router } from './app.routes'


function App() {


    return (
        <>
            <BrowserRouter>
                <div className="flex h-[100dvh] overflow-hidden">

                    <App_Router />

                </div>
            </BrowserRouter>
        </>
    )
}

export default App
