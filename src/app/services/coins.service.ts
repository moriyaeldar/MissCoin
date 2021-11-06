import Axios from 'axios'
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class CoinsService {
      public async getRate(){
        const res = await Axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        const rate = res.data
        return rate
    }
 
    public async getMarketPrice(){
      const marketPrice = await Axios.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true")
      return marketPrice
  } 
  }
