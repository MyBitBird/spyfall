import * as React from 'react';
import {Grid , Paper} from '@material-ui/core'
import useRoom from './../../hooks/room/useRoom';

export interface PageProps {
    
}
 
const Page: React.SFC<PageProps> = () => {
    
    const room = useRoom();
    return ( <Grid container>
        <Grid item md={4} xs={false} />
        <Grid item md={4} xs={12} >
            <Paper>
                <h2>Players</h2>
                <label>{room?._id }</label> <br />
                <label>{room?.code }</label><br />
                <label>{room?.playerId }</label><br />

            </Paper>

            </Grid>
        <Grid item md={4} xs={false} />

    </Grid> );
}
 
export default Page;