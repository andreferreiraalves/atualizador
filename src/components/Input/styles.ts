import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    
    width: ${props => props.pwidth + 'px' ?? '100px'};

    input {
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 3px;
        height: 38px;
        font-size: 20px;
    }

    label {
        margin-left: 4px;
        margin-bottom: 3px
    }
`;