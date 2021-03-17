import React from 'react';

import { Grid } from './styles'
import OptionsList from '../OptionsList';
import ProgrammerData from '../ProgrammerData';
import Nav from '../Nav';

const Layout: React.FC = () => {
    return (
        <Grid>
            <Nav />
            <OptionsList />
            <ProgrammerData />
        </Grid>
    );
}

export default Layout;