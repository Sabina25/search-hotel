import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListItem from 'Components/ListItem';

import { Sale } from 'Types/taks-type';
import { useParams } from '../hooks/useParams';
import { request } from '../api';

import { searchRequests } from '../api/requests';

const Box = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    gap: 30px;
    margin: 0 auto;
    padding: 40px 20px 60px;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: white;
`;

const EmptyPage = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: white;
    font-size: 26px;
`;

const Back = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: gray;
    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ListPage = () => {
    const [resultCount, setResultCount] = useState<number>(0);
    const [sales, setSales] = useState<Sale[] | null>(null);
    const [notResult, setNotResult] = useState<boolean>(false);
    const { query } = useParams();

    const navigate = useNavigate();
    const moveToBack = () => {
        navigate({
            pathname: '/',
        });
    };

    useEffect(() => {
        if (query) {
            request(searchRequests, { query }).then((res) => {
                setSales(res.data.saleSearch.sales);
                setResultCount(res.data.saleSearch.resultCount);
            });
        }
    }, [query]);

    useEffect(() => {
        if (Number(resultCount) === 0) {
            setNotResult(true);
        }
    }, [resultCount]);

    return (
        <Box>
            <Row>
                <Back onClick={moveToBack}>Go to search page</Back>
                <Text>Total: {resultCount}</Text>
            </Row>
            {sales &&
                sales.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            title={item.editorial.destinationName}
                            destination={item.editorial.title}
                            photos={item.photos[0]}
                        />
                    );
                })}
            {notResult && <EmptyPage>No results were found for &quot;{query}&quot;.</EmptyPage>}
        </Box>
    );
};

export default ListPage;
