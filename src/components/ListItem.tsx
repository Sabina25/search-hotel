import styled from 'styled-components';

import useNav from 'Hooks/useNav';

import { Title, Text } from '../layout';

const Box = styled.div`
    display: grid;
    grid-template-columns: 100%;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;
    }
`;

const Image = styled.img`
    height: 240px;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    cursor: pointer;
`;

type Props = {
    id: string;
    destination: string;
    title: string;
    photos: { url: string };
};

const ListItem = (props: Props) => {
    const { moveToSalePage } = useNav();

    const handleShowMore = () => {
        moveToSalePage(props.id);
    };

    return (
        <Box onClick={handleShowMore}>
            <Image src={props.photos.url} alt="photo" />
            <InfoBox>
                <Title>{props.title}</Title>
                <Text>{props.destination}</Text>
            </InfoBox>
        </Box>
    );
};

export default ListItem;
