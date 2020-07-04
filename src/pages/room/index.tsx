import * as React from 'react';
import {Grid , Paper} from '@material-ui/core'

export interface PageProps {
    
}
 
const Page: React.SFC<PageProps> = () => {
    return ( <Grid container>
        <Grid item md={4} xs={false} />
        <Grid item md={4} xs={12} >
            <Paper>
                <h2>Players</h2>
                

            </Paper>

            </Grid>
        <Grid item md={4} xs={false} />

    </Grid> );
}
 
export default Page;