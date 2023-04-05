import { useState, useEffect } from "react";
import '../App.css'

export default function Fetch1() {
  const [btcData, setBtcData] = useState({});
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) =>response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
    }, []);
    return Object.keys(btcData).length > 0 ?(
      <section className="main">
      <article className="article">
        <h1 className="header">Current BTC/USD data</h1>
        <p>Code:        <span className="span-color">{btcData.code}</span></p> 
        <p>Symbol:      <span className="span-color">{btcData.symbol}</span></p> 
        <p>Rate:        <span className="span-color">{btcData.rate}</span></p> 
        <p>Description: <span className="span-color">{btcData.description}</span></p> 
        <p>Rate Float:  <span className="span-color">{btcData.rate_float}</span></p> 
        </article>
    </section>
  ): (
    <h1><span className='span-color'>Data pending...</span></h1>
  )
}