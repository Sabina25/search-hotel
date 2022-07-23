import styled from 'styled-components';

const SpinnerBox = styled.div`
    z-index: 45;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #9a7fcb rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);
    animation: spin 0.8s ease infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(359deg);
        }
    }
`;

const Spinner = () => {
    return <SpinnerBox />;
};

export default Spinner;
