import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from 'Pages/SearchPage';
import SalesListPage from 'Pages/SalesListPage';
import Page404 from 'Pages/404Page';

import SalePage from 'Pages/SalePage';
import { ROOT, SALES_LIST, SALE } from 'Routes/index';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROOT} element={<SearchPage />} />
            <Route path={SALES_LIST} element={<SalesListPage />} />
            <Route path={SALE()} element={<SalePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

export default App;
