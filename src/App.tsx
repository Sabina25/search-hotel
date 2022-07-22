import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import ListPage from 'Pages/ListPage';
import Page404 from 'Pages/404Page';

import SalePage from 'Pages/SalePage';
import { ROOT, SEARCH, SALE } from 'Routes/index';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROOT} element={<HomePage />} />
            <Route path={SEARCH} element={<ListPage />} />
            <Route path={SALE} element={<SalePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

export default App;
