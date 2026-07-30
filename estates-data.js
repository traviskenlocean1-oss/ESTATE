// Shared property + agent data for estate-detail.html and agents.html.
// Kept as one file so both pages render from a single source of truth.

const AGENTS = {
  naomi: {
    name: 'Naomi Reyes', title: 'Founding Partner', phone: '(561) 555-0148', email: 'naomi@meridianestates.com',
    license: 'FL License BK-3345612',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    bio: 'Founded Meridian Estates two decades ago on a simple premise: fewer clients, better fit. Naomi personally previews every estate before it reaches the portfolio.'
  },
  elena: {
    name: 'Elena Cho', title: 'Senior Agent — Coastal Properties', phone: '(561) 555-0172', email: 'elena@meridianestates.com',
    license: 'FL License SL-3398201',
    photo: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?auto=format&fit=crop&w=500&q=80',
    bio: 'A decade spent exclusively in coastal luxury, from oceanfront villas to cliffside residences. Elena knows the tide tables as well as she knows the comps.'
  },
  marcus: {
    name: 'Marcus Whitfield', title: 'Senior Agent — Mountain & Vineyard Estates', phone: '(561) 555-0163', email: 'marcus@meridianestates.com',
    license: 'FL License SL-3387745',
    photo: 'https://images.unsplash.com/photo-1758518729286-e8d94cc231f5?auto=format&fit=crop&w=500&q=80',
    bio: 'Marcus grew up on a vineyard and never quite left. He now represents Meridian\'s mountain and wine-country estates with the same quiet, unhurried care.'
  },
  david: {
    name: 'David Okafor', title: 'Agent — Desert & Modern Architecture', phone: '(561) 555-0159', email: 'david@meridianestates.com',
    license: 'FL License SL-3401829',
    photo: 'https://images.unsplash.com/photo-1742518424481-b39a7cb4c80e?auto=format&fit=crop&w=500&q=80',
    bio: 'A former architect turned agent, David represents Meridian\'s most sculptural properties — and can talk you through every design decision in them.'
  }
};

const ESTATES = {
  'solmar-residence': {
    name: 'The Solmar Residence', tag: 'Villa', location: 'Coastal Ridge', price: '$8,950,000',
    beds: 5, baths: 6, sqft: '6,200', lot: '0.8 Acres', year: 2021, style: 'Coastal Contemporary', agent: 'elena',
    lat: 33.542, lon: -117.783,
    description: "Floor-to-ceiling glass meets an infinity edge that dissolves into the horizon — waking up here means waking up on the water. The Solmar Residence was built around a single idea: every principal room should face the Pacific. An open great room flows directly onto a cantilevered pool deck, while the primary suite occupies its own wing above the surf.",
    features: ['Private infinity pool with ocean views', 'Primary suite with dual walk-in closets', "Chef's kitchen with imported Italian marble", 'Home theater and temperature-controlled wine room', 'Three-car garage with EV charging', 'Full smart-home climate and lighting'],
    gallery: ['meridian-estate-2.jpg', 'https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1753605788101-04d1e653e74a?auto=format&fit=crop&w=1600&q=80']
  },
  'villa-aurelia': {
    name: 'Villa Aurelia', tag: 'Estate', location: 'Highland Point', price: '$12,500,000',
    beds: 6, baths: 7, sqft: '8,100', lot: '3.2 Acres', year: 2019, style: 'Cliffside Modern', agent: 'marcus',
    lat: 39.097, lon: -120.032,
    description: "Cliffside modern architecture wrapped in glass, with mountain views that stretch to the ridgeline from every principal room. Villa Aurelia sits at the edge of a private bluff, its cantilevered decks and hot tub suspended over the tree line — a house designed to disappear into the landscape it commands.",
    features: ['Cantilevered deck with hot tub', 'Floor-to-ceiling glass throughout', 'Six-fireplace configuration', 'Private guest house', 'Gated, tree-lined half-mile drive', 'Full-home backup generator'],
    gallery: ['meridian-estate-5.jpg', 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1780659760416-3b62b5f18e11?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1668089677938-b52086753f77?auto=format&fit=crop&w=1600&q=80']
  },
  'meridian-house': {
    name: 'The Meridian House', tag: 'Residence', location: 'Lakeside Bluff', price: '$6,750,000',
    beds: 4, baths: 5, sqft: '5,400', lot: '1.1 Acres', year: 2022, style: 'Lakefront Modern', agent: 'naomi',
    lat: 39.150, lon: -119.950,
    description: "Cantilevered over the water's edge, where every room frames the lake without a single obstruction. The Meridian House was the namesake project for the firm — a study in restraint, with warm wood ceilings, a glass-walled great room, and a private dock just steps from the primary suite.",
    features: ['Private dock and boat lift', 'Glass-walled great room', 'Radiant floor heating throughout', 'Outdoor kitchen and fire pit', 'Two-story library', 'Whole-home water filtration'],
    gallery: ['meridian-estate-1.jpg', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1741880907168-79a7aaac7875?auto=format&fit=crop&w=1600&q=80']
  },
  'halcyon-villa': {
    name: 'Halcyon Villa', tag: 'Villa', location: 'Vineyard Hills', price: '$9,800,000',
    beds: 6, baths: 6, sqft: '7,800', lot: '4.5 Acres', year: 1998, style: 'Tuscan Villa (restored 2020)', agent: 'marcus',
    lat: 38.502, lon: -122.407,
    description: "A restored Tuscan estate wrapped in cypress and vine rows, built for slow mornings and long dinners outside. Halcyon Villa's original stonework and hand-forged ironwork were preserved through a 2020 restoration that quietly modernized every system behind the walls.",
    features: ['4.5 acres of producing vineyard', 'Original hand-forged ironwork', 'Wine cave with tasting room', 'Outdoor pizza oven and dining pergola', 'Restored 19th-century stonework', 'Guest casita'],
    gallery: ['meridian-estate-3.jpg', 'https://images.unsplash.com/photo-1780659760416-3b62b5f18e11?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1776482128011-c707121f081a?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1668089677938-b52086753f77?auto=format&fit=crop&w=1600&q=80']
  },
  'ember-house': {
    name: 'The Ember House', tag: 'Estate', location: 'Desert Canyon', price: '$5,400,000',
    beds: 4, baths: 4, sqft: '4,600', lot: '2.0 Acres', year: 2020, style: 'Desert Modern', agent: 'david',
    lat: 33.566, lon: -111.926,
    description: "Concrete, glass, and cactus silhouettes against a canyon sunset — desert modern at its most deliberate. The Ember House was designed around the site's existing saguaro, with a low, board-formed concrete profile that reads as an extension of the canyon wall behind it.",
    features: ['Board-formed concrete construction', 'Negative-edge pool facing the canyon', 'Passive solar orientation', 'Outdoor fire lounge', 'Native desert landscaping', 'Owned solar array'],
    gallery: ['meridian-estate-4.jpg', 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1753605788101-04d1e653e74a?auto=format&fit=crop&w=1600&q=80']
  },
  'lumen-residence': {
    name: 'Lumen Residence', tag: 'Residence', location: 'Cliffside Point', price: '$7,250,000',
    beds: 5, baths: 5, sqft: '5,800', lot: '0.6 Acres', year: 2023, style: 'Coastal Modern', agent: 'elena',
    lat: 34.037, lon: -118.679,
    description: "A glass-walled perch above the coastline, engineered so the view never competes with the architecture. Lumen Residence is Meridian's newest listing — completed in 2023, with disappearing pocket doors that turn the entire ground floor into a covered terrace.",
    features: ['Disappearing pocket-door walls', 'Rooftop deck with 270-degree views', 'Elevator to all three levels', 'Motorized solar shades throughout', 'Heated saltwater pool', 'Dedicated home gym'],
    gallery: ['https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1776482128011-c707121f081a?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1668089677938-b52086753f77?auto=format&fit=crop&w=1600&q=80']
  },
  'monolith-estate': {
    name: 'The Monolith Estate', tag: 'Estate', location: 'Ridgeview Heights', price: '$10,200,000',
    beds: 5, baths: 6, sqft: '7,200', lot: '2.8 Acres', year: 2021, style: 'Sculptural Modern', agent: 'david',
    lat: 39.191, lon: -106.817,
    description: "Sculptural concrete and steel set against open sky — a study in scale, shadow, and quiet. The Monolith Estate reads as a single carved form from the ridge road, opening only once inside to reveal courtyards and light wells threaded through the plan.",
    features: ['Sunken courtyard with reflecting pool', 'Cantilevered steel-frame construction', 'Gallery-length hallway for art display', 'Rooftop observation deck', 'Geothermal heating and cooling', 'Private elevator'],
    gallery: ['https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1741880907168-79a7aaac7875?auto=format&fit=crop&w=1600&q=80']
  },
  'sereno-manor': {
    name: 'Sereno Manor', tag: 'Manor', location: 'Forest Hollow', price: '$4,950,000',
    beds: 6, baths: 7, sqft: '8,600', lot: '6.0 Acres', year: 1932, style: 'Forest Manor (restored 2018)', agent: 'naomi',
    lat: 47.530, lon: -121.820,
    description: "A storybook manor tucked into old-growth forest, where stone chimneys and leaded windows meet total modern comfort. Sereno Manor's 2018 restoration rewired and replumbed the entire house while preserving every original mantel and beam.",
    features: ['Six original stone fireplaces', 'Leaded-glass windows throughout', 'Detached carriage house', 'Old-growth forest surrounding the property', 'Fully restored 1932 millwork', 'Modern geothermal system'],
    gallery: ['https://images.unsplash.com/photo-1566908829550-e6551b00979b?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1780659760416-3b62b5f18e11?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1753605788101-04d1e653e74a?auto=format&fit=crop&w=1600&q=80']
  },
  'ivory-house': {
    name: 'The Ivory House', tag: 'Residence', location: 'Meadowbrook', price: '$3,875,000',
    beds: 4, baths: 4, sqft: '4,200', lot: '1.4 Acres', year: 2019, style: 'Modern Farmhouse', agent: 'naomi',
    lat: 41.766, lon: -73.929,
    description: "Crisp white volumes and oversized windows framing rolling meadowland in every direction. The Ivory House takes the modern farmhouse form and strips it back further — no applied detail, just proportion, light, and the meadow beyond the glass.",
    features: ['Wraparound covered porch', 'Board-and-batten exterior', 'Open-plan kitchen and great room', 'Detached barn-style studio', 'Meadow and pond views', 'Standing-seam metal roof'],
    gallery: ['https://images.unsplash.com/photo-1583765748076-cac46b8c98c1?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1668089677938-b52086753f77?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=80']
  },
  'whispering-pines-estate': {
    name: 'Whispering Pines Estate', tag: 'Estate', location: 'North Woods', price: '$4,200,000',
    beds: 5, baths: 5, sqft: '6,100', lot: '5.5 Acres', year: 2017, style: 'Mountain Contemporary', agent: 'marcus',
    lat: 44.128, lon: -73.921,
    description: "Perched above a private pine forest, with a wraparound deck built for watching the seasons change. Whispering Pines was sited to preserve every mature tree on the lot — the house steps down the hillside around them rather than clearing the ridge.",
    features: ['Wraparound cedar deck', 'Floor-to-ceiling stone fireplace', 'Private hiking trail access', 'Detached bunkhouse for guests', 'Heated three-season porch', 'Whole-property irrigation'],
    gallery: ['https://images.unsplash.com/photo-1635111057505-3b7dcc2b72fb?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1780659760416-3b62b5f18e11?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1741880907168-79a7aaac7875?auto=format&fit=crop&w=1600&q=80']
  },
  'bellevue-manor': {
    name: 'Bellevue Manor', tag: 'Manor', location: 'Garden District', price: '$5,950,000',
    beds: 7, baths: 8, sqft: '9,400', lot: '2.2 Acres', year: 1921, style: 'Historic Manor (restored 2015)', agent: 'elena',
    lat: 29.928, lon: -90.087,
    description: "Historic charm fully restored — manicured gardens, wraparound porches, and a footprint built for entertaining. Bellevue Manor's 2015 restoration preserved its original ironwork balconies and heart-pine floors while quietly adding a full modern kitchen wing.",
    features: ['Manicured formal gardens', 'Original ironwork balconies', 'Restored heart-pine flooring', 'Ballroom-scale great room', 'Carriage house with two guest suites', 'Full modern kitchen wing'],
    gallery: ['https://images.unsplash.com/photo-1756064173162-326c8e85215d?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1776482128011-c707121f081a?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1682888813788-373f947aacb3?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=80']
  },
  'ashford-estate': {
    name: 'The Ashford Estate', tag: 'Estate', location: 'Heritage Row', price: '$6,400,000',
    beds: 5, baths: 6, sqft: '6,800', lot: '1.6 Acres', year: 1908, style: 'Landmark Revival (restored 2022)', agent: 'david',
    lat: 32.776, lon: -79.931,
    description: "A landmark address reimagined inside, blending original architectural detail with a fully modern interior. The Ashford Estate's 2022 restoration kept every original cornice and window casing intact while rebuilding the interior from the studs out.",
    features: ['Landmark-registered facade', 'Restored original cornices and millwork', 'Fully rebuilt modern interior systems', 'Private walled courtyard', 'Widow\'s walk with rooftop views', 'Attached two-car carriage garage'],
    gallery: ['https://images.unsplash.com/photo-1784916986940-ad230ba858f0?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1741880907168-79a7aaac7875?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1668089677938-b52086753f77?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1753605788101-04d1e653e74a?auto=format&fit=crop&w=1600&q=80']
  }
};
