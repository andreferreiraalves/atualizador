import React from 'react';
import { Container } from './styles';

export interface Props {
    title?: string;
    disableField?: boolean;
}

const Script: React.FC<Props> = ({
    title,
    disableField
}) => {
    return (
        <Container
            disableField={disableField}>
            <label>{title}</label>
            <textarea rows={30} cols={80} disabled={disableField} />
        </Container>
    );
}

export default Script;