export const baseWeapons = [
  {
    category: "Arcane",
    name: "Bastone",
    cost: 100,
    att1: "will",
    att2: "will",
    prec: 0,
    damage: 6,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Arcane",
    name: "Tomo",
    cost: 100,
    att1: "insight",
    att2: "insight",
    prec: 0,
    damage: 6,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Archi",
    name: "Balestra",
    cost: 150,
    att1: "dexterity",
    att2: "insight",
    prec: 0,
    damage: 8,
    type: "physical",
    hands: 2,
    range: "distance",
  },
  {
    category: "Archi",
    name: "Arco Corto",
    cost: 200,
    att1: "dexterity",
    att2: "dexterity",
    prec: 0,
    damage: 8,
    type: "physical",
    hands: 2,
    range: "distance",
  },
  {
    category: "Flagelli",
    name: "Frusta-Catena",
    cost: 150,
    att1: "dexterity",
    att2: "dexterity",
    prec: 0,
    damage: 8,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Da Fuoco",
    name: "Pistola",
    cost: 250,
    att1: "dexterity",
    att2: "insight",
    prec: 0,
    damage: 8,
    type: "physical",
    hands: 1,
    range: "distance",
  },
  {
    category: "Lance",
    name: "Lancia Leggera",
    cost: 200,
    att1: "dexterity",
    att2: "might",
    prec: 0,
    damage: 8,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Lance",
    name: "Lancia Pesante",
    cost: 200,
    att1: "dexterity",
    att2: "might",
    prec: 0,
    damage: 12,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Da Lancio",
    name: "Shuriken",
    cost: 150,
    att1: "dexterity",
    att2: "insight",
    prec: 0,
    damage: 4,
    type: "physical",
    hands: 1,
    range: "distance",
  },
  {
    category: "Pesanti",
    name: "Martello di Ferro",
    cost: 200,
    att1: "might",
    att2: "might",
    prec: 0,
    damage: 6,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Pesanti",
    name: "Ascia",
    cost: 250,
    att1: "might",
    att2: "might",
    prec: 0,
    damage: 10,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Pesanti",
    name: "Ascia da Guerra",
    cost: 250,
    att1: "might",
    att2: "might",
    prec: 0,
    damage: 14,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Pugnali",
    name: "Pugnale d'Acciaio",
    cost: 150,
    att1: "dexterity",
    att2: "insight",
    prec: 1,
    damage: 4,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Da Rissa",
    name: "Tirapugni di ferro",
    cost: 150,
    att1: "dexterity",
    att2: "might",
    prec: 0,
    damage: 6,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Spade",
    name: "Katana",
    cost: 200,
    att1: "dexterity",
    att2: "insight",
    prec: 1,
    damage: 10,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Spade",
    name: "Spada di bronzo",
    cost: 200,
    att1: "dexterity",
    att2: "might",
    prec: 1,
    damage: 6,
    type: "physical",
    hands: 1,
    range: "melee",
  },
  {
    category: "Spade",
    name: "Spadone",
    cost: 200,
    att1: "dexterity",
    att2: "might",
    prec: 1,
    damage: 10,
    type: "physical",
    hands: 2,
    range: "melee",
  },
  {
    category: "Spade",
    name: "Stocco",
    cost: 200,
    att1: "dexterity",
    att2: "insight",
    prec: 1,
    damage: 6,
    type: "physical",
    hands: 1,
    range: "melee",
  },
];

export const baseArmors = [
  {
    name: "Nessuna Armatura",
    cost: 0,
    def: 0,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 0,
    init: 0,
  },
  {
    name: "Abito da Viaggio",
    cost: 100,
    def: 0,
    defbonus: 1,
    mdef: 0,
    mdefbonus: 1,
    init: -1,
  },
  {
    name: "Camicia di Seta",
    cost: 100,
    def: 0,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 2,
    init: -1,
  },
  {
    name: "Tunica da Lotta",
    cost: 150,
    def: 0,
    defbonus: 1,
    mdef: 0,
    mdefbonus: 1,
    init: 0,
  },
  {
    name: "Veste del Saggio",
    cost: 200,
    def: 0,
    defbonus: 1,
    mdef: 0,
    mdefbonus: 2,
    init: -2,
  },
  {
    name: "Brigantina",
    cost: 150,
    def: 10,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 0,
    init: -2,
  },
  {
    name: "Corazza di Bronzo",
    cost: 200,
    def: 11,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 0,
    init: -3,
  },
  {
    name: "Corazza Runica",
    cost: 250,
    def: 11,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 1,
    init: -3,
  },
  {
    name: "Corazza d'Acciaio",
    cost: 300,
    def: 12,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 0,
    init: -4,
  },
];

export const baseShields = [
  {
    name: "Nessuno Scudo",
    cost: 0,
    def: 0,
    defbonus: 0,
    mdef: 0,
    mdefbonus: 0,
    init: 0,
  },
  {
    name: "Scudo di Bronzo",
    cost: 100,
    def: 0,
    defbonus: 2,
    mdef: 0,
    mdefbonus: 0,
    init: 0,
  },
  {
    name: "Scudo Runico",
    cost: 150,
    def: 0,
    defbonus: 2,
    mdef: 0,
    mdefbonus: 2,
    init: 0,
  },
];