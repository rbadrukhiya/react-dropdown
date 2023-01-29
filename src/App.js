import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [open , setopen] = useState(false);
  function home()
  {
    if(open == false)
    {
      setopen(true)
    }
    else
    {
      setopen(false)
    }
  }
  return (
    <div className="App">
      <ul>
        <li><a href="#" onClick={home}>dropdown</a>
        {
         open &&  <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
          </ul>
        }
          
        </li>
      </ul>
    </div>
  );
}

export default App;
