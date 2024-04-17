import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
  const [Head, setHead] = useState(0)
  const [popup,setPopup] = useState(0)
  return (
    <div className="App">
        <Header Head={Head} popup={(o)=>{setPopup(o)}} />
        <Product popup={popup} popupclose={(close)=>{setPopup(close)}} handlecart={(val)=>{setHead(val)}} />
    </div>
  );
}

export default App;
