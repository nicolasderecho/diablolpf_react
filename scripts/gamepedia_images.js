const GAMEPEDIA_IMAGES = [{"name":"Crown of Ages","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/ad/Crown_of_Ages_%28Diablo_II%29.gif"},{"name":"Warshrike","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f8/Warshrike_%28Diablo_II%29.gif"},{"name":"Lacerator","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/1c/Lacerator_%28Diablo_II%29.gif"},{"name":"Demon's Arch","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/93/Demon%27s_Arch_%28Diablo_II%29.gif"},{"name":"Wraith Flight","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/96/Wraith_Flight_%28Diablo_II%29.gif"},{"name":"Gargoyle's Bite","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/c/cf/Gargoyle%27s_Bite_%28Diablo_II%29.gif"},{"name":"Annihilus","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7f/Annihilus_%28Diablo_II%29.png"},{"name":"Shadow Killer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/55/Shadow_Killer_%28Diablo_II%29.gif"},{"name":"Demon Machine","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7f/Demon_Machine_%28Diablo_II%29.gif"},{"name":"Gut Siphon","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/66/Gut_Siphon_%28Diablo_II%29.gif"},{"name":"The Hand of Broc","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/5e/The_Hand_of_Broc_%28Diablo_II%29.gif"},{"name":"Bloodfist","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/d/d7/Bloodfist_%28Diablo_II%29.gif"},{"name":"Chance Guards","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/75/Chance_Guards_%28Diablo_II%29.gif"},{"name":"Magefist","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/59/Magefist_%28Diablo_II%29.gif"},{"name":"Frostburn","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/a9/Frostburn_%28Diablo_II%29.gif"},{"name":"Dracul's Grasp","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/1a/Dracul%27s_Grasp_%28Diablo_II%29.gif"},{"name":"Soul Drainer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/12/Soul_Drainer_%28Diablo_II%29.gif"},{"name":"Moser's Blessed Circle","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/4/46/Moser%27s_Blessed_Circle_%28Diablo_II%29.gif"},{"name":"Stormchaser","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/1b/Stormchaser_%28Diablo_II%29.gif"},{"name":"Lance Guard","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/86/Lance_Guard_%28Diablo_II%29.gif"},{"name":"Lidless Wall","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/06/Lidless_Wall_%28Diablo_II%29.gif"},{"name":"Soulfeast Tine","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/c/c2/Soulfeast_Tine_%28Diablo_II%29.gif"},{"name":"Spire of Honor","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/81/Spire_of_Honor_%28Diablo_II%29.gif"},{"name":"The Impaler","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7b/The_Impaler.gif"},{"name":"Viperfork","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0e/Viperfork_%28Diablo_II%29.gif"},{"name":"Cerebus' Bite","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/60/Cerebus%27_Bite_%28Diablo_II%29.gif"},{"name":"Ravenlore","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/9a/Ravenlore_%28Diablo_II%29.gif"},{"name":"The Gavel of Pain","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/d/d1/The_Gavel_of_Pain_%28Diablo_II%29.gif"},{"name":"Windhammer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/60/Windhammer_%28Diablo_II%29.gif"},{"name":"Coldkill","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7e/Coldkill_%28Diablo_II%29.gif"},{"name":"Butcher's Pupil","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/d/d7/Butcher%27s_Pupil_%28Diablo_II%29.gif"},{"name":"Pompeii's Wrath","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/59/Pompeii%27s_Wrath_%28Diablo_II%29.gif"},{"name":"Warlord's Trust","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0d/Warlord%27s_Trust_%28Diablo_II%29.gif"},{"name":"Spellsteel","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/b/be/Spellsteel_%28Diablo_II%29.gif"},{"name":"Stormrider","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7c/Stormrider_%28Diablo_II%29.gif"},{"name":"The Minotaur","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/01/The_Minotaur_%28Diablo_II%29.gif"},{"name":"Hellslayer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0b/Hellslayer_%28Diablo_II%29.gif"},{"name":"Messerschmidt's Reaver","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/4/43/Messerschmidt%27s_Reaver_%28Diablo_II%29.gif"},{"name":"Athena's Wrath","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/23/Athena%27s_Wrath_%28Diablo_II%29.gif"},{"name":"Bonehew","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8b/Bonehew_%28Diablo_II%29.gif"},{"name":"Skin of the Vipermagi","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/90/Skin_of_the_Vipermagi_%28Diablo_II%29.gif"},{"name":"Skin of the Flayed One","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f5/Skin_of_the_Flayed_One_%28Diablo_II%29.gif"},{"name":"Iron Pelt","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/17/Iron_Pelt_%28Diablo_II%29.gif"},{"name":"Duriel's Shell","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/5d/Duriel%27s_Shell_%28Diablo_II%29.gif"},{"name":"Guardian Angel","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8b/Guardian_Angel_%28Diablo_II%29.gif"},{"name":"Toothrow","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/56/Toothrow_%28Diablo_II%29.gif"},{"name":"Corpsemourn","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f0/Corpsemourn_%28Diablo_II%29.gif"},{"name":"Ormus' Robes","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0c/Ormus%27_Robes_%28Diablo_II%29.gif"},{"name":"The Gladiator's Bane","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f5/The_Gladiator%27s_Bane_%28Diablo_II%29.gif"},{"name":"Arkaine's Valor","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/aa/Arkaine%27s_Valor_%28Diablo_II%29.gif"},{"name":"Leviathan","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/84/Leviathan_%28Diablo_II%29.gif"},{"name":"Steel Carapace","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8f/Steel_Carapace_%28Diablo_II%29.gif"},{"name":"Templar's Might","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/57/Templar%27s_Might_%28Diablo_II%29.gif"},{"name":"Tyrael's Might","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8f/Tyrael%27s_Might_%28Diablo_II%29.gif"},{"name":"Stormspike","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/93/Stormspike.gif"},{"name":"Ghostflame","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/23/Ghostflame_%28Diablo_II%29.gif"},{"name":"Ribcracker","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/3/37/Ribcracker_%28Diablo_II%29.gif"},{"name":"Warpspear","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/e0/Warpspear_%28Diablo_II%29.gif"},{"name":"Skull Collector","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/3/3a/Skull_Collector_%28Diablo_II%29.gif"},{"name":"Mang Song's Lesson","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/aa/Mang_Song%27s_Lesson_%28Diablo_II%29.gif"},{"name":"Carin Shard","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/3/36/Carin_Shard_%28Diablo_II%29.gif"},{"name":"Blackhand Key","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8d/Blackhand_Key.gif"},{"name":"Death's Web","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/3/3f/Death%27s_Web_%28Diablo_II%29.gif"},{"name":"Rockstopper","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/4/4d/Rockstopper_%28Diablo_II%29.gif"},{"name":"Darksight Helm","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/98/Darksight_Helm_%28Diablo_II%29.gif"},{"name":"Crown of Thieves","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/fa/Crown_of_Thieves_%28Diablo_II%29.gif"},{"name":"Vampire Gaze","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/98/Vampire_Gaze_%28Diablo_II%29.gif"},{"name":"Steel Shade","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/1e/Steel_Shade_%28Diablo_II%29.gif"},{"name":"Veil of Steel","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/e4/Veil_of_Steel_%28Diablo_II%29.gif"},{"name":"Nightwing's Veil","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/e5/Nightwing%27s_Veil_%28Diablo_II%29.gif"},{"name":"Crown of Ages","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/ad/Crown_of_Ages_%28Diablo_II%29.gif"},{"name":"Giant Skull","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/25/Giant_Skull_%28Diablo_II%29.gif"},{"name":"Shadow Dancer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f3/Shadow_Dancer_%28Diablo_II%29.gif"},{"name":"Blade of Ali Baba","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/65/Blade_of_Ali_Baba_%28Diablo_II%29.gif"},{"name":"Ginther's Rift","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/fc/Ginther%27s_Rift_%28Diablo_II%29.gif"},{"name":"Headstriker","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/04/Headstriker_%28Diablo_II%29.gif"},{"name":"Hexfire","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/09/Hexfire_%28Diablo_II%29.gif"},{"name":"Swordguard","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7d/Swordguard_%28Diablo_II%29.gif"},{"name":"The Vile Husk","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f5/The_Vile_Husk_%28Diablo_II%29.gif"},{"name":"Todesfaelle Flamme","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/21/Todesfaelle_Flamme_%28Diablo_II%29.gif"},{"name":"Bloodmoon","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/c/ce/Bloodmoon_%28Diablo_II%29.gif"},{"name":"Frostwind","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f5/Frostwind_%28Diablo_II%29.gif"},{"name":"Lightsabre","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/00/Lightsabre_%28Diablo_II%29.gif"},{"name":"Doombringer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/e4/Doombringer_%28Diablo_II%29.gif"},{"name":"Flamebellow","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/a2/Flamebellow_%28Diablo_II%29.gif"},{"name":"The Grandfather","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/eb/The_Grandfather_%28Diablo_II%29.gif"},{"name":"Goldstrike Arch","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/93/Goldstrike_Arch_%28Diablo_II%29.gif"},{"name":"Kuko Shakaku","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/69/Kuko_Shakaku_%28Diablo_II%29.gif"},{"name":"Riphook","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0c/Riphook_%28Diablo_II%29.gif"},{"name":"Witchwild String","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/b/b7/Witchwild_String_%28Diablo_II%29.gif"},{"name":"Eaglehorn","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/4/47/Eaglehorn_%28Diablo_II%29.gif"},{"name":"Widowmaker","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/ee/Widowmaker_%28Diablo_II%29.gif"},{"name":"Windforce","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0a/Windforce_%28Diablo_II%29.gif"},{"name":"Arachnid Mesh","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/98/Arachnid_Mesh_%28Diablo_II%29.gif"},{"name":"Verdungo's Hearty Cord","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/5a/Verdungo%27s_Hearty_Cord_%28Diablo_II%29.gif"}, {"name":"Laying of Hands","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/25/Laying_of_Hands_%28Diablo_II%29.gif"},{"name":"Dark Adherent","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/67/Dark_Adherent_%28Diablo_II%29.gif"},{"name":"Rite of Passage","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/b/b7/Rite_of_Passage_%28Diablo_II%29.gif"},{"name":"Credendum","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/00/Credendum_%28Diablo_II%29.gif"},{"name":"Immortal King's Stone Crusher","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/a3/Immortal_King%27s_Stone_Crusher_%28Diablo_II%29.gif"},{"name":"Trang-Oul's Guise","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/d/d5/Trang-Oul%27s_Guise_%28Diablo_II%29.gif"},{"name":"Trang-Oul's Scales","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/0b/Trang-Oul%27s_Scales_%28Diablo_II%29.gif"},{"name":"Trang-Oul's Girth","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/d/da/Trang-Oul%27s_Girth_%28Diablo_II%29.gif"},{"name":"Trang-Oul's Claws","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/54/Trang-Oul%27s_Claws_%28Diablo_II%29.gif"},{"name":"Sazabi's Mental Sheath","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/08/Sazabi%27s_Mental_Sheath_%28Diablo_II%29.gif"},{"name":"Sazabi's Cobalt Redeemer","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/77/Sazabi%27s_Cobalt_Redeemer_%28Diablo_II%29.gif"},{"name":"Sazabi's Ghost Liberator","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/75/Sazabi%27s_Ghost_Liberator_%28Diablo_II%29.gif"},{"name":"Dangoon's Teaching","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/4/43/Dangoon%27s_Teaching_%28Diablo_II%29.gif"},{"name":"Ondal's Almighty","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/51/Ondal%27s_Almighty_%28Diablo_II%29.gif"},{"name":"M'avina's True Sight","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/56/M%27avina%27s_True_Sight_%28Diablo_II%29.gif"},{"name":"M'avina's Caster","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/7/7d/M%27avina%27s_Caster_%28Diablo_II%29.gif"},{"name":"M'avina's Embrace","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/6d/M%27avina%27s_Embrace_%28Diablo_II%29.gif"},{"name":"M'avina's Icy Clutch","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/24/M%27avina%27s_Icy_Clutch_%28Diablo_II%29.gif"},{"name":"M'avina's Tenet","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/a9/M%27avina%27s_Tenet_%28Diablo_II%29.gif"},{"name":"Griswold's Heart","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/9e/Griswold%27s_Heart_%28Diablo_II%29.gif"},{"name":"Griswold's Honor","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/f/f0/Griswold%27s_Honor_%28Diablo_II%29.gif"},{"name":"Guillaume's Face","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/b/b5/Guillaume%27s_Face_%28Diablo_II%29.gif"},{"name":"Magnus' Skin","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/5/50/Magnus%27_Skin_%28Diablo_II%29.gif"},{"name":"Sander's Paragon","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/a/a8/Sander%27s_Paragon_%28Diablo_II%29.gif"},{"name":"Sander's Superstition","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/9/93/Sander%27s_Superstition_%28Diablo_II%29.gif"},{"name":"Sander's Taboo","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/1/1e/Sander%27s_Taboo_%28Diablo_II%29.gif"},{"name":"Sander's Riprap","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/3/37/Sander%27s_Riprap_%28Diablo_II%29.gif"},{"name":"Hwanin's Splendor","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/08/Hwanin%27s_Splendor_%28Diablo_II%29.gif"},{"name":"Natalya's Totem","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/69/Natalya%27s_Totem_%28Diablo_II%29.gif"},{"name":"Natalya's Mark","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/82/Natalya%27s_Mark_%28Diablo_II%29.gif"},{"name":"Natalya's Shadow","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/06/Natalya%27s_Shadow_%28Diablo_II%29.gif"},{"name":"Natalya's Soul","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/e/e3/Natalya%27s_Soul_%28Diablo_II%29.gif"},{"name":"Aldur's Stony Gaze","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/6/6a/Aldur%27s_Stony_Gaze_%28Diablo_II%29.gif"},{"name":"Aldur's Advance","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/28/Aldur%27s_Advance_%28Diablo_II%29.gif"},{"name":"Aldur's Deception","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/2/21/Aldur%27s_Deception_%28Diablo_II%29.gif"},{"name":"Aldur's Rhythm","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/c/cf/Aldur%27s_Rhythm_%28Diablo_II%29.gif"},{"name":"Tal Rasha's Lidless Eye","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/0/00/Tal_Rasha%27s_Lidless_Eye_%28Diablo_II%29.gif"},{"name":"Tal Rasha's Fine-Spun Cloth","url":"https://gamepedia.cursecdn.com/diablo_gamepedia/8/8c/Tal_Rasha%27s_Fine-Spun_Cloth_%28Diablo_II%29.gif"}];

module.exports = { GAMEPEDIA_IMAGES }