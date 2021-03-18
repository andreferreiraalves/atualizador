import React from 'react';

import { Grid } from './styles'
import OptionsList from '../components/OptionsList';
import ProgrammerData from '../components/ProgrammerData';
import Nav from '../components/Nav';

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