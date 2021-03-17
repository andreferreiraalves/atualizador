import styled from 'styled-components';

export const ButtonStyle = styled.button`
    display: flex;
    width: 100px;
    
    height: 40px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;

    :hover, :active {
        background-color: var(--primary);
        transition: 0.4s;
    }

    img {
        margin-left: 4px;
        height: 25px;
        width: 25px;
    }
`;