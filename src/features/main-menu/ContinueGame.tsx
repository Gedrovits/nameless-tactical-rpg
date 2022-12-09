import { useAppDispatch } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { title } from './mainMenuSlice';

import styles from './MainMenu.module.css';

export function ContinueGame() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Continue Game!</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Back to title"
          onClick={() => dispatch(title())}
        >
          <Link to="/">Back to title</Link>
        </button>
      </div>
    </div>
  );
}
