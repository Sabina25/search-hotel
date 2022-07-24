import styled from 'styled-components';
import { useEffect, useState } from 'react';

import ListItem from 'Components/ListItem';
import Spinner from 'Components/Spinner';

import { Sale } from 'Types/taks-type';
import { useParams } from 'Hooks/useParams';
import { request } from 'Api/index';
import { searchRequests } from 'Api/requests';
import useNav from 'Hooks/useNav';
import { SpinnerBox, Message } from '../layout';

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

const Back = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: gray;
    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SalesListPage = () => {
    const { query } = useParams();

    const [resultCount, setResultCount] = useState<number>(0);
    const [sales, setSales] = useState<Sale[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    const [error, setError] = useState(false);

    const { moveToSearchPage } = useNav();

    useEffect(() => {
        if (query) {
            request(searchRequests, { query })
                .then((res) => {
                    setError(false);
                    setLoader(false);
                    setSales(res.data.saleSearch.sales);
                    setResultCount(res.data.saleSearch.resultCount);
                })
                .catch((e) => {
                    setError(true);
                    setLoader(false);
                    console.log(`${e.name}: ${e.message}`);
                });
        }
    }, [query]);

    return (
        <Box>
            <Row>
                <Back onClick={moveToSearchPage}>Go to search page</Back>
                {!error && <Text>Total: {resultCount}</Text>}
            </Row>
            {sales.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.editorial.destinationName}
                    destination={item.editorial.title}
                    photos={item.photos[0]}
                />
            ))}
            {loader && (
                <SpinnerBox>
                    <Spinner />
                </SpinnerBox>
            )}
            {!loader && resultCount === 0 && !error && <Message>{`No results were found for "${query}"`}</Message>}
            {error && <Message>Sorry! Something went wrong.</Message>}
        </Box>
    );
};

export default SalesListPage;
