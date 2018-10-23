import {BTC_FETCH, LTC_FETCH, ETH_FETCH} from "../action/types";

const initialState = {
    dataBTC: [],
    dataETH: [],
    dataLTC: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case BTC_FETCH:
            return {
                dataBTC: action.payload
            };
        default:
            return state
    }
}


