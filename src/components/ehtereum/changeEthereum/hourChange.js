import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Component} from "react";


class HourChange extends Component {
    render() {
        const {hourDataBTC} = this.props;
        return (
            <Grid className='contentContainerThisTime'>
                <Grid>
                    <Typography color={"inherit"} className='textPercent'>Hour change:</Typography>
                </Grid>
                <Grid className='contentContainerPercent'>
                    <span className='percentValue'>{hourDataBTC}%</span>
                </Grid>
            </Grid>
        );
    }
}

export default HourChange;