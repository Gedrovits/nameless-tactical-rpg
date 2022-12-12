import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { HullSize, HullType } from './spaceshipsTypes';
import { selectSpaceshipById } from '../spaceships/spaceshipsSlice';

import styles from '../spaceships/Spaceships.module.css';
import shuttle from '../../assets/spaceships/Shuttle.jpg'
import frigate from '../../assets/spaceships/Frigate.jpg'
import destroyer from '../../assets/spaceships/Destroyer.jpg'
import cruiser from '../../assets/spaceships/Cruiser.jpg'
import battleship from '../../assets/spaceships/Battleship.jpg'
import carrier from '../../assets/spaceships/Carrier.jpg'

const spaceshipImageByHullType = {
  [HullType.Shuttle]: shuttle,
  [HullType.Frigate]: frigate,
  [HullType.Destroyer]: destroyer,
  [HullType.Cruiser]: cruiser,
  [HullType.Battleship]: battleship,
  [HullType.Carrier]: carrier,
}

export function Spaceship({spaceshipId}: {spaceshipId: string}) {
  const dispatch = useAppDispatch();
  const spaceship = useAppSelector((state) => selectSpaceshipById(state, spaceshipId))

  return (
    <div>
      <h3>Spaceship!</h3>
      {spaceship && (
        <div className={styles.card} key={spaceship.id}>
          <img src={spaceshipImageByHullType[spaceship.hullType]} className="spaceship-logo" alt="Spaceship" style={{width: '256px'}} />
          <div className={styles.container}>
            <ul>
              <li>ID: {spaceship.id}</li>
              <li>Size: {HullSize[spaceship.hullSize]}</li>
              <li>Type: {HullType[spaceship.hullType]}</li>
              <li><span style={{backgroundColor: "red"}}>Hit Points: {spaceship.hitPoints}/{spaceship.maxHitPoints}</span></li>
              <li><span style={{backgroundColor: "yellow"}}>Armor Points: {spaceship.armorPoints}/{spaceship.maxArmorPoints}</span></li>
              <li><span style={{backgroundColor: "blue"}}>Shield Points: {spaceship.shieldPoints}/{spaceship.maxShieldPoints}</span></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
