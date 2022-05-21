import { PureComponent, useState, useCallback } from 'react'

type WithCallback = {callback: () => void }

 class ExpensiveComponent extends PureComponent<WithCallback> {
  render() {
      let i=0;
      while (i < 1000_000_000){
          i++
      };
      const {callback} = this.props
    return (
      <button onClick={callback}>Expensive</button>
    )
  }
  componentDidUpdate() {
    console.log('update')
  }
}

const UseCallback = () => { 
    const [state, setState] = useState(0);
    const increment = () => { setState(state +1) };
    // const callback = () => console.log('callback!');
    
    // callback remember function depend oт its dependencies. If dependencies haven't changed, then the function will not change
    const callback = useCallback( () => console.log('callback!'), [] );
    return (
        <>
        <ExpensiveComponent callback={callback} />
        <button onClick={increment}>increment: {state}</button>
        </>
    )
}

export default UseCallback