import {CURRENCY_USD} from "./types";

export const currencyUSD = ()=> dispatch =>{
  fetch('https://api.coinmarketcap.com/v2/ticker/')
      .then(res => res.json())
      .then(currencyPrice => dispatch({
          type: CURRENCY_USD,
          payload: currencyPrice
      }));
};



