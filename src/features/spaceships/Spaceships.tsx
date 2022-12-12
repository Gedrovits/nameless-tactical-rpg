import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addSpaceship, removeSpaceship, modifySpaceship } from '../spaceships/spaceshipsSlice';
import { Shuttle, Frigate, Destroyer, Cruiser, Battleship, Carrier } from './spaceshipsTypes';
import { setLeftSpaceshipId, setRightSpaceshipId } from '../battle/battleSlice';

import styles from './Spaceships.module.css';

import { Spaceship } from './Spaceship';

export function Spaceships() {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.spaceships);
  // FIXME: Remove
  console.table([Shuttle, Frigate, Destroyer, Cruiser, Battleship, Carrier])

  return (
    <div>
      <h1>Spaceships!</h1>
      <div className={styles['grid-container']}>
        {entities.map((e) => (
          <div className={styles['grid-item']}>
            <Spaceship spaceshipId={e.id} />
            <p>
              <button type="button" onClick={() => dispatch(modifySpaceship({...e, hitPoints: e.hitPoints - 10}))}>-10 HP</button>
              <button type="button" onClick={() => dispatch(modifySpaceship({...e, hitPoints: e.hitPoints + 10}))}>+10 HP</button>
              <button type="button" onClick={() => dispatch(modifySpaceship({...e, shieldPoints: e.shieldPoints - 10}))}>-10 AP</button>
              <button type="button" onClick={() => dispatch(modifySpaceship({...e, shieldPoints: e.shieldPoints + 10}))}>+10 SP</button>
              <button type="button" onClick={() => dispatch(removeSpaceship(e.id))}>Remove</button>
              <button type="button" onClick={() => dispatch(setLeftSpaceshipId(e.id))}>Set Left Ship</button>
              <button type="button" onClick={() => dispatch(setRightSpaceshipId(e.id))}>Set Right Ship</button>
            </p>
          </div>
        ))}
      </div>
      <section>
        <h2>Add Spaceship!</h2>
        <button type="button" onClick={() => dispatch(addSpaceship({...Shuttle, id: nanoid()}))}>Shuttle</button>
        <button type="button" onClick={() => dispatch(addSpaceship({...Frigate, id: nanoid()}))}>Frigate</button>
        <button type="button" onClick={() => dispatch(addSpaceship({...Destroyer, id: nanoid()}))}>Destroyer</button>
        <button type="button" onClick={() => dispatch(addSpaceship({...Cruiser, id: nanoid()}))}>Cruiser</button>
        <button type="button" onClick={() => dispatch(addSpaceship({...Battleship, id: nanoid()}))}>Battleship</button>
        <button type="button" onClick={() => dispatch(addSpaceship({...Carrier, id: nanoid()}))}>Carrier</button>
      </section>
      <section>
        <Link to="/battle">Battle!</Link>
      </section>
    </div>
  );
}
