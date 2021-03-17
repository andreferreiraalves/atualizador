import React from 'react';

import { Container } from './styles';

export interface Props {
    caption: string;
}

const CheckBox: React.FC<Props> = ({
    caption
}) => {
    return (
        <Container>
            <input type="checkbox" />
            <label>{caption}</label>
        </Container>
    );
}

export default CheckBox;