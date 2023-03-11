import { useCallback, useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { SALES_LIST } from 'Routes/index';

const SearchStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: white;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    min-width: 350px;
    padding: 10px 15px;
    border: 1px solid white;
    border-radius: 4px;
    background: transparent;
    color: white;
`;

const Button = styled.button`
    padding: 10px 10px;
    font-size: 12px;
    font-weight: 500;
    color: black;
    background: #abcdef;
    border-radius: 4px;
    cursor: pointer;

    &:hover:enabled {
        background: #6495ed;
        color: #efefef;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const Search = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.trim());
    };

    const handleRunSearch = useCallback(() => {
        navigate({
            pathname: SALES_LIST,
            search: createSearchParams({
                query: searchValue,
            }).toString(),
        });
    }, [navigate, searchValue]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && searchValue.length !== 0) {
                handleRunSearch();
            }
        },
        [handleRunSearch, searchValue]
    );

    return (
        <SearchStyled>
            <Title>Enter the name of the city</Title>
            <InputWrapper>
                <Input
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputSearch}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={handleRunSearch} disabled={searchValue.length === 0}>
                    SEARCH
                </Button>
            </InputWrapper>
        </SearchStyled>
    );
};

export default Search;
