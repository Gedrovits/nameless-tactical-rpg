export enum HullSize {
  Tiny = 'Tiny',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge',
  Collosal = 'Collosal',
}

export enum HullType {
  Shuttle = 'Shuttle',
  Frigate = 'Frigate',
  Destroyer = 'Destroyer',
  Cruiser = 'Cruiser',
  Battleship = 'Battleship',
  Carrier = 'Carrier',
}

export interface Spaceship {
  id: string
  // Hull Design
  hullSize: HullSize
  hullType: HullType
  // HP
  hitPoints: number
  maxHitPoints: number
  // AP
  armorPoints: number
  maxArmorPoints: number
  // SP
  shieldPoints: number
  maxShieldPoints: number
}

export const initialSpaceship: Spaceship = {
    id: '',
    hullSize: HullSize.Tiny,
    hullType: HullType.Shuttle,
    hitPoints: 100,
    maxHitPoints: 100,
    armorPoints: 0,
    maxArmorPoints: 0,
    shieldPoints: 0,
    maxShieldPoints: 0
}
