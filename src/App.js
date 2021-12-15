import React, {useState, useEffect} from 'react';
 import './App.css';
import axios from 'axios'
import Coin from './Coin'
import './coin.css'


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      // somethins has to happen and then this will happen
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => alert('Error'));
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()),
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto Prices</h1>
        <form className="navbar-form" action="">
          <input 
          type="text" 
          placeholder='Search ' 
          className='coin-input ' 
          onChange={handleChange}/>
        </form>
      </div>    
      {filteredCoins.map(coin => {
        return <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol} 
        
        volume={coin.market_cap} 
        price={coin.current_price}
        rank = {coin.market_cap_rank}
        pricechange={coin.price_change_percentage_24h}
        />
      ;
      })}  
    </div>
  );
}

export default App;
