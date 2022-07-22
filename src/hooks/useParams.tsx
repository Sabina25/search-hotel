import { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useParams = <T extends object>(): T => {
    const { search } = useLocation();
    // @ts-ignore
    return useMemo<T>(() => queryString.parse(search), [search]);
};
