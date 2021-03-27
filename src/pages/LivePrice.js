import {useState} from 'react'

import {Prices} from '../components/Prices'

export function LivePricePage() {
  const [gbp, setGbp] = useState(null);
  const [usd, setUsd] = useState(null);
  const [eur, setEur] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  function refreshPrices() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => response.json())
    .then((json) => {
      setGbp(json.bpi.GBP.rate);
      setUsd(json.bpi.USD.rate);
      setEur(json.bpi.EUR.rate);
      setLastUpdated(new Date().toLocaleTimeString());
    })
  }
  return (
    <div>
      <h1>Live bitcoin price</h1>
      {
        !gbp && !eur && !usd ? <p>please click button to refresh prices</p> : <Prices usd={usd} eur={eur} gbp={gbp} />
      }
      <button onClick={refreshPrices}>Refresh prices</button>
      {lastUpdated && <p>Last update: {lastUpdated}</p>}
    </div>
  )
}
