import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { 
  initialSpaceshipState, 
  addSpaceship,
  removeSpaceship,
  modifySpaceship
} from '../spaceships/spaceshipsSlice';
import { HullSize, HullType } from './spaceshipsTypes';

import styles from './Spaceships.module.css';
import logo from '../../logo.svg';
import { setLeftSpaceship, setRightSpaceship } from '../battle/battleSlice';

export function Spaceships() {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.spaceships);

  // FIXME: Add Spaceship
  const [id, setId] = useState('')
  const [hullSize, setHullSize] = useState(HullSize.Tiny)
  const [hullType, setHullType] = useState(HullType.Shuttle)
  const onIdChanged = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)
  const onHullSizeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setHullSize(e.target.value as HullSize)
  const onHullTypeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setHullType(e.target.value as HullType)
  const onSaveClicked = () => {
    const spaceship ={
      ...initialSpaceshipState,
      id: id,
      hullSize: hullSize,
      hullType: hullType,
    }

    dispatch(addSpaceship(spaceship))
    // Reset
    setId('')
  }

  const hullSizeOptions = Object.keys(HullSize).map((hullSize) => (
    <option key={hullSize} value={hullSize}>
      {hullSize}
    </option>
  ))

  const hullTypeOptions = Object.keys(HullType).map((hullType) => (
    <option key={hullType} value={hullType}>
      {hullType}
    </option>
  ))

  return (
    <div>
      <h1>Spaceships!</h1>
      <div className={styles['grid-container']}>
        {entities.map((e) => (
          <div className={styles['grid-item']}>
            <div className={styles.card} key={e.id}>
              <img src={logo} className="App-logo" alt="Spaceship" style={{width: '50%'}} />
              <div className={styles.container}>
                <h4>ID: {e.id}</h4>
                <p>Size: {HullSize[e.hullSize]}</p>
                <p>Type: {HullType[e.hullType]}</p>
                <p style={{backgroundColor: "red"}}>Hit Points: {e.hitPoints}/{e.maxHitPoints}</p>
                <p>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, hitPoints: e.hitPoints - 10}))}>-10</button>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, hitPoints: e.hitPoints + 10}))}>+10</button>
                </p>
                <p style={{backgroundColor: "yellow"}}>Armor Points: {e.armorPoints}/{e.maxArmorPoints}</p>
                <p>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, armorPoints: e.armorPoints - 10}))}>-10</button>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, armorPoints: e.armorPoints + 10}))}>+10</button>
                </p>
                <p style={{backgroundColor: "blue"}}>Shield Points: {e.shieldPoints}/{e.maxShieldPoints}</p>
                <p>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, shieldPoints: e.shieldPoints - 10}))}>-10</button>
                  <button type="button" onClick={() => dispatch(modifySpaceship({...e, shieldPoints: e.shieldPoints + 10}))}>+10</button>
                </p>
                <p>
                  <button type="button" onClick={() => dispatch(removeSpaceship(e.id))}>Remove</button>
                </p>
                <p>
                  <button type="button" onClick={() => dispatch(setLeftSpaceship(e))}>Set Left Ship</button>
                  <button type="button" onClick={() => dispatch(setRightSpaceship(e))}>Set Right Ship</button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section>
        <h2>Add Spaceship!</h2>
        <form>
          <label htmlFor="spaceshipId">ID:</label>
          <input
            type="text"
            id="spaceshipId"
            name="spaceshipId"
            value={id}
            onChange={onIdChanged}
          />
          <label htmlFor="hullSize">Hull Size:</label>
          <select id="hullSize" value={hullSize} onChange={onHullSizeChanged}>
            {hullSizeOptions}
          </select>
          <label htmlFor="hullType">Hull Type:</label>
          <select id="hullType" value={hullType} onChange={onHullTypeChanged}>
            {hullTypeOptions}
          </select>
          <button type="button" onClick={onSaveClicked}>Save</button>
        </form>
      </section>
      <section>
        <Link to="/battle">Battle!</Link>
      </section>
    </div>
  );
}
