import { useAppDispatch } from '../../app/hooks';
import { newGame, continueGame } from './mainMenuSlice';
import { Link } from 'react-router-dom';

import styles from './MainMenu.module.css';

export function MainMenu() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Nameless Tactical RPG</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Start Game"
          onClick={() => dispatch(newGame())}
        >
          <Link to="/start-game">Start Game</Link>
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Continue Game"
          onClick={() => dispatch(continueGame())}
        >
          <Link to="/continue-game">Continue Game</Link>
        </button>
      </div>
    </div>
  );
}
