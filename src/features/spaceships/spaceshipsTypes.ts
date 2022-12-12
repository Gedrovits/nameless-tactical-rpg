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

export const ARMOR_HULL_SIZE_PERCENT = {
  [HullSize.Tiny]: 0.00,
  [HullSize.Small]: 0.10,
  [HullSize.Medium]: 0.20,
  [HullSize.Large]: 0.30,
  [HullSize.Huge]: 0.40,
  [HullSize.Collosal]: 0.50,
};

export const SHIELD_HULL_SIZE_PERCENT = {
  [HullSize.Tiny]: 0.00,
  [HullSize.Small]: 0.25,
  [HullSize.Medium]: 0.50,
  [HullSize.Large]: 0.75,
  [HullSize.Huge]: 1.00,
  [HullSize.Collosal]: 1.25,
};

const calculateArmorPoints = (s: Spaceship) => {
  return s.maxHitPoints * ARMOR_HULL_SIZE_PERCENT[s.hullSize]
}

const calculateShieldPoints = (s: Spaceship) => {
  return s.maxHitPoints * SHIELD_HULL_SIZE_PERCENT[s.hullSize]
}

const calculateDynamicPoints = (s: Spaceship) => {
  s.hitPoints = s.maxHitPoints
  s.armorPoints = s.maxArmorPoints = calculateArmorPoints(s)
  s.shieldPoints = s.maxShieldPoints = calculateShieldPoints(s)
}

// FIXME: Remove
export const initialSpaceship: Spaceship = {
  id: '',
  hullSize: HullSize.Tiny,
  hullType: HullType.Shuttle,
  hitPoints: 0,
  maxHitPoints: 0,
  armorPoints: 0,
  maxArmorPoints: 0,
  shieldPoints: 0,
  maxShieldPoints: 0
}

export const Shuttle: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Tiny,
  hullType: HullType.Shuttle,
  maxHitPoints: 100,
}
calculateDynamicPoints(Shuttle)

export const Frigate: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Small,
  hullType: HullType.Frigate,
  maxHitPoints: 125,
}
calculateDynamicPoints(Frigate)

export const Destroyer: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Medium,
  hullType: HullType.Destroyer,
  maxHitPoints: 150,
}
calculateDynamicPoints(Destroyer)

export const Cruiser: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Large,
  hullType: HullType.Cruiser,
  maxHitPoints: 175,
}
calculateDynamicPoints(Cruiser)

export const Battleship: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Huge,
  hullType: HullType.Battleship,
  maxHitPoints: 200,
}
calculateDynamicPoints(Battleship)

export const Carrier: Spaceship = {
  ...initialSpaceship,
  hullSize: HullSize.Collosal,
  hullType: HullType.Carrier,
  maxHitPoints: 225,
}
calculateDynamicPoints(Carrier)
