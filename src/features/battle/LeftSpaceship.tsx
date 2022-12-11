import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { HullSize, HullType } from '../spaceships/spaceshipsTypes';

import styles from '../spaceships/Spaceships.module.css';
import logo from '../../logo.svg';

export function LeftSpaceship() {
  const dispatch = useAppDispatch();
  const { leftSpaceship } = useAppSelector((state) => state.battle);

  return (
    <div>
      <h1>Spaceship!</h1>
      {leftSpaceship && (
        <div className={styles.card} key={leftSpaceship.id}>
          <img src={logo} className="App-logo" alt="Spaceship" style={{width: '50%'}} />
          <div className={styles.container}>
            <h4>ID: {leftSpaceship.id}</h4>
            <p>Size: {HullSize[leftSpaceship.hullSize]}</p>
            <p>Type: {HullType[leftSpaceship.hullType]}</p>
            <p style={{backgroundColor: "red"}}>Hit Points: {leftSpaceship.hitPoints}/{leftSpaceship.maxHitPoints}</p>
            <p style={{backgroundColor: "yellow"}}>Armor Points: {leftSpaceship.armorPoints}/{leftSpaceship.maxArmorPoints}</p>
            <p style={{backgroundColor: "blue"}}>Shield Points: {leftSpaceship.shieldPoints}/{leftSpaceship.maxShieldPoints}</p>
          </div>
        </div>
      )}
    </div>
  );
}
