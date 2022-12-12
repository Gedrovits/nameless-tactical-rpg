import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { HullSize, HullType } from '../spaceships/spaceshipsTypes';

import styles from '../spaceships/Spaceships.module.css';
import logo from '../../logo.svg';

export function RightSpaceship() {
  const dispatch = useAppDispatch();
  const { rightSpaceshipId } = useAppSelector((state) => state.battle);
  const rightSpaceship = useAppSelector((state) => state.spaceships.entities.find(e => e.id === rightSpaceshipId))

  return (
    <div>
      <h1>Spaceship!</h1>
      {rightSpaceship && (
        <div className={styles.card} key={rightSpaceship.id}>
          <img src={logo} className="App-logo" alt="Spaceship" style={{width: '50%'}} />
          <div className={styles.container}>
            <h4>ID: {rightSpaceship.id}</h4>
            <p>Size: {HullSize[rightSpaceship.hullSize]}</p>
            <p>Type: {HullType[rightSpaceship.hullType]}</p>
            <p style={{backgroundColor: "red"}}>Hit Points: {rightSpaceship.hitPoints}/{rightSpaceship.maxHitPoints}</p>
            <p style={{backgroundColor: "yellow"}}>Armor Points: {rightSpaceship.armorPoints}/{rightSpaceship.maxArmorPoints}</p>
            <p style={{backgroundColor: "blue"}}>Shield Points: {rightSpaceship.shieldPoints}/{rightSpaceship.maxShieldPoints}</p>
          </div>
        </div>
      )}
    </div>
  );
}
