import React from 'react';

import { Container } from './styles';
import Input from '../Input';
import VersionRelease from '../VersionRelease';
import Script from '../Script';

const ProgrammerData: React.FC = () => {
    return (
        <Container>
            <div className="alinhamento">
                <Input caption="Programador" pwidth={264} />
                <Input caption="Caminho Projeto" pwidth={427} />
            </div>

            <div className="alinhamento">
                <VersionRelease title="Atual" />
                <VersionRelease title="Força de Vendas" />
            </div>

            <div className="alinhamento">
                <VersionRelease title="Versão Integrações" />

            </div>

            <div className="alinhamento">
                <Script title="Script" />

                <Script title="Visualização" disableField={true} />
            </div>
        </Container>
    );
}

export default ProgrammerData;