import './App.css';
import { BattleField } from './Components/BattleField';
import {HeaderWithCounter} from './Components/HeaderWithCounter';
import { ResetButton } from './Components/ResetButton';
import { useGameState } from './Components/state/useGameState';

function App() {
  const {turn, reset, matrix, fire, won} = useGameState();

  if (won) {
    alert('Moscow down')
  }
  return (
    <div className="App">
      <HeaderWithCounter turn={turn} />
      <BattleField matrix={matrix} onFire={fire}/> 
      <ResetButton reset={reset}/> 
    </div>
  );
}

export default App;
