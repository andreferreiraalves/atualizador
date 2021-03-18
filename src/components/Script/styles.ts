import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div <Props>`
    display: flex;
    flex-direction: column;

    textarea {
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;

        background-color: ${props => props.disableField && 'var(--disabled)'};
    }
`;