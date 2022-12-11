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
