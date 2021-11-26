import './App.css'
import React from 'react'

function App() {
  const [count,setCount] = React.useState(0);
  let isEven = count % 2 === 0;
  
  const countDecrement = () => {
    if(count > 0) {
      setCount(count => count - 1)
    }
  }

  const countReset = () => {
    setCount(count => count = 0)
  }

  const countIncrement = () => {
    setCount(count => count + 1)
  }

  return (
    <div className={'App ' + (isEven ? "light" : "dark")}>
      <div className='counter-wrapper'>
        <div className='counter-output'>
          {count}
        </div>   
        <div className='counter-iseven'>
            {isEven ? "Введено чётное число " : "Введено нечётное число"}
        </div>     
        <div className='counter-controls'>
            <button 
              className="btn" 
              onClick = { countDecrement }
            >-</button>
            <button 
              className="btn" 
              onClick = { countReset }
            > Reset</button>
            <button 
              className="btn" 
              onClick = { countIncrement }
            >+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
