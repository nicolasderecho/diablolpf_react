const { concat } = require('lodash')

const { ELITE_UNIQUE_HELMS, NORMAL_UNIQUE_HELMS, EXCEPTIONAL_UNIQUE_HELMS } = require("./helms")
const { NORMAL_UNIQUE_ARMORS, EXCEPTIONAL_UNIQUE_ARMORS, ELITE_UNIQUE_ARMORS } = require("./armors")
const { NORMAL_UNIQUE_SHIELDS, EXCEPTIONAL_UNIQUE_SHIELDS, ELITE_UNIQUE_SHIELDS } = require("./shields")
const { NORMAL_UNIQUE_GLOVES, EXCEPTIONAL_UNIQUE_GLOVES, ELITE_UNIQUE_GLOVES } = require("./gloves")
const { NORMAL_UNIQUE_BELTS, EXCEPTIONAL_UNIQUE_BELTS, ELITE_UNIQUE_BELTS } = require("./belts")
const { NORMAL_UNIQUE_BOOTS, EXCEPTIONAL_UNIQUE_BOOTS, ELITE_UNIQUE_BOOTS } = require("./boots")
const { NORMAL_UNIQUE_AXES, EXCEPTIONAL_UNIQUE_AXES, ELITE_UNIQUE_AXES } = require("./axes")
const { ELITE_UNIQUE_JAVELINS } = require("./javelins")
const { NORMAL_UNIQUE_BOWS, EXCEPTIONAL_UNIQUE_BOWS, ELITE_UNIQUE_BOWS } = require("./bows")
const { NORMAL_UNIQUE_CROSSBOWS, EXCEPTIONAL_UNIQUE_CROSSBOWS, ELITE_UNIQUE_CROSSBOWS } = require("./crossbows")
const { NORMAL_UNIQUE_DAGGERS, EXCEPTIONAL_UNIQUE_DAGGERS, ELITE_UNIQUE_DAGGERS } = require("./daggers")
const { NORMAL_UNIQUE_WAR_WEAPONS, EXCEPTIONAL_UNIQUE_WAR_WEAPONS, ELITE_UNIQUE_WAR_WEAPONS } = require("./war_weapons")
const { NORMAL_UNIQUE_SCEPTERS, EXCEPTIONAL_UNIQUE_SCEPTERS, ELITE_UNIQUE_SCEPTERS } = require("./scepters")
const { NORMAL_UNIQUE_SPEARS, EXCEPTIONAL_UNIQUE_SPEARS, ELITE_UNIQUE_SPEARS } = require("./spears")
const { NORMAL_UNIQUE_SWORDS, EXCEPTIONAL_UNIQUE_SWORDS, ELITE_UNIQUE_SWORDS } = require("./swords")
const { NORMAL_UNIQUE_RODS, EXCEPTIONAL_UNIQUE_RODS, ELITE_UNIQUE_RODS } = require("./rods")
const { NORMAL_UNIQUE_STAFFS, EXCEPTIONAL_UNIQUE_STAFFS, ELITE_UNIQUE_STAFFS } = require("./staffs")
const { NORMAL_UNIQUE_MACES, EXCEPTIONAL_UNIQUE_MACES, ELITE_UNIQUE_MACES } = require("./maces")
const { NORMAL_UNIQUE_AMAZON, EXCEPTIONAL_UNIQUE_AMAZON, ELITE_UNIQUE_AMAZON } = require("./amazon")
const { NORMAL_UNIQUE_ASSASIN, EXCEPTIONAL_UNIQUE_ASSASIN, ELITE_UNIQUE_ASSASIN } = require("./assasin")
const { NORMAL_UNIQUE_BARBARIAN, EXCEPTIONAL_UNIQUE_BARBARIAN, ELITE_UNIQUE_BARBARIAN } = require("./barbarian")
const { ELITE_UNIQUE_SORCERER } = require("./sorcerer")
const { EXCEPTIONAL_UNIQUE_NECROMANCER } = require("./necromancer")
const { EXCEPTIONAL_UNIQUE_PALADIN } = require("./paladin")
const { NORMAL_UNIQUE_DRUID, EXCEPTIONAL_UNIQUE_DRUID, ELITE_UNIQUE_DRUID } = require("./druid")


const UNIQUE_ITEMS = concat(
    ELITE_UNIQUE_HELMS, NORMAL_UNIQUE_HELMS, EXCEPTIONAL_UNIQUE_HELMS,
    NORMAL_UNIQUE_ARMORS, EXCEPTIONAL_UNIQUE_ARMORS, ELITE_UNIQUE_ARMORS,
    NORMAL_UNIQUE_SHIELDS, EXCEPTIONAL_UNIQUE_SHIELDS, ELITE_UNIQUE_SHIELDS,
    NORMAL_UNIQUE_GLOVES, EXCEPTIONAL_UNIQUE_GLOVES, ELITE_UNIQUE_GLOVES,
    NORMAL_UNIQUE_BELTS, EXCEPTIONAL_UNIQUE_BELTS, ELITE_UNIQUE_BELTS,
    NORMAL_UNIQUE_BOOTS, EXCEPTIONAL_UNIQUE_BOOTS, ELITE_UNIQUE_BOOTS, ELITE_UNIQUE_JAVELINS,
    NORMAL_UNIQUE_AXES, EXCEPTIONAL_UNIQUE_AXES, ELITE_UNIQUE_AXES,
    NORMAL_UNIQUE_BOWS, EXCEPTIONAL_UNIQUE_BOWS, ELITE_UNIQUE_BOWS,
    NORMAL_UNIQUE_CROSSBOWS, EXCEPTIONAL_UNIQUE_CROSSBOWS, ELITE_UNIQUE_CROSSBOWS,
    NORMAL_UNIQUE_DAGGERS, EXCEPTIONAL_UNIQUE_DAGGERS, ELITE_UNIQUE_DAGGERS,
    NORMAL_UNIQUE_WAR_WEAPONS, EXCEPTIONAL_UNIQUE_WAR_WEAPONS, ELITE_UNIQUE_WAR_WEAPONS,
    NORMAL_UNIQUE_SCEPTERS, EXCEPTIONAL_UNIQUE_SCEPTERS, ELITE_UNIQUE_SCEPTERS,
    NORMAL_UNIQUE_SPEARS, EXCEPTIONAL_UNIQUE_SPEARS, ELITE_UNIQUE_SPEARS,
    NORMAL_UNIQUE_SWORDS, EXCEPTIONAL_UNIQUE_SWORDS, ELITE_UNIQUE_SWORDS, EXCEPTIONAL_UNIQUE_NECROMANCER,
    NORMAL_UNIQUE_RODS, EXCEPTIONAL_UNIQUE_RODS, ELITE_UNIQUE_RODS, ELITE_UNIQUE_SORCERER,
    NORMAL_UNIQUE_STAFFS, EXCEPTIONAL_UNIQUE_STAFFS, ELITE_UNIQUE_STAFFS,
    NORMAL_UNIQUE_MACES, EXCEPTIONAL_UNIQUE_MACES, ELITE_UNIQUE_MACES, EXCEPTIONAL_UNIQUE_PALADIN,
    NORMAL_UNIQUE_AMAZON, EXCEPTIONAL_UNIQUE_AMAZON, ELITE_UNIQUE_AMAZON,
    NORMAL_UNIQUE_ASSASIN, EXCEPTIONAL_UNIQUE_ASSASIN, ELITE_UNIQUE_ASSASIN,
    NORMAL_UNIQUE_BARBARIAN, EXCEPTIONAL_UNIQUE_BARBARIAN, ELITE_UNIQUE_BARBARIAN,
    NORMAL_UNIQUE_DRUID, EXCEPTIONAL_UNIQUE_DRUID, ELITE_UNIQUE_DRUID
)

module.exports = {
    UNIQUE_ITEMS
}