import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeStatus } from '../battle/battleSlice'
import { selectSpaceshipById, modifySpaceship } from '../spaceships/spaceshipsSlice';
import { LeftSpaceship } from './LeftSpaceship'
import { RightSpaceship } from './RightSpaceship'

import styles from './Battle.module.css';

export function Battle() {
  const dispatch = useAppDispatch();

  const { status, leftSpaceshipId, rightSpaceshipId } = useAppSelector((state) => state.battle);
  const leftSpaceship = useAppSelector((state) => selectSpaceshipById(state, leftSpaceshipId))
  const rightSpaceship = useAppSelector((state) => selectSpaceshipById(state, rightSpaceshipId))

  return (
    <div>
      <h1>Battle!</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item']}>
          <h1>Left Spaceship</h1>
          {leftSpaceshipId && (
            <LeftSpaceship />
          )}
          {leftSpaceshipId && leftSpaceship && (
            <button type="button" onClick={() => dispatch(modifySpaceship({...leftSpaceship, hitPoints: leftSpaceship.hitPoints - 10}))}>-10 HP</button>
          )}
          {leftSpaceshipId && leftSpaceship && (
            <button type="button" onClick={() => dispatch(modifySpaceship({...leftSpaceship, hitPoints: leftSpaceship.hitPoints + 10}))}>+10 HP</button>
          )}
        </div>
        <div className={styles['grid-item']}>
          <h1>... Space ...</h1>
          <h2>{status === 'idle' ? 'No battle in progress?' : 'Fight!'}</h2>
          <button type="button" onClick={() => dispatch(changeStatus('idle'))}>Stop Battle!</button>
          <button type="button" onClick={() => dispatch(changeStatus('active'))}>Start Battle!</button>
        </div>
        <div className={styles['grid-item']}>
          <h1>Right Spaceship</h1>
          {rightSpaceshipId && (
            <RightSpaceship />
          )}
          {rightSpaceshipId && rightSpaceship && (
            <button type="button" onClick={() => dispatch(modifySpaceship({...rightSpaceship, hitPoints: rightSpaceship.hitPoints - 10}))}>-10 HP</button>
          )}
          {rightSpaceshipId && rightSpaceship && (
            <button type="button" onClick={() => dispatch(modifySpaceship({...rightSpaceship, hitPoints: rightSpaceship.hitPoints + 10}))}>+10 HP</button>
          )}
        </div>
        <section>
          <Link to="/spaceships">Spaceships!</Link>
        </section>
      </div>
    </div>
  );
}
