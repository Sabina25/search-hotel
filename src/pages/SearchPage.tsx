import styled from 'styled-components';
import Search from 'Components/Search';

const SearchPageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

const SearchPage = () => {
    return (
        <SearchPageStyled>
            <Search />
        </SearchPageStyled>
    );
};

export default SearchPage;
