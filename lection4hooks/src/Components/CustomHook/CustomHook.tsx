 import { useCallback, useState } from 'react';

 const useCounter = () => { 
     const [value, setState] = useState(0);
     const increment = useCallback(() => setState(value + 1), [value]);
     return {value, increment}
  }

const CustomHook = () => {
    const {value, increment} = useCounter();

  return (
    <button onClick={ increment }>
        Counter {value} times
    </button>
  )
}

export default CustomHook