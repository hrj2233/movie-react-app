import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const onChange = (event) => setAmount(event.target.value);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <input
        value={amount}
        onChange={onChange}
        type="text"
        placeholder="How much money do you have "
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) :
              {(amount / coin.quotes.USD.price).toFixed(4)}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
