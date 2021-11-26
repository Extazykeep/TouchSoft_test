import React from 'react'
import Counter from './Counter';
import './App.css';

function App() {
  const [counters, setCounter] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [oddOrEven, setOddOrEven] = React.useState([]);
  
  const addCounter = () => {
    const counter = {id: new Date().getTime()}
    setCounter([...counters,counter])
  }
  const oddEventHanlder = React.useCallback((value) => {
    setOddOrEven([value])
  },[])

  const addGlobalCount = React.useCallback(() => {
    setTotalCount(totalCount => totalCount + 1)
  },[])

  const minusGlobalCount = React.useCallback(() => {
    setTotalCount(totalCount=> totalCount - 1)
  },[])

  const removeSingleCounter = React.useCallback((id) => {
    setCounter([...counters.filter(counters => counters.id !== id)]) 
  },[counters])

  const removeFromGlobal = React.useCallback((count) => {
    setTotalCount(totalCount => totalCount - count)
  },[])

  const clearAll = () => {
    setCounter([])
    removeFromGlobal(totalCount)
  }

  return (
    <div className='App'>
      <div className='control-buttons'>
          <button onClick ={()=>{addCounter();oddEventHanlder("even")}} className='btn-add'>
            Add counter
          </button>
          <button onClick={clearAll} className='btn-reset'>
            Reset
          </button>
          <div className="output">
            <p>Counters added: {counters.length} </p>
            <p>Sum of all counters: {totalCount}</p>
          </div>
      </div>
      <div className='counters-field'>
          {
            counters.map((counter) => {
            return (
            <Counter 
              key={counter.id} 
              addGlobalCount = {addGlobalCount}
              globalMinus = {minusGlobalCount}
              globalRemove = {removeFromGlobal} 
              removeSingleCounter={removeSingleCounter}  
              id={counter.id}
              oddOrEven = {oddOrEven} 
              oddEventHanlder= {oddEventHanlder}
              lastid = {counters[counters.length -1].id}           
            />)})
          }
      </div>
    </div>
  );
}

export default App;
