import React from 'react';

import { Container } from './styles';
import Input from '../Input';

const ProgrammerData: React.FC = () => {
    return (
        <Container>
            <div>
                <Input caption="Programador" pwidth={264} />
                <Input caption="Caminho Projeto" pwidth={427} />
            </div>

            <div>
                <Input caption="Versão" pwidth={130} />
                <Input caption="Data" pwidth={170} type="date" />
                <Input caption="Release" pwidth={84} />
            </div>
        </Container>
    );
}

export default ProgrammerData;