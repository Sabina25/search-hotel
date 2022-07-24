import styled from 'styled-components';

export const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-align: inherit;
    cursor: pointer;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: white;
    text-align: inherit;
    cursor: pointer;
`;

export const SpinnerBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const Message = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: white;
    font-size: 26px;
`;
