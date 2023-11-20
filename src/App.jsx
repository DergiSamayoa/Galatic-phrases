import './App.css';
import quotes from './db/quotes.json';
import { getRandomElement } from './utils/random.js';
import QuoteBox from './components/QuoteBox'
import { useState } from 'react';

const Backgrounds = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [currentBackground, setCurrentBackground] = useState(getRandomElement(Backgrounds))

  const [quote, setQuote] = useState(getRandomElement(quotes));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBackground(getRandomElement(Backgrounds))
  }

  return (
    <main className={`App ${currentBackground}`}>
      <QuoteBox quote = {quote} handleChangeQuote = {handleChangeQuote} />
    </main>
  );
}

export default App;
