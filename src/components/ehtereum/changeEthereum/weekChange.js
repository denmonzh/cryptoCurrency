import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Component} from "react";


class WeekChange extends Component {
    render() {
        const {weekDataBTC} = this.props;
        return (
            <Grid className='contentContainerThisTime'>
                <Grid>
                    <Typography color={"inherit"} className='textPercent'>Week change:</Typography>
                </Grid>
                <Grid className='contentContainerPercent'>
                    <span className='percentValue'>{weekDataBTC}%</span>
                </Grid>
            </Grid>
        );
    }
}

export default WeekChange;

