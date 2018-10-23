import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Component} from "react";


class DayChange extends Component {
    render() {
        const {dayDataBTC} = this.props;
        return (
                <Grid className='contentContainerThisTime'>
                    <Grid>
                        <Typography color={"inherit"} className='textPercent'>Day change:</Typography>
                    </Grid>
                    <Grid className='contentContainerPercent'>
                        <span className='percentValue'>{dayDataBTC}%</span>
                    </Grid>
                </Grid>
        );
    }
}

export default DayChange;


