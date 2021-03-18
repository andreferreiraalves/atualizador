import React from 'react';

import { Container } from './styles';
import Input from '../Input';

export interface Props {
    title: string;
}

const VersionRelease: React.FC<Props> = ({
    title
}) => {
    return (
        <div>
            <Container>
                <label className="title">{title}</label>
                <div className="box">
                    <Input caption="Versão" pwidth={130} />
                    <Input caption="Versão" pwidth={170} type="date" />
                    <Input caption="Release" pwidth={84} />

                </div>
            </Container>

        </div>
    );
}

export default VersionRelease;