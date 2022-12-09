import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectStatus } from './gameSlice';

export function Game() {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector(selectStatus);

  return (
    <div>
      <h1>Nameless Tactical RPG</h1>
      <h2>{gameStatus}</h2>
    </div>
  );
}
