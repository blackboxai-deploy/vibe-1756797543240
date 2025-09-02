import { WordCategory } from '@/types/fusion-types';

export const WORD_CATEGORIES: WordCategory[] = [
  // MAGIC & SUPERNATURAL
  {
    id: 'magic-schools',
    name: 'Magic Schools',
    description: 'Different schools and disciplines of magical study',
    color: '#8B5CF6',
    weight: 1,
    combinableWith: ['elements', 'methods', 'themes', 'artifacts'],
    words: [
      'Necromancy', 'Evocation', 'Transmutation', 'Divination', 'Enchantment', 'Illusion', 'Abjuration', 'Conjuration',
      'Chronomancy', 'Geomancy', 'Pyromancy', 'Hydromancy', 'Aeromancy', 'Biomancy', 'Technomancy', 'Psionics',
      'Shadowmancy', 'Lightweaving', 'Voidcraft', 'Spiritbinding', 'Soulforge', 'Mindbreak', 'Dreamwalking', 'Fatespinning',
      'Bloodmagic', 'Bonecraft', 'Fleshweaving', 'Memorycraft', 'Emotionbending', 'Realityrift', 'Dimensioncraft', 'Timebending',
      'Astromancy', 'Crystallomancy', 'Metalshaping', 'Plantgrowth', 'Beastspeak', 'Stormcalling', 'Earthsinging', 'Fireforging',
      'Iceweaving', 'Windwhisper', 'Waterdancing', 'Lightbinding', 'Shadowmerge', 'Voidwalking', 'Spiritcrafting', 'Soulreading',
      'Mindhacking', 'Dreamshaping', 'Nightmareweaving', 'Fearcraft', 'Hopeforging', 'Joyspinning', 'Sorrowbinding', 'Ragefueling',
      'Peacecraft', 'Chaosweaving', 'Orderforging', 'Balancekeeping', 'Harmonyspinning', 'Discordcraft', 'Unityweaving', 'Fragmenting'
    ]
  },
  {
    id: 'elements',
    name: 'Elemental Forces',
    description: 'Primary and exotic elemental powers',
    color: '#F59E0B',
    weight: 1,
    combinableWith: ['magic-schools', 'methods', 'artifacts', 'environments'],
    words: [
      'Fire', 'Water', 'Earth', 'Air', 'Lightning', 'Ice', 'Metal', 'Wood', 'Shadow', 'Light', 'Void', 'Spirit',
      'Plasma', 'Magma', 'Steam', 'Crystal', 'Sand', 'Mud', 'Mist', 'Smoke', 'Ash', 'Dust', 'Glass', 'Bone',
      'Blood', 'Flesh', 'Mind', 'Soul', 'Time', 'Space', 'Gravity', 'Force', 'Energy', 'Matter', 'Antimatter', 'Ether',
      'Chaos', 'Order', 'Balance', 'Harmony', 'Discord', 'Unity', 'Fragment', 'Echo', 'Resonance', 'Vibration',
      'Quantum', 'Particle', 'Wave', 'Field', 'Flux', 'Current', 'Tide', 'Storm', 'Calm', 'Rage', 'Serenity', 'Fury',
      'Starlight', 'Moonbeam', 'Sunfire', 'Nightshade', 'Dawn', 'Dusk', 'Twilight', 'Aurora', 'Nebula', 'Comet',
      'Meteor', 'Galaxy', 'Constellation', 'Blackhole', 'Supernova', 'Quasar', 'Pulsar', 'Vortex', 'Maelstrom', 'Hurricane'
    ]
  },
  {
    id: 'casting-methods',
    name: 'Casting Methods',
    description: 'Ways magic and abilities are channeled and cast',
    color: '#EC4899',
    weight: 1,
    combinableWith: ['magic-schools', 'elements', 'artifacts', 'gestures'],
    words: [
      'Incantation', 'Runic', 'Gestural', 'Material', 'Focus', 'Ritual', 'Spontaneous', 'Channeled', 'Stored', 'Inherited',
      'Emotional', 'Mental', 'Physical', 'Spiritual', 'Vocal', 'Silent', 'Written', 'Symbolic', 'Artistic', 'Musical',
      'Dance', 'Combat', 'Meditation', 'Prayer', 'Sacrifice', 'Bargain', 'Contract', 'Bond', 'Pact', 'Oath',
      'Bloodline', 'Ancestral', 'Divine', 'Infernal', 'Celestial', 'Primordial', 'Elemental', 'Natural', 'Artificial', 'Hybrid',
      'Crystalline', 'Tattoo', 'Scarification', 'Piercing', 'Implant', 'Symbiotic', 'Parasitic', 'Viral', 'Bacterial', 'Fungal',
      'Technological', 'Cybernetic', 'Bionic', 'Genetic', 'Evolutionary', 'Mutational', 'Adaptive', 'Reactive', 'Predictive', 'Intuitive',
      'Algorithmic', 'Quantum', 'Holographic', 'Virtual', 'Augmented', 'Neural', 'Synaptic', 'Hormonal', 'Chemical', 'Electrical'
    ]
  },
  {
    id: 'magical-artifacts',
    name: 'Magical Artifacts',
    description: 'Enchanted items, weapons, and mystical objects',
    color: '#10B981',
    weight: 1,
    combinableWith: ['magic-schools', 'elements', 'materials', 'origins'],
    words: [
      'Staff', 'Wand', 'Rod', 'Orb', 'Crystal', 'Gem', 'Stone', 'Ring', 'Amulet', 'Pendant', 'Charm', 'Talisman',
      'Scroll', 'Tome', 'Grimoire', 'Codex', 'Manual', 'Guide', 'Map', 'Chart', 'Diagram', 'Blueprint', 'Schema', 'Pattern',
      'Sword', 'Blade', 'Dagger', 'Knife', 'Axe', 'Hammer', 'Mace', 'Spear', 'Bow', 'Arrow', 'Shield', 'Armor',
      'Crown', 'Tiara', 'Circlet', 'Headband', 'Mask', 'Helm', 'Hood', 'Cloak', 'Robe', 'Mantle', 'Cape', 'Shroud',
      'Gauntlet', 'Glove', 'Bracer', 'Vambrace', 'Boot', 'Sandal', 'Belt', 'Sash', 'Girdle', 'Pouch', 'Bag', 'Satchel',
      'Mirror', 'Lens', 'Prism', 'Compass', 'Astrolabe', 'Orrery', 'Telescope', 'Microscope', 'Hourglass', 'Sundial',
      'Cauldron', 'Chalice', 'Goblet', 'Flask', 'Vial', 'Bottle', 'Jar', 'Urn', 'Casket', 'Chest', 'Coffer', 'Box'
    ]
  },

  // CHARACTER CLASSES & ROLES
  {
    id: 'warrior-classes',
    name: 'Warrior Classes',
    description: 'Combat-focused character archetypes and fighting styles',
    color: '#DC2626',
    weight: 1,
    combinableWith: ['weapons', 'abilities', 'origins', 'philosophies'],
    words: [
      'Berserker', 'Guardian', 'Champion', 'Gladiator', 'Knight', 'Paladin', 'Crusader', 'Templar', 'Samurai', 'Ninja',
      'Barbarian', 'Savage', 'Tribal', 'Nomad', 'Mercenary', 'Soldier', 'Veteran', 'Commander', 'General', 'Warlord',
      'Duelist', 'Swashbuckler', 'Fencer', 'Swordsman', 'Blademaster', 'Weaponmaster', 'Archer', 'Marksman', 'Sniper', 'Hunter',
      'Assassin', 'Executioner', 'Slayer', 'Killer', 'Destroyer', 'Annihilator', 'Vanquisher', 'Conqueror', 'Subjugator', 'Dominator',
      'Defender', 'Protector', 'Shield-bearer', 'Vanguard', 'Sentinel', 'Watchman', 'Guard', 'Warden', 'Keeper', 'Custodian',
      'Brawler', 'Pugilist', 'Boxer', 'Fighter', 'Martial-artist', 'Monk', 'Ascetic', 'Disciple', 'Master', 'Grandmaster',
      'Cavalry', 'Lancer', 'Dragoon', 'Hussar', 'Cuirassier', 'Scout', 'Ranger', 'Tracker', 'Pathfinder', 'Guide'
    ]
  },
  {
    id: 'mage-classes',
    name: 'Mage Classes',
    description: 'Magic-wielding character archetypes and scholarly pursuits',
    color: '#7C3AED',
    weight: 1,
    combinableWith: ['magic-schools', 'elements', 'knowledge', 'origins'],
    words: [
      'Wizard', 'Sorcerer', 'Warlock', 'Witch', 'Mage', 'Magician', 'Enchanter', 'Conjurer', 'Summoner', 'Necromancer',
      'Elementalist', 'Pyromancer', 'Cryomancer', 'Geomancer', 'Aeromancer', 'Hydromancer', 'Electromancer', 'Photomancer', 'Umbramancer', 'Chronomancer',
      'Scholar', 'Researcher', 'Archivist', 'Lorekeeper', 'Sage', 'Oracle', 'Prophet', 'Seer', 'Diviner', 'Mystic',
      'Alchemist', 'Artificer', 'Enchanter', 'Runescribe', 'Symbolist', 'Ritualist', 'Ceremonalist', 'Cultist', 'Devotee', 'Zealot',
      'Apprentice', 'Adept', 'Expert', 'Master', 'Grandmaster', 'Archmaster', 'Supremaster', 'Transcendent', 'Ascended', 'Enlightened',
      'Battle-mage', 'War-wizard', 'Combat-sorcerer', 'Spell-sword', 'Magic-knight', 'Arcane-warrior', 'Mystic-fighter', 'Enchanted-guardian', 'Runic-defender', 'Elemental-champion',
      'Healer', 'Cleric', 'Priest', 'Shaman', 'Druid', 'Medicine-man', 'Herbalist', 'Apothecary', 'Physician', 'Surgeon'
    ]
  },
  {
    id: 'rogue-classes',
    name: 'Rogue Classes',
    description: 'Stealth, cunning, and skill-based character archetypes',
    color: '#059669',
    weight: 1,
    combinableWith: ['skills', 'environments', 'methods', 'tools'],
    words: [
      'Thief', 'Burglar', 'Pickpocket', 'Cutpurse', 'Bandit', 'Highwayman', 'Pirate', 'Privateer', 'Smuggler', 'Fence',
      'Assassin', 'Killer', 'Hitman', 'Executioner', 'Poisoner', 'Shadow-dancer', 'Night-blade', 'Death-dealer', 'Soul-reaper', 'Life-taker',
      'Spy', 'Agent', 'Operative', 'Infiltrator', 'Scout', 'Reconnaissance', 'Intelligence', 'Informant', 'Double-agent', 'Sleeper',
      'Acrobat', 'Tumbler', 'Climber', 'Parkour', 'Free-runner', 'Escapist', 'Contortionist', 'Tightrope-walker', 'Daredevil', 'Stuntman',
      'Trickster', 'Charlatan', 'Con-artist', 'Grifter', 'Swindler', 'Fraud', 'Imposter', 'Mimic', 'Shapeshifter', 'Doppelganger',
      'Locksmith', 'Safecracker', 'Trap-specialist', 'Disabler', 'Engineer', 'Mechanic', 'Technician', 'Hacker', 'Codebreaker', 'Cryptographer',
      'Messenger', 'Courier', 'Runner', 'Herald', 'Emissary', 'Ambassador', 'Diplomat', 'Negotiator', 'Mediator', 'Peacekeeper'
    ]
  },
  {
    id: 'hybrid-classes',
    name: 'Hybrid Classes',
    description: 'Multi-discipline character archetypes combining different specializations',
    color: '#D97706',
    weight: 1,
    combinableWith: ['warrior-classes', 'mage-classes', 'rogue-classes', 'abilities'],
    words: [
      'Spell-sword', 'Magic-knight', 'Arcane-trickster', 'Shadow-mage', 'Battle-cleric', 'War-priest', 'Monk-assassin', 'Ninja-mage',
      'Scholar-warrior', 'Sage-fighter', 'Lore-master', 'Combat-researcher', 'Field-medic', 'Battle-surgeon', 'Warrior-healer', 'Guardian-priest',
      'Artificer-smith', 'Rune-forger', 'Enchanter-crafter', 'Magic-engineer', 'Alchemist-bomber', 'Potion-master', 'Brew-warrior', 'Elixir-knight',
      'Beast-master', 'Monster-tamer', 'Creature-bond', 'Animal-whisperer', 'Pack-leader', 'Hive-mind', 'Swarm-controller', 'Nature-guardian',
      'Technomancer', 'Cyber-mage', 'Data-wizard', 'Code-sorcerer', 'Digital-shaman', 'Virtual-priest', 'Network-guardian', 'System-hacker',
      'Psi-warrior', 'Mind-knight', 'Thought-guard', 'Mental-defender', 'Psychic-soldier', 'Telepathic-spy', 'Empathic-healer', 'Precognitive-scout',
      'Element-dancer', 'Storm-rider', 'Flame-walker', 'Ice-glider', 'Earth-shaker', 'Wind-runner', 'Water-swimmer', 'Lightning-catcher',
      'Time-keeper', 'Space-walker', 'Dimension-hopper', 'Reality-bender', 'Fate-weaver', 'Destiny-shaper', 'Probability-master', 'Chaos-rider'
    ]
  },

  // CREATURES & BEINGS
  {
    id: 'mythical-creatures',
    name: 'Mythical Creatures',
    description: 'Legendary beasts and fantastical beings from mythology',
    color: '#BE185D',
    weight: 1,
    combinableWith: ['elements', 'abilities', 'environments', 'origins'],
    words: [
      'Dragon', 'Wyvern', 'Drake', 'Wyrm', 'Serpent', 'Basilisk', 'Hydra', 'Leviathan', 'Kraken', 'Behemoth',
      'Phoenix', 'Firebird', 'Thunderbird', 'Roc', 'Griffin', 'Hippogriff', 'Pegasus', 'Unicorn', 'Alicorn', 'Nightmare',
      'Sphinx', 'Chimera', 'Manticore', 'Cockatrice', 'Peryton', 'Owlbear', 'Bulette', 'Displacer-beast', 'Rust-monster', 'Beholder',
      'Lich', 'Vampire', 'Werewolf', 'Banshee', 'Wraith', 'Specter', 'Ghost', 'Phantom', 'Poltergeist', 'Revenant',
      'Angel', 'Seraph', 'Cherub', 'Archangel', 'Valkyrie', 'Demon', 'Devil', 'Fiend', 'Succubus', 'Incubus',
      'Elemental', 'Djinn', 'Efreet', 'Marid', 'Salamander', 'Sylph', 'Undine', 'Gnome', 'Golem', 'Homunculus',
      'Titan', 'Giant', 'Cyclops', 'Ogre', 'Troll', 'Minotaur', 'Centaur', 'Satyr', 'Faun', 'Dryad',
      'Nymph', 'Siren', 'Mermaid', 'Selkie', 'Kelpie', 'Banshee', 'Bean-sidhe', 'Will-o-wisp', 'Fetch', 'Changeling'
    ]
  },
  {
    id: 'elemental-beings',
    name: 'Elemental Beings',
    description: 'Creatures born from or composed of elemental forces',
    color: '#0891B2',
    weight: 1,
    combinableWith: ['elements', 'environments', 'abilities', 'origins'],
    words: [
      'Fire-elemental', 'Flame-spirit', 'Ember-wisp', 'Inferno-lord', 'Magma-giant', 'Lava-swimmer', 'Ash-walker', 'Smoke-dancer',
      'Water-elemental', 'Wave-rider', 'Tide-turner', 'Ocean-heart', 'River-spirit', 'Lake-guardian', 'Rain-caller', 'Mist-weaver',
      'Earth-elemental', 'Stone-giant', 'Crystal-being', 'Metal-wraith', 'Sand-shifter', 'Mud-crawler', 'Rock-thrower', 'Mountain-keeper',
      'Air-elemental', 'Wind-spirit', 'Storm-lord', 'Cloud-walker', 'Thunder-bearer', 'Lightning-dancer', 'Breeze-whisperer', 'Gale-rider',
      'Ice-elemental', 'Frost-giant', 'Snow-spirit', 'Blizzard-bringer', 'Glacier-walker', 'Hail-thrower', 'Winter-heart', 'Cold-bringer',
      'Light-elemental', 'Sun-spirit', 'Star-bearer', 'Dawn-bringer', 'Radiance-walker', 'Beam-dancer', 'Glow-heart', 'Shine-weaver',
      'Shadow-elemental', 'Dark-spirit', 'Night-walker', 'Umbral-lord', 'Void-heart', 'Shade-dancer', 'Twilight-bearer', 'Dusk-bringer',
      'Lightning-elemental', 'Spark-spirit', 'Electric-lord', 'Volt-dancer', 'Current-rider', 'Charge-bearer', 'Shock-bringer', 'Energy-weaver',
      'Plant-elemental', 'Tree-spirit', 'Flower-dancer', 'Root-crawler', 'Leaf-whisperer', 'Bark-walker', 'Thorn-bearer', 'Pollen-spreader',
      'Sound-elemental', 'Echo-spirit', 'Resonance-lord', 'Vibration-dancer', 'Harmony-weaver', 'Discord-bringer', 'Silence-keeper', 'Music-heart'
    ]
  },
  {
    id: 'cosmic-entities',
    name: 'Cosmic Entities',
    description: 'Beings from beyond the stars and otherworldly realms',
    color: '#5B21B6',
    weight: 1,
    combinableWith: ['dimensions', 'powers', 'knowledge', 'mysteries'],
    words: [
      'Star-spawn', 'Void-born', 'Cosmic-horror', 'Eldritch-being', 'Outer-god', 'Ancient-one', 'Primordial-entity', 'Chaos-lord',
      'Dimension-walker', 'Reality-bender', 'Time-eater', 'Space-weaver', 'Fate-spinner', 'Destiny-shaper', 'Probability-dancer', 'Quantum-ghost',
      'Celestial-guardian', 'Stellar-warden', 'Galactic-sentinel', 'Universal-keeper', 'Cosmic-judge', 'Astral-lord', 'Etheric-prince', 'Divine-emperor',
      'Nightmare-feeder', 'Dream-stalker', 'Mind-flayer', 'Soul-devourer', 'Sanity-breaker', 'Madness-bringer', 'Terror-weaver', 'Fear-lord',
      'Energy-being', 'Pure-thought', 'Living-concept', 'Abstract-entity', 'Personified-force', 'Embodied-law', 'Manifest-principle', 'Incarnate-rule',
      'Hive-mind', 'Collective-consciousness', 'Shared-soul', 'United-being', 'Merged-entity', 'Fused-consciousness', 'Combined-spirit', 'Joined-essence',
      'Paradox-being', 'Impossible-creature', 'Logic-breaker', 'Rule-defier', 'Law-violator', 'Reason-destroyer', 'Sense-shatterer', 'Order-chaos',
      'Memory-keeper', 'History-guardian', 'Past-warden', 'Future-seer', 'Present-binder', 'Moment-catcher', 'Instant-holder', 'Second-stretcher'
    ]
  },
  {
    id: 'undead-horrors',
    name: 'Undead Horrors',
    description: 'Creatures that have transcended death in various forms',
    color: '#374151',
    weight: 1,
    combinableWith: ['necromancy', 'curses', 'origins', 'abilities'],
    words: [
      'Zombie', 'Skeleton', 'Ghoul', 'Wight', 'Wraith', 'Specter', 'Phantom', 'Banshee', 'Revenant', 'Death-knight',
      'Lich', 'Archlich', 'Demilich', 'Bone-lord', 'Soul-eater', 'Life-drain', 'Essence-vampire', 'Spirit-sucker', 'Vitality-thief', 'Energy-parasite',
      'Mummy', 'Mummified-lord', 'Preserved-king', 'Ancient-guardian', 'Tomb-warden', 'Crypt-keeper', 'Grave-sentinel', 'Barrow-wight', 'Cairn-spirit', 'Monument-ghost',
      'Vampire', 'Nosferatu', 'Blood-drinker', 'Crimson-lord', 'Night-stalker', 'Shadow-feeder', 'Darkness-dweller', 'Moonlight-hunter', 'Eternal-thirst', 'Undying-hunger',
      'Plague-bearer', 'Disease-spreader', 'Rot-bringer', 'Decay-lord', 'Corruption-spirit', 'Blight-walker', 'Pestilence-rider', 'Contagion-bearer', 'Sickness-weaver', 'Malady-master',
      'Bone-amalgam', 'Flesh-construct', 'Corpse-golem', 'Death-puppet', 'Necro-automaton', 'Undead-machine', 'Soul-engine', 'Spirit-mechanism', 'Ghost-apparatus', 'Phantom-device',
      'Shadow-undead', 'Shade-zombie', 'Dark-wraith', 'Umbral-skeleton', 'Twilight-ghost', 'Dusk-phantom', 'Night-specter', 'Midnight-banshee', 'Eclipse-wight', 'Void-revenant'
    ]
  },

  // WORLDBUILDING ELEMENTS
  {
    id: 'environments',
    name: 'Environments',
    description: 'Diverse locations, terrains, and environmental settings',
    color: '#16A34A',
    weight: 1,
    combinableWith: ['creatures', 'cultures', 'resources', 'phenomena'],
    words: [
      'Forest', 'Jungle', 'Rainforest', 'Woodland', 'Grove', 'Thicket', 'Copse', 'Glade', 'Clearing', 'Canopy',
      'Desert', 'Wasteland', 'Badlands', 'Dunes', 'Oasis', 'Mirage', 'Sandstorm', 'Canyon', 'Mesa', 'Plateau',
      'Mountain', 'Peak', 'Summit', 'Ridge', 'Pass', 'Valley', 'Gorge', 'Ravine', 'Chasm', 'Precipice',
      'Ocean', 'Sea', 'Lake', 'River', 'Stream', 'Rapids', 'Waterfall', 'Cascade', 'Pool', 'Spring',
      'Tundra', 'Arctic', 'Glacier', 'Iceberg', 'Snowfield', 'Blizzard', 'Frost', 'Permafrost', 'Ice-cave', 'Frozen-lake',
      'Swamp', 'Marsh', 'Bog', 'Wetland', 'Bayou', 'Mire', 'Fen', 'Quagmire', 'Quicksand', 'Mudflat',
      'Cave', 'Cavern', 'Grotto', 'Underground', 'Tunnel', 'Mine', 'Shaft', 'Pit', 'Abyss', 'Depth',
      'Sky', 'Cloud', 'Storm', 'Rainbow', 'Aurora', 'Stratosphere', 'Atmosphere', 'Void', 'Space', 'Cosmos',
      'Dimension', 'Plane', 'Realm', 'Domain', 'Territory', 'Region', 'Zone', 'Sector', 'District', 'Quarter'
    ]
  },
  {
    id: 'civilizations',
    name: 'Civilizations',
    description: 'Different types of societies, cultures, and governmental systems',
    color: '#B45309',
    weight: 1,
    combinableWith: ['environments', 'technologies', 'philosophies', 'structures'],
    words: [
      'Empire', 'Kingdom', 'Republic', 'Democracy', 'Oligarchy', 'Theocracy', 'Monarchy', 'Dictatorship', 'Autocracy', 'Federation',
      'Tribe', 'Clan', 'House', 'Guild', 'Order', 'Brotherhood', 'Sisterhood', 'Society', 'Circle', 'Covenant',
      'City-state', 'Metropolis', 'Capital', 'Settlement', 'Colony', 'Outpost', 'Frontier', 'Village', 'Town', 'Hamlet',
      'Nomads', 'Wanderers', 'Travelers', 'Migrants', 'Gypsies', 'Caravans', 'Merchants', 'Traders', 'Explorers', 'Pioneers',
      'Scholars', 'Academics', 'Researchers', 'Scientists', 'Philosophers', 'Thinkers', 'Intellectuals', 'Sages', 'Wisemen', 'Experts',
      'Warriors', 'Soldiers', 'Knights', 'Guards', 'Defenders', 'Protectors', 'Champions', 'Heroes', 'Legends', 'Myths',
      'Artisans', 'Crafters', 'Builders', 'Makers', 'Creators', 'Inventors', 'Engineers', 'Architects', 'Designers', 'Artists',
      'Priests', 'Clerics', 'Monks', 'Nuns', 'Shamans', 'Druids', 'Oracles', 'Prophets', 'Seers', 'Mystics',
      'Merchants', 'Traders', 'Dealers', 'Vendors', 'Shopkeepers', 'Bankers', 'Financiers', 'Investors', 'Economists', 'Accountants'
    ]
  },
  {
    id: 'technologies',
    name: 'Technologies',
    description: 'Technological levels, innovations, and scientific achievements',
    color: '#0F172A',
    weight: 1,
    combinableWith: ['civilizations', 'materials', 'energy', 'transportation'],
    words: [
      'Stone-age', 'Bronze-age', 'Iron-age', 'Steel-age', 'Industrial', 'Mechanical', 'Electrical', 'Electronic', 'Digital', 'Quantum',
      'Steam-powered', 'Clockwork', 'Gear-driven', 'Spring-loaded', 'Pneumatic', 'Hydraulic', 'Magnetic', 'Gravitational', 'Kinetic', 'Potential',
      'Alchemy', 'Chemistry', 'Physics', 'Biology', 'Genetics', 'Nanotechnology', 'Biotechnology', 'Cybernetics', 'Robotics', 'Artificial-intelligence',
      'Crystal-tech', 'Rune-tech', 'Magic-tech', 'Hybrid-tech', 'Bio-tech', 'Nano-tech', 'Quantum-tech', 'Plasma-tech', 'Fusion-tech', 'Antimatter-tech',
      'Transportation', 'Communication', 'Computation', 'Construction', 'Manufacturing', 'Agriculture', 'Medicine', 'Warfare', 'Defense', 'Exploration',
      'Energy-sources', 'Power-generation', 'Storage-systems', 'Distribution-networks', 'Conversion-methods', 'Efficiency-improvements', 'Renewable-resources', 'Sustainable-practices', 'Clean-technologies', 'Green-solutions',
      'Space-travel', 'Interstellar', 'Intergalactic', 'Dimensional', 'Time-travel', 'Teleportation', 'Portal-technology', 'Wormholes', 'Hyperspace', 'Subspace',
      'Consciousness-transfer', 'Memory-implants', 'Neural-interfaces', 'Brain-computer', 'Mind-uploading', 'Digital-immortality', 'Virtual-reality', 'Augmented-reality', 'Holographic-displays', 'Projection-systems'
    ]
  },
  {
    id: 'architectural-wonders',
    name: 'Architectural Wonders',
    description: 'Magnificent structures, buildings, and constructed marvels',
    color: '#78716C',
    weight: 1,
    combinableWith: ['civilizations', 'materials', 'magic-schools', 'purposes'],
    words: [
      'Tower', 'Spire', 'Minaret', 'Obelisk', 'Pillar', 'Column', 'Monument', 'Statue', 'Sculpture', 'Carving',
      'Castle', 'Fortress', 'Citadel', 'Keep', 'Stronghold', 'Bastion', 'Rampart', 'Battlements', 'Walls', 'Gates',
      'Palace', 'Mansion', 'Manor', 'Estate', 'Villa', 'Chateau', 'Hall', 'Chambers', 'Quarters', 'Residence',
      'Temple', 'Cathedral', 'Church', 'Chapel', 'Shrine', 'Sanctuary', 'Altar', 'Tabernacle', 'Monastery', 'Abbey',
      'Library', 'Archive', 'Repository', 'Vault', 'Treasury', 'Storehouse', 'Warehouse', 'Depot', 'Cache', 'Hoard',
      'Academy', 'University', 'School', 'College', 'Institute', 'Observatory', 'Laboratory', 'Workshop', 'Studio', 'Atelier',
      'Bridge', 'Aqueduct', 'Viaduct', 'Causeway', 'Pathway', 'Road', 'Highway', 'Boulevard', 'Avenue', 'Street',
      'Garden', 'Park', 'Grove', 'Orchard', 'Greenhouse', 'Conservatory', 'Botanical', 'Arboretum', 'Nursery', 'Plantation',
      'Arena', 'Colosseum', 'Amphitheater', 'Stadium', 'Theater', 'Auditorium', 'Gallery', 'Museum', 'Exhibition', 'Showcase'
    ]
  },

  // ABSTRACT CONCEPTS
  {
    id: 'philosophies',
    name: 'Philosophies',
    description: 'Belief systems, ideologies, and ways of thinking',
    color: '#4338CA',
    weight: 1,
    combinableWith: ['civilizations', 'magic-schools', 'orders', 'practices'],
    words: [
      'Order', 'Chaos', 'Balance', 'Harmony', 'Discord', 'Unity', 'Division', 'Peace', 'War', 'Conflict',
      'Light', 'Darkness', 'Shadow', 'Twilight', 'Dawn', 'Dusk', 'Day', 'Night', 'Morning', 'Evening',
      'Life', 'Death', 'Birth', 'Rebirth', 'Renewal', 'Decay', 'Growth', 'Destruction', 'Creation', 'Annihilation',
      'Love', 'Hate', 'Passion', 'Indifference', 'Joy', 'Sorrow', 'Hope', 'Despair', 'Faith', 'Doubt',
      'Truth', 'Lies', 'Honesty', 'Deception', 'Justice', 'Injustice', 'Fairness', 'Corruption', 'Purity', 'Taint',
      'Freedom', 'Slavery', 'Independence', 'Dependence', 'Autonomy', 'Control', 'Liberation', 'Oppression', 'Rights', 'Duties',
      'Knowledge', 'Ignorance', 'Wisdom', 'Foolishness', 'Learning', 'Teaching', 'Understanding', 'Confusion', 'Clarity', 'Obscurity',
      'Power', 'Weakness', 'Strength', 'Frailty', 'Authority', 'Submission', 'Dominance', 'Servitude', 'Leadership', 'Following',
      'Progress', 'Stagnation', 'Change', 'Stability', 'Evolution', 'Devolution', 'Advancement', 'Regression', 'Innovation', 'Tradition'
    ]
  },
  {
    id: 'emotions',
    name: 'Emotions & States',
    description: 'Emotional states, feelings, and psychological conditions',
    color: '#E11D48',
    weight: 1,
    combinableWith: ['philosophies', 'powers', 'magic-schools', 'effects'],
    words: [
      'Anger', 'Rage', 'Fury', 'Wrath', 'Ire', 'Hatred', 'Loathing', 'Disgust', 'Contempt', 'Scorn',
      'Joy', 'Happiness', 'Bliss', 'Ecstasy', 'Elation', 'Euphoria', 'Delight', 'Pleasure', 'Satisfaction', 'Contentment',
      'Fear', 'Terror', 'Dread', 'Horror', 'Panic', 'Anxiety', 'Worry', 'Nervousness', 'Apprehension', 'Trepidation',
      'Sadness', 'Sorrow', 'Grief', 'Melancholy', 'Depression', 'Despair', 'Anguish', 'Misery', 'Woe', 'Gloom',
      'Love', 'Affection', 'Adoration', 'Devotion', 'Passion', 'Romance', 'Tenderness', 'Fondness', 'Attachment', 'Compassion',
      'Curiosity', 'Wonder', 'Amazement', 'Awe', 'Fascination', 'Interest', 'Intrigue', 'Mystery', 'Puzzlement', 'Bewilderment',
      'Pride', 'Arrogance', 'Humility', 'Shame', 'Guilt', 'Embarrassment', 'Confidence', 'Insecurity', 'Self-doubt', 'Vanity',
      'Calm', 'Serenity', 'Tranquility', 'Peace', 'Stillness', 'Quiet', 'Silence', 'Rest', 'Relaxation', 'Meditation',
      'Energy', 'Vitality', 'Vigor', 'Enthusiasm', 'Excitement', 'Thrill', 'Rush', 'Adrenaline', 'Intensity', 'Passion'
    ]
  },
  {
    id: 'mysteries',
    name: 'Mysteries & Secrets',
    description: 'Hidden knowledge, enigmas, and unexplained phenomena',
    color: '#1F2937',
    weight: 1,
    combinableWith: ['knowledge', 'artifacts', 'locations', 'beings'],
    words: [
      'Secret', 'Mystery', 'Enigma', 'Puzzle', 'Riddle', 'Cipher', 'Code', 'Cryptogram', 'Hidden', 'Concealed',
      'Ancient', 'Forgotten', 'Lost', 'Buried', 'Sealed', 'Locked', 'Guarded', 'Protected', 'Warded', 'Shielded',
      'Prophecy', 'Oracle', 'Vision', 'Dream', 'Nightmare', 'Premonition', 'Omen', 'Sign', 'Portent', 'Warning',
      'Curse', 'Blessing', 'Hex', 'Jinx', 'Charm', 'Spell', 'Enchantment', 'Bewitchment', 'Sorcery', 'Witchcraft',
      'Legend', 'Myth', 'Tale', 'Story', 'Lore', 'Tradition', 'History', 'Chronicle', 'Record', 'Account',
      'Forbidden', 'Taboo', 'Banned', 'Prohibited', 'Restricted', 'Classified', 'Confidential', 'Top-secret', 'Classified', 'Sensitive',
      'Paranormal', 'Supernatural', 'Otherworldly', 'Unearthly', 'Spectral', 'Ghostly', 'Haunted', 'Possessed', 'Cursed', 'Blessed',
      'Unknown', 'Unknowable', 'Incomprehensible', 'Unfathomable', 'Inscrutable', 'Mysterious', 'Enigmatic', 'Cryptic', 'Obscure', 'Vague',
      'Discovery', 'Revelation', 'Epiphany', 'Insight', 'Understanding', 'Realization', 'Enlightenment', 'Awakening', 'Illumination', 'Clarity'
    ]
  },
  {
    id: 'time-concepts',
    name: 'Time Concepts',
    description: 'Temporal phenomena, cycles, and time-related mysteries',
    color: '#6366F1',
    weight: 1,
    combinableWith: ['magic-schools', 'phenomena', 'mysteries', 'dimensions'],
    words: [
      'Eternal', 'Infinite', 'Endless', 'Timeless', 'Ageless', 'Immortal', 'Undying', 'Everlasting', 'Perpetual', 'Continuous',
      'Moment', 'Instant', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year', 'Decade',
      'Past', 'Present', 'Future', 'History', 'Now', 'Tomorrow', 'Yesterday', 'Ancient', 'Modern', 'Contemporary',
      'Cycle', 'Loop', 'Circle', 'Spiral', 'Pattern', 'Rhythm', 'Beat', 'Pulse', 'Flow', 'Stream',
      'Beginning', 'End', 'Start', 'Finish', 'Genesis', 'Apocalypse', 'Alpha', 'Omega', 'Origin', 'Terminus',
      'Age', 'Era', 'Epoch', 'Period', 'Phase', 'Stage', 'Chapter', 'Season', 'Generation', 'Millennium',
      'Temporal', 'Chronological', 'Sequential', 'Simultaneous', 'Synchronous', 'Asynchronous', 'Parallel', 'Linear', 'Nonlinear', 'Curved',
      'Frozen', 'Stopped', 'Accelerated', 'Slowed', 'Rewound', 'Fast-forward', 'Paused', 'Suspended', 'Delayed', 'Advanced',
      'Timeline', 'Timestream', 'Temporal-flow', 'Time-river', 'Chronostream', 'History-thread', 'Fate-line', 'Destiny-path', 'Future-branch', 'Past-echo'
    ]
  },

  // MATERIALS & RESOURCES
  {
    id: 'magical-materials',
    name: 'Magical Materials',
    description: 'Enchanted substances, rare metals, and mystical components',
    color: '#A855F7',
    weight: 1,
    combinableWith: ['artifacts', 'crafting', 'elements', 'origins'],
    words: [
      'Mithril', 'Adamantine', 'Orichalcum', 'Meteoric-iron', 'Star-silver', 'Moon-gold', 'Sun-copper', 'Dragon-scale', 'Phoenix-feather', 'Unicorn-horn',
      'Crystal', 'Quartz', 'Amethyst', 'Emerald', 'Ruby', 'Sapphire', 'Diamond', 'Obsidian', 'Jade', 'Onyx',
      'Ethereal-silk', 'Shadow-cloth', 'Light-weave', 'Time-thread', 'Space-fiber', 'Dream-fabric', 'Nightmare-textile', 'Soul-yarn', 'Spirit-string', 'Ghost-hemp',
      'Living-wood', 'Iron-bark', 'Silver-leaf', 'Golden-sap', 'Crystal-root', 'Stone-fruit', 'Metal-flower', 'Glass-grass', 'Bone-branch', 'Blood-vine',
      'Elemental-essence', 'Planar-dust', 'Void-fragment', 'Chaos-shard', 'Order-crystal', 'Balance-stone', 'Harmony-gem', 'Discord-ore', 'Unity-metal', 'Division-alloy',
      'Memory-crystal', 'Thought-gem', 'Emotion-stone', 'Dream-dust', 'Nightmare-powder', 'Fear-extract', 'Joy-essence', 'Sorrow-tear', 'Rage-ember', 'Love-petal',
      'Time-crystal', 'Space-dust', 'Gravity-ore', 'Force-metal', 'Energy-gem', 'Matter-stone', 'Antimatter-shard', 'Quantum-particle', 'Probability-crystal', 'Fate-thread',
      'Divine-gold', 'Infernal-iron', 'Celestial-silver', 'Abyssal-copper', 'Heavenly-bronze', 'Hellish-lead', 'Angelic-platinum', 'Demonic-tin', 'Sacred-mercury', 'Profane-zinc'
    ]
  },
  {
    id: 'natural-resources',
    name: 'Natural Resources',
    description: 'Raw materials, minerals, and naturally occurring substances',
    color: '#059669',
    weight: 1,
    combinableWith: ['environments', 'crafting', 'technologies', 'civilizations'],
    words: [
      'Iron', 'Steel', 'Copper', 'Bronze', 'Gold', 'Silver', 'Platinum', 'Lead', 'Tin', 'Zinc',
      'Wood', 'Timber', 'Oak', 'Pine', 'Cedar', 'Birch', 'Maple', 'Willow', 'Ash', 'Elm',
      'Stone', 'Marble', 'Granite', 'Limestone', 'Sandstone', 'Slate', 'Flint', 'Quartz', 'Coal', 'Oil',
      'Cloth', 'Silk', 'Cotton', 'Wool', 'Linen', 'Hemp', 'Leather', 'Hide', 'Fur', 'Feather',
      'Food', 'Grain', 'Wheat', 'Rice', 'Corn', 'Fruit', 'Vegetable', 'Meat', 'Fish', 'Spice',
      'Water', 'Spring', 'Well', 'River', 'Lake', 'Ocean', 'Rain', 'Snow', 'Ice', 'Steam',
      'Fire', 'Flame', 'Ember', 'Ash', 'Smoke', 'Heat', 'Light', 'Spark', 'Blaze', 'Inferno',
      'Earth', 'Soil', 'Clay', 'Sand', 'Gravel', 'Mud', 'Dust', 'Dirt', 'Loam', 'Humus',
      'Air', 'Wind', 'Breeze', 'Gale', 'Storm', 'Hurricane', 'Tornado', 'Cyclone', 'Zephyr', 'Draft'
    ]
  },
  {
    id: 'crafting-components',
    name: 'Crafting Components',
    description: 'Specialized materials used in creating magical and mundane items',
    color: '#DC2626',
    weight: 1,
    combinableWith: ['magical-materials', 'artifacts', 'methods', 'purposes'],
    words: [
      'Powder', 'Dust', 'Essence', 'Extract', 'Oil', 'Tincture', 'Elixir', 'Potion', 'Brew', 'Concoction',
      'Thread', 'Wire', 'Chain', 'Rope', 'Cord', 'String', 'Fiber', 'Filament', 'Strand', 'Yarn',
      'Ink', 'Paint', 'Dye', 'Pigment', 'Color', 'Hue', 'Tint', 'Shade', 'Tone', 'Wash',
      'Glue', 'Adhesive', 'Cement', 'Mortar', 'Paste', 'Resin', 'Sap', 'Gum', 'Tar', 'Pitch',
      'Catalyst', 'Reagent', 'Component', 'Ingredient', 'Element', 'Part', 'Piece', 'Fragment', 'Shard', 'Splinter',
      'Focus', 'Lens', 'Prism', 'Mirror', 'Reflector', 'Concentrator', 'Amplifier', 'Enhancer', 'Booster', 'Multiplier',
      'Container', 'Vessel', 'Vial', 'Flask', 'Bottle', 'Jar', 'Pot', 'Cauldron', 'Crucible', 'Retort',
      'Tool', 'Implement', 'Instrument', 'Device', 'Apparatus', 'Machine', 'Contraption', 'Gadget', 'Widget', 'Mechanism'
    ]
  },

  // ACTIONS & ABILITIES
  {
    id: 'magical-abilities',
    name: 'Magical Abilities',
    description: 'Supernatural powers, spells, and mystical capabilities',
    color: '#7C2D12',
    weight: 1,
    combinableWith: ['magic-schools', 'elements', 'targets', 'effects'],
    words: [
      'Telekinesis', 'Telepathy', 'Teleportation', 'Pyrokinesis', 'Cryokinesis', 'Electrokinesis', 'Geokinesis', 'Hydrokinesis', 'Aerokinesis', 'Photokinesis',
      'Healing', 'Regeneration', 'Resurrection', 'Purification', 'Cleansing', 'Blessing', 'Protection', 'Warding', 'Shielding', 'Barriers',
      'Illusion', 'Invisibility', 'Shapeshifting', 'Transformation', 'Metamorphosis', 'Mimicry', 'Camouflage', 'Disguise', 'Masquerade', 'Deception',
      'Divination', 'Prophecy', 'Foresight', 'Precognition', 'Clairvoyance', 'Scrying', 'Detection', 'Sensing', 'Perception', 'Awareness',
      'Mind-control', 'Domination', 'Charm', 'Suggestion', 'Hypnosis', 'Brainwashing', 'Memory-manipulation', 'Thought-reading', 'Emotion-control', 'Fear-inducement',
      'Energy-manipulation', 'Force-fields', 'Levitation', 'Flight', 'Phasing', 'Intangibility', 'Density-control', 'Size-manipulation', 'Duplication', 'Multiplication',
      'Time-manipulation', 'Chronokinesis', 'Time-stop', 'Time-slow', 'Time-acceleration', 'Time-rewind', 'Time-loop', 'Time-travel', 'Temporal-anchor', 'Timeline-shift',
      'Space-manipulation', 'Portal-creation', 'Dimensional-rift', 'Reality-warping', 'Physics-breaking', 'Law-violation', 'Rule-bending', 'Logic-defiance', 'Impossibility-achievement', 'Paradox-creation'
    ]
  },
  {
    id: 'combat-techniques',
    name: 'Combat Techniques',
    description: 'Fighting styles, martial arts, and battle strategies',
    color: '#B91C1C',
    weight: 1,
    combinableWith: ['weapons', 'warrior-classes', 'elements', 'philosophies'],
    words: [
      'Sword-play', 'Blade-work', 'Fencing', 'Dueling', 'Parrying', 'Riposte', 'Thrust', 'Slash', 'Cut', 'Stab',
      'Archery', 'Marksmanship', 'Sharpshooting', 'Sniping', 'Quick-draw', 'Rapid-fire', 'Multi-shot', 'Trick-shot', 'Long-shot', 'Close-quarters',
      'Wrestling', 'Grappling', 'Submission', 'Takedown', 'Throw', 'Lock', 'Hold', 'Pin', 'Choke', 'Strangle',
      'Boxing', 'Pugilism', 'Bare-knuckle', 'Hook', 'Jab', 'Cross', 'Uppercut', 'Haymaker', 'Body-blow', 'Head-shot',
      'Martial-arts', 'Kung-fu', 'Karate', 'Judo', 'Jujitsu', 'Taekwondo', 'Kickboxing', 'Muay-thai', 'Boxing', 'MMA',
      'Acrobatics', 'Parkour', 'Free-running', 'Gymnastics', 'Tumbling', 'Flipping', 'Rolling', 'Dodging', 'Weaving', 'Bobbing',
      'Stealth', 'Sneaking', 'Stalking', 'Hiding', 'Camouflage', 'Ambush', 'Assassination', 'Back-stab', 'Surprise-attack', 'Sneak-attack',
      'Strategy', 'Tactics', 'Formation', 'Coordination', 'Teamwork', 'Leadership', 'Command', 'Control', 'Direction', 'Guidance'
    ]
  },
  {
    id: 'social-skills',
    name: 'Social Skills',
    description: 'Interpersonal abilities, communication, and social manipulation',
    color: '#0891B2',
    weight: 1,
    combinableWith: ['rogue-classes', 'emotions', 'civilizations', 'purposes'],
    words: [
      'Persuasion', 'Convincing', 'Arguing', 'Debating', 'Negotiation', 'Bargaining', 'Diplomacy', 'Mediation', 'Arbitration', 'Peacemaking',
      'Deception', 'Lying', 'Bluffing', 'Misdirection', 'Sleight-of-hand', 'Con-artistry', 'Fraud', 'Trickery', 'Cunning', 'Guile',
      'Intimidation', 'Threatening', 'Bullying', 'Coercion', 'Blackmail', 'Extortion', 'Fear-mongering', 'Terror-tactics', 'Psychological-warfare', 'Mind-games',
      'Seduction', 'Charm', 'Charisma', 'Appeal', 'Attraction', 'Allure', 'Magnetism', 'Presence', 'Aura', 'Influence',
      'Leadership', 'Command', 'Authority', 'Control', 'Direction', 'Guidance', 'Inspiration', 'Motivation', 'Encouragement', 'Rallying',
      'Teaching', 'Instruction', 'Education', 'Training', 'Mentoring', 'Coaching', 'Guidance', 'Wisdom-sharing', 'Knowledge-transfer', 'Skill-development',
      'Entertainment', 'Performance', 'Acting', 'Singing', 'Dancing', 'Storytelling', 'Comedy', 'Drama', 'Music', 'Art',
      'Information-gathering', 'Spying', 'Intelligence', 'Reconnaissance', 'Surveillance', 'Observation', 'Investigation', 'Detection', 'Analysis', 'Deduction'
    ]
  },
  {
    id: 'crafting-skills',
    name: 'Crafting Skills',
    description: 'Creation abilities, manufacturing techniques, and artistic pursuits',
    color: '#92400E',
    weight: 1,
    combinableWith: ['materials', 'tools', 'purposes', 'technologies'],
    words: [
      'Smithing', 'Forging', 'Metalworking', 'Blacksmithing', 'Weaponsmithing', 'Armorsmithing', 'Goldsmithing', 'Silversmithing', 'Coppersmithing', 'Tinsmithing',
      'Carpentry', 'Woodworking', 'Joinery', 'Cabinet-making', 'Furniture-crafting', 'Sculpture', 'Carving', 'Whittling', 'Turning', 'Shaping',
      'Tailoring', 'Sewing', 'Weaving', 'Spinning', 'Dyeing', 'Embroidery', 'Knitting', 'Crocheting', 'Quilting', 'Patchwork',
      'Pottery', 'Ceramics', 'Clay-work', 'Glazing', 'Firing', 'Molding', 'Sculpting', 'Throwing', 'Painting', 'Decorating',
      'Alchemy', 'Chemistry', 'Brewing', 'Distilling', 'Mixing', 'Combining', 'Reacting', 'Synthesizing', 'Extracting', 'Purifying',
      'Enchanting', 'Imbuing', 'Infusing', 'Charging', 'Empowering', 'Blessing', 'Cursing', 'Warding', 'Protecting', 'Enhancing',
      'Engineering', 'Construction', 'Building', 'Designing', 'Planning', 'Architecture', 'Blueprinting', 'Drafting', 'Calculating', 'Measuring',
      'Art', 'Painting', 'Drawing', 'Sketching', 'Illustration', 'Design', 'Decoration', 'Ornamentation', 'Beautification', 'Aesthetics'
    ]
  }
];

export const THEME_PRESETS: any[] = [
  {
    id: 'dark-fantasy',
    name: 'Dark Fantasy',
    description: 'Gothic and horror-inspired fantasy elements',
    color: '#374151',
    categories: ['necromancy', 'undead-horrors', 'curses', 'shadows'],
    weights: { 'undead-horrors': 2, 'mysteries': 1.5, 'emotions': 1.2 }
  },
  {
    id: 'high-fantasy',
    name: 'High Fantasy',
    description: 'Epic fantasy with grand magical systems',
    color: '#7C3AED',
    categories: ['magic-schools', 'mythical-creatures', 'artifacts', 'kingdoms'],
    weights: { 'magic-schools': 2, 'mythical-creatures': 1.8, 'artifacts': 1.5 }
  },
  {
    id: 'cosmic-horror',
    name: 'Cosmic Horror',
    description: 'Eldritch and otherworldly terrors',
    color: '#1E1B4B',
    categories: ['cosmic-entities', 'mysteries', 'void', 'madness'],
    weights: { 'cosmic-entities': 2.5, 'mysteries': 2, 'time-concepts': 1.3 }
  },
  {
    id: 'steampunk',
    name: 'Steampunk',
    description: 'Victorian-era technology meets magic',
    color: '#92400E',
    categories: ['technologies', 'crafting', 'mechanical', 'industrial'],
    weights: { 'technologies': 2, 'crafting-skills': 1.8, 'materials': 1.5 }
  }
];

export function getRandomWords(categoryId: string, count: number = 1): string[] {
  const category = WORD_CATEGORIES.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  const shuffled = [...category.words].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateFusion(): any {
  // Implementation will be added in the fusion engine
  return null;
}