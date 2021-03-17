import React from 'react';

import { Grid } from './styles'
import OptionsList from '../OptionsList';
import Nav from '../Nav';

const Layout: React.FC = () => {
    return (
        <Grid>
            <Nav />
            <OptionsList />
        </Grid>
    );
}

export default Layout;