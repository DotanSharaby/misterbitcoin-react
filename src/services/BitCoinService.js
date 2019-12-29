
import axios from 'axios';

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    // const res = getMarketPrice();
    // return coins / res;
    return 0.15
}

async function getMarketPrice() {
    // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
    // return res.data;
}

function getConfirmedTransactions() {

}