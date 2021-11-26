import React from 'react'

 function Counter({globalMinus,addGlobalCount,globalRemove,removeSingleCounter,id, oddOrEven, oddEventHanlder,lastid}) {
  const [count,setCount] = React.useState(0);

  React.useEffect(() => {
    if(oddOrEven[0] === "even"){      
      if(count % 2 === 0 && id !== lastid) {
        incrementCount()
      } 
    }
    if(oddOrEven[0] === "odd"){      
      if(count % 2 !== 0) {
        decrementCount()
      } 
    }
  }, [oddOrEven])  

  const decrementCount = () => {
    if(count > 0) {
      setCount(c=> c - 1)
       globalMinus() 
    }
  }

  const incrementCount = () => {
    setCount(c=> c + 1)
    addGlobalCount() 
  }

  const resetCount = () => {
    setCount(c=> c = 0)
    globalRemove(count) 
  }

  return (
    <div className="counter-wrapper">
        <span>
          {count}
        </span>
        <div className="single-controll-btns">
            <button 
            onClick={decrementCount}>
                -
            </button>
             <button onClick={resetCount}>
              Reset
            </button>
            <button 
            onClick={incrementCount}>
              +
            </button>
            <button 
              className="remove-btn" 
              onClick={()=>{ removeSingleCounter(id);  globalRemove(count); oddEventHanlder("odd")  }}>
            X </button>
        </div>
    </div>
  )
}

export default React.memo(Counter)