import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '../Layout';


export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Layout />}>


                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}