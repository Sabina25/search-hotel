import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 72px;
    max-width: 500px;
    margin: auto auto;
    border-radius: 4px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: white;
    padding-bottom: 8px;
`;

const Input = styled.input.attrs(() => ({
    type: 'search',
}))`
    width: 100%;
    height: 40px;
    margin-top: 1px;
    padding: 10px 15px;
    border: 1px solid white;
    border-radius: 4px;
    background: transparent;
    color: white;
`;

const Button = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: black;
    background: #abcdef;
    border-radius: 0 4px 4px 0;
    user-select: none;
    &:hover {
        background: #6495ed;
    }
`;

const Message = styled.p`
    position: absolute;
    bottom: -24px;
    left: 10px;
    font-size: 14px;
    font-weight: 500;
    color: red;
`;

let timerId;

const Search = () => {
    const [value, setValue] = useState('');
    const [enterWordMessage, setEnterWordMessage] = useState(false);

    const navigate = useNavigate();
    const goToResult = () => {
        navigate({
            pathname: 'search',
            search: createSearchParams({
                query: value,
            }).toString(),
        });
    };

    const handleChange = (e) => {
        setValue(e.target.value.trim());
    };

    const handleClick = useCallback(() => {
        if (value.length === 0) {
            setEnterWordMessage(true);
        } else {
            goToResult();
        }
    }, [value]);

    useEffect(() => {
        if (enterWordMessage) {
            timerId = setTimeout(() => setEnterWordMessage(false), 3000);
        }

        return () => clearTimeout(timerId);
    }, [enterWordMessage]);

    return (
        <InputBox>
            <Text>Enter the name of the city</Text>
            <Input name="search" placeholder="Search..." value={value} onChange={handleChange} />
            <Button onClick={handleClick}>SEARCH</Button>
            {enterWordMessage && <Message>Enter the name of the city in the search box</Message>}
        </InputBox>
    );
};

export default Search;
