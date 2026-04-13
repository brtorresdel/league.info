import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '../Layout';
import { Home } from '../pages/Home';
import { ChampInfo } from '../pages/ChampInfo';
import { LanguageProvider } from '../components/Context/LanguageContext';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';


export default function AppRouter() {
    return (
        <>
            <HelmetProvider>
                <BrowserRouter>
                    <LanguageProvider>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path='home' element={<Home />} />
                                <Route path='champion/:champId' element={<ChampInfo />} />
                                <Route path='*' element={<NotFoundPage/>} />
                            </Route>
                        </Routes>
                    </LanguageProvider>
                </BrowserRouter>
            </HelmetProvider>
        </>
    )
}