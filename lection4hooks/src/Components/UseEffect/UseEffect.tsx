import { FC, useState, useEffect } from 'react'

type CounterProps = { counter: number; onCount: () => void };

const Counter: FC<CounterProps> = ({ counter, onCount }) => {
  useEffect(() => {
    console.log('counter did change ', { counter })
  });

  useEffect(() => {
    console.log('counter did mount or onCount change')
  }, [onCount])

  useEffect(() => {
    return () => {
      console.log("counter will be removed")
    }
  }, [])

  return <button onClick={onCount}>Clicked {counter} times</button>
}

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counterExsist, toggleCounter] = useState(true);
  const showHideCounter = () => toggleCounter(!counterExsist);
  const resetCounter = () => setCounter(0);
  const increment = () => setCounter(counter + 1);

  return (
    <>
      {counterExsist && (
        <Counter key={1} counter={counter} onCount={increment} />
      )}
      <div>
        <button onClick={resetCounter}>Reset counter</button>
        <button onClick={showHideCounter}>Show/Hide Counter counter</button>
      </div>
    </>
  )
}

export default UseEffect