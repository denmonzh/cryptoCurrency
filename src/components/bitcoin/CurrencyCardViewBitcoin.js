import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import image from './img/bitcoin.png';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import table from './img/table.png';


const SwitchView = ({...props})=>(
    <Grid className='contentContainerThisTime'>
        <Grid>
            <Typography color={"inherit"} className='textPercent'>Hour change</Typography>
        </Grid>
        <Grid className='contentContainerPercent'>
            <span className='percentValue'>22$</span>
        </Grid>
    </Grid>
);



class CurrencyCardViewBitcoin extends Component {

    constructor(props){
        super(props);
        this.state = {
            showPercent: true,
        }
    }


    render() {
        return (
            <Grid className='currBlockBitcoin'>
                <Grid className='headerCartContainer'>
                    <Grid className='backgroundCurrBlock'>
                        <span className='title'>
                            Bitcoin
                        </span>
                        <Grid className='largeImgCropper'>
                            <img src={image} alt="ethereum" />
                        </Grid>
                        <img src={table} alt="ethereum" />
                    </Grid>
                </Grid>
                <Grid className='contentContainer'>
                    <Grid style={{width:'80%'}}>
                        <Grid className='priceContainer'>
                            <Grid>
                                <span className='priceText'>
                                        Price:
                                    </span>
                            </Grid>
                            <Grid className='titlePrice'>
                                <span className='priceText'>
                                        23231231$
                                    </span>
                            </Grid>
                        </Grid>
                        <Grid className='switchContainer'>
                            <Grid>
                               <span className='textSwitch'>
                                            Percent change
                                        </span>
                            </Grid>
                            <Grid className='switchShowPercent'>
                                <Switch checked={this.state.showPercent}/>
                            </Grid>
                        </Grid>
                        <Grid>
                            <SwitchView/>
                            <SwitchView/>
                            <SwitchView/>
                            <SwitchView/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}

export default CurrencyCardViewBitcoin;