import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './features/main-menu/MainMenu';
import { StartGame } from './features/main-menu/StartGame';
import { ContinueGame } from './features/main-menu/ContinueGame';
import { Game } from './features/game/Game';
import { Spaceships } from './features/spaceships/Spaceships'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<MainMenu />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/continue-game" element={<ContinueGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="/spaceships" element={<Spaceships />} />
      </Routes>
    </div>
  );
}

export default App;
