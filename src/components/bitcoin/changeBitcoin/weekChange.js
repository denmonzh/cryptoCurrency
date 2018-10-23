import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

export const weekChange = ({...props}) => (
    <Grid className='contentContainerThisTime'>
        <Grid>
            <Typography color={"inherit"} className='textPercent'>Hour change</Typography>
        </Grid>
        <Grid className='contentContainerPercent'>
            <span className='percentValue'>22$</span>
        </Grid>
    </Grid>
);