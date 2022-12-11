import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeStatus, modifyLeftSpaceship, modifyRightSpaceship } from '../battle/battleSlice'
import { LeftSpaceship } from './LeftSpaceship'
import { RightSpaceship } from './RightSpaceship'

import styles from './Battle.module.css';

export function Battle() {
  const dispatch = useAppDispatch();
  const { status, leftSpaceship, rightSpaceship } = useAppSelector((state) => state.battle);

  return (
    <div>
      <h1>Battle!</h1>
      <div className={styles['grid-container']}>
        <div className={styles['grid-item']}>
          <h1>Left Spaceship</h1>
          {leftSpaceship && (
            <LeftSpaceship />
          )}
          {leftSpaceship && (
            <button type="button" onClick={() => dispatch(modifyLeftSpaceship({...leftSpaceship, hitPoints: leftSpaceship.hitPoints - 10}))}>-10 HP</button>
          )}
          {leftSpaceship && (
            <button type="button" onClick={() => dispatch(modifyLeftSpaceship({...leftSpaceship, hitPoints: leftSpaceship.hitPoints + 10}))}>+10 HP</button>
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
          {rightSpaceship && (
            <RightSpaceship />
          )}
          {rightSpaceship && (
            <button type="button" onClick={() => dispatch(modifyRightSpaceship({...rightSpaceship, hitPoints: rightSpaceship.hitPoints - 10}))}>-10 HP</button>
          )}
          {rightSpaceship && (
            <button type="button" onClick={() => dispatch(modifyRightSpaceship({...rightSpaceship, hitPoints: rightSpaceship.hitPoints + 10}))}>+10 HP</button>
          )}
        </div>
        <section>
          <Link to="/spaceships">Spaceships!</Link>
        </section>
      </div>
    </div>
  );
}
