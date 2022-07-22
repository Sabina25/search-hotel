import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { SaleType } from 'Types/taks-type';
import { useEffect, useState } from 'react';
import { request } from 'Api/index';
import { saleRequest } from 'Api/requests';
import { Row } from 'Pages/ListPage';

const Box = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    gap: 30px;
    margin: 40px auto;
    padding: 40px 20px;
    border: 1px solid gray;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @media (min-width: 1024px) {
        padding: 40px;
    }
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-align: inherit;
`;

const Typography = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: white;
    text-align: inherit;
`;

const Image = styled.img`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;

const Info = styled.div`
    text-align: inherit;
`;

const Back = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: gray;
    cursor: pointer;
`;

const SalePage = () => {
    const [sale, setSale] = useState<SaleType | null>(null);

    const { id } = useParams();

    const navigate = useNavigate();
    const moveToBack = () => {
        navigate({
            pathname: '/',
        });
    };

    useEffect(() => {
        if (id) {
            request(saleRequest, { saleId: id }).then((res) => {
                setSale({
                    title: res.data.sale.editorial.title,
                    details: res.data.sale.editorial.hotelDetails,
                    destination: res.data.sale.editorial.destinationName,
                    photo: res.data.sale.photos[0],
                    price: res.data.sale.prices.leadRate.forDisplay,
                });
            });
        }
    }, []);

    return (
        <Box>
            {sale ? (
                <>
                    <Back onClick={moveToBack}>Go to search page</Back>
                    <Title>{sale.title}</Title>
                    <Info dangerouslySetInnerHTML={{ __html: sale.details }} />
                    <Row>
                        <Typography>{sale.destination}</Typography>
                        <Typography>Price: {sale.price}</Typography>
                    </Row>
                    <Image src={sale.photo.url} alt="photo" />
                </>
            ) : (
                <Title>Hotel not selected!</Title>
            )}
        </Box>
    );
};

export default SalePage;
