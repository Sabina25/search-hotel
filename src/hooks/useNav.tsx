import { useNavigate as useRouterNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROOT, SALE } from 'Routes/index';

const useNav = () => {
    const navigate = useRouterNavigate();

    const moveToSearchPage = useCallback(() => {
        navigate({
            pathname: ROOT,
        });
    }, [navigate]);

    const moveToSalePage = useCallback(
        (id: string) => {
            navigate({
                pathname: SALE(id),
            });
        },
        [navigate]
    );

    return { moveToSearchPage, moveToSalePage };
};

export default useNav;
