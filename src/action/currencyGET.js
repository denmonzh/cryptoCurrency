import {CURRENCY_EUR} from "./types";

export const getEUR = (url)=> dispatch =>{
    fetch(url)
        .then(res => res.json())
        .then(dataLTC => dispatch({
            type: CURRENCY_EUR,
            payload: dataLTC
        }));
};


