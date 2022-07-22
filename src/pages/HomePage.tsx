import styled from 'styled-components';
import Search from 'Components/Search';

const HomePageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px;
`;

const HomePage = () => {
    return (
        <HomePageStyled>
            <Search />
        </HomePageStyled>
    );
};

export default HomePage;
