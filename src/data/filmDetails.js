const placeholderStills = [
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1400&q=80',
]

export const filmDetails = [
  {
    id: 'how-to-train-your-dragon',
    title: 'How to Train Your Dragon',
    type: 'Movie',
    year: 2025,
    duration: '1h 56m',
    ageRating: '6+',
    rating: 8.4,
    heroImage:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=22w7z_lT6YM',
    trailerLength: '2:30',
    synopsis:
      'A young Viking determined to become a dragon slayer instead forms an unlikely friendship with a feared Night Fury. As old rivalries rise again, the pair must unite their world before war erupts.',
    genres: ['Adventure', 'Fantasy', 'Family'],
    creator: {
      name: 'Dean DeBlois',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=220&q=80',
      bio: 'Oscar-nominated filmmaker known for emotionally grounded animated epics.',
    },
    cast: ['Mason Thames', 'Nico Parker', 'Gerard Butler', 'Nick Frost'],
    crew: ['Cinematography: Bill Pope', 'Music: John Powell', 'Editing: Wyatt Smith'],
    pricing: {
      rent: '$5.99',
      buy: '$19.99',
      currency: 'USD',
      note: 'Also included with Frame Premium',
    },
    reviews: [
      { id: 'r1', author: 'K. Patel', score: 4.7, quote: 'Heartfelt, huge, and surprisingly intimate.' },
      { id: 'r2', author: 'Lumen Weekly', score: 4.4, quote: 'A soaring reboot with stunning flight sequences.' },
    ],
    stills: placeholderStills,
    relatedIds: ['dune-part-two', 'wild-robot', 'mufasa-the-lion-king'],
    progress: null,
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    type: 'Movie',
    year: 2023,
    duration: '3h 00m',
    ageRating: 'PG-13',
    rating: 8.8,
    heroImage:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=uYPbbksJxIg',
    trailerLength: '3:12',
    synopsis:
      'Physicist J. Robert Oppenheimer leads the Manhattan Project and confronts the ethical weight of creating the atomic bomb amid intense political pressure.',
    genres: ['Biography', 'Drama', 'History'],
    creator: {
      name: 'Christopher Nolan',
      role: 'Writer / Director',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=220&q=80',
      bio: 'Known for large-format cinematic storytelling and nonlinear narratives.',
    },
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    crew: ['Cinematography: Hoyte van Hoytema', 'Music: Ludwig Goransson', 'Editing: Jennifer Lame'],
    pricing: {
      rent: '$4.99',
      buy: '$16.99',
      currency: 'USD',
      note: 'Premium members save 10%',
    },
    reviews: [
      { id: 'r1', author: 'A. Monroe', score: 4.9, quote: 'Masterful pacing and towering performances.' },
      { id: 'r2', author: 'ScreenForum', score: 4.6, quote: 'A tense moral thriller disguised as a biopic.' },
    ],
    stills: [
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80',
      ...placeholderStills.slice(1),
    ],
    relatedIds: ['blade-runner-2049', 'martian', 'dune-part-two'],
    progress: { percent: 18, elapsed: '2h 08m' },
  },
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    type: 'Movie',
    year: 2024,
    duration: '2h 46m',
    ageRating: 'PG-13',
    rating: 8.6,
    heroImage:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=Way9Dexny3w',
    trailerLength: '2:45',
    synopsis:
      'Paul Atreides unites with the Fremen while balancing prophecy, vengeance, and a coming war that could reshape the known universe.',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    creator: {
      name: 'Denis Villeneuve',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80',
      bio: 'Acclaimed for immersive world-building and visionary sci-fi direction.',
    },
    cast: ['Timothee Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem'],
    crew: ['Cinematography: Greig Fraser', 'Music: Hans Zimmer', 'Production: Mary Parent'],
    pricing: {
      rent: '$6.99',
      buy: '$21.99',
      currency: 'USD',
      note: '4K HDR included',
    },
    reviews: [
      { id: 'r1', author: 'N. Reyes', score: 4.8, quote: 'Epic scale with remarkable emotional clarity.' },
      { id: 'r2', author: 'The Reel Desk', score: 4.5, quote: 'Mesmerizing visuals and thunderous sound design.' },
    ],
    stills: [
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1400&q=80',
      ...placeholderStills.slice(0, 2),
    ],
    relatedIds: ['oppenheimer', 'mission-impossible', 'arcane-league-of-legends'],
    progress: { percent: 72, elapsed: 'S1.E3' },
  },
  {
    id: 'wild-robot',
    title: 'The Wild Robot',
    type: 'Movie',
    year: 2024,
    duration: '1h 42m',
    ageRating: 'PG',
    rating: 7.9,
    heroImage:
      'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=67vbA5ZJdKQ',
    trailerLength: '2:08',
    synopsis:
      'After a shipwreck, a service robot stranded on an uninhabited island learns to adapt to wildlife and finds an unexpected family.',
    genres: ['Family', 'Animation', 'Adventure'],
    creator: {
      name: 'Chris Sanders',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=220&q=80',
      bio: 'Animation director known for warm character-driven storytelling.',
    },
    cast: ['Lupita Nyongo', 'Pedro Pascal', 'Catherine OHara', 'Kit Connor'],
    crew: ['Production Design: Raymond Zibach', 'Music: Kris Bowers', 'Editing: Mary Blee'],
    pricing: {
      rent: '$5.49',
      buy: '$17.99',
      currency: 'USD',
      note: 'Family bundle available',
    },
    reviews: [
      { id: 'r1', author: 'M. Chen', score: 4.5, quote: 'Tender and visually breathtaking.' },
      { id: 'r2', author: 'Frame Circle', score: 4.2, quote: 'A smart family film with big feelings.' },
    ],
    stills: placeholderStills,
    relatedIds: ['how-to-train-your-dragon', 'mufasa-the-lion-king', 'lilo-and-stitch'],
    progress: null,
  },
  {
    id: 'arcane-league-of-legends',
    title: 'Arcane: League of Legends',
    type: 'Series',
    year: 2021,
    duration: '9 Episodes',
    ageRating: '16+',
    rating: 9.0,
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=fXmAurh012s',
    trailerLength: '2:14',
    synopsis:
      'Two sisters are torn apart by conflict between Piltover and Zaun in this visually ambitious animated series set in the League universe.',
    genres: ['Animation', 'Action', 'Drama'],
    creator: {
      name: 'Christian Linke',
      role: 'Creator',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=220&q=80',
      bio: 'Writer and producer focusing on character-first stories in expansive worlds.',
    },
    cast: ['Hailee Steinfeld', 'Ella Purnell', 'Kevin Alejandro', 'Katie Leung'],
    crew: ['Studio: Fortiche', 'Music: Alex Seaver', 'Showrunner: Amanda Overton'],
    pricing: {
      rent: 'Included',
      buy: 'Included',
      currency: 'USD',
      note: 'Stream with subscription',
    },
    reviews: [
      { id: 'r1', author: 'R. Ellis', score: 4.8, quote: 'One of the best-looking animated series ever made.' },
      { id: 'r2', author: 'Vector News', score: 4.6, quote: 'Intense, emotional, and gorgeously crafted.' },
    ],
    stills: placeholderStills,
    relatedIds: ['dune-part-two', 'mission-impossible', 'martian'],
    progress: { percent: 55, elapsed: '51:16' },
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    type: 'Movie',
    year: 2017,
    duration: '2h 44m',
    ageRating: 'R',
    rating: 8.0,
    heroImage:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
    trailerLength: '2:35',
    synopsis:
      'A new blade runner unearths a long-buried secret that could plunge what remains of society into chaos.',
    genres: ['Sci-Fi', 'Neo-Noir', 'Drama'],
    creator: {
      name: 'Denis Villeneuve',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80',
      bio: 'Known for atmospheric, thought-provoking science fiction.',
    },
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Sylvia Hoeks'],
    crew: ['Cinematography: Roger Deakins', 'Music: Hans Zimmer', 'Editing: Joe Walker'],
    pricing: {
      rent: '$3.99',
      buy: '$14.99',
      currency: 'USD',
      note: 'Dolby Vision available',
    },
    reviews: [
      { id: 'r1', author: 'S. Grant', score: 4.7, quote: 'A meditative visual masterpiece.' },
      { id: 'r2', author: 'Night Screen', score: 4.4, quote: 'Stunning cinematography and mood.' },
    ],
    stills: placeholderStills,
    relatedIds: ['oppenheimer', 'dune-part-two', 'martian'],
    progress: { percent: 55, elapsed: '1h 25m' },
  },
  {
    id: 'martian',
    title: 'The Martian',
    type: 'Movie',
    year: 2015,
    duration: '2h 24m',
    ageRating: 'PG-13',
    rating: 8.0,
    heroImage:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=ej3ioOneTy8',
    trailerLength: '3:02',
    synopsis:
      'An astronaut presumed dead is stranded on Mars and must use science and ingenuity to survive until rescue.',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    creator: {
      name: 'Ridley Scott',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=220&q=80',
      bio: 'Legendary director behind genre-defining science fiction and historical epics.',
    },
    cast: ['Matt Damon', 'Jessica Chastain', 'Kate Mara', 'Chiwetel Ejiofor'],
    crew: ['Screenplay: Drew Goddard', 'Music: Harry Gregson-Williams', 'Editing: Pietro Scalia'],
    pricing: {
      rent: '$3.99',
      buy: '$13.99',
      currency: 'USD',
      note: 'Watch party enabled',
    },
    reviews: [
      { id: 'r1', author: 'C. Day', score: 4.5, quote: 'A thrilling, surprisingly funny survival story.' },
      { id: 'r2', author: 'Orbital Journal', score: 4.2, quote: 'Science-forward and endlessly watchable.' },
    ],
    stills: placeholderStills,
    relatedIds: ['dune-part-two', 'oppenheimer', 'blade-runner-2049'],
    progress: { percent: 34, elapsed: '36m' },
  },
  {
    id: 'lilo-and-stitch',
    title: 'Lilo & Stitch',
    type: 'Movie',
    year: 2025,
    duration: '1h 48m',
    ageRating: 'PG',
    rating: 7.2,
    heroImage:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=V7yqW64Dx7c',
    trailerLength: '2:11',
    synopsis:
      'A lonely Hawaiian girl adopts what she thinks is a dog, only to discover a fugitive alien who slowly learns what family means.',
    genres: ['Family', 'Comedy', 'Adventure'],
    creator: {
      name: 'Dean Fleischer Camp',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=220&q=80',
      bio: 'Filmmaker focused on heartfelt stories blending comedy and emotional depth.',
    },
    cast: ['Maia Kealoha', 'Sydney Agudong', 'Chris Sanders'],
    crew: ['Music: Dan Romer', 'Editing: Phillip Bartell', 'Production: Dan Lin'],
    pricing: {
      rent: '$5.99',
      buy: '$19.99',
      currency: 'USD',
      note: 'Family profile recommendations',
    },
    reviews: [
      { id: 'r1', author: 'L. Hart', score: 4.1, quote: 'Sweet, playful, and full of heart.' },
      { id: 'r2', author: 'Island Reel', score: 3.9, quote: 'A charming family-friendly reimagining.' },
    ],
    stills: placeholderStills,
    relatedIds: ['wild-robot', 'mufasa-the-lion-king', 'how-to-train-your-dragon'],
    progress: null,
  },
  {
    id: 'straume',
    title: 'Straume',
    type: 'Movie',
    year: 2024,
    duration: '1h 39m',
    ageRating: 'PG-13',
    rating: 7.9,
    heroImage:
      'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=R2nKf7xQp6M',
    trailerLength: '1:58',
    synopsis:
      'A drifting traveler is swept into a strange coastal city where memory and identity begin to blur.',
    genres: ['Drama', 'Mystery'],
    creator: {
      name: 'Ilze Karklins',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=220&q=80',
      bio: 'Baltic filmmaker known for atmospheric mood pieces and visual minimalism.',
    },
    cast: ['Elina Vaska', 'Juris Ozols', 'Marta Silina'],
    crew: ['Cinematography: Andris Ozols', 'Music: Mara Beinerte', 'Editing: Dace Krastina'],
    pricing: {
      rent: '$4.49',
      buy: '$12.99',
      currency: 'USD',
      note: 'Festival cut included',
    },
    reviews: [
      { id: 'r1', author: 'N. Solis', score: 4.2, quote: 'Hypnotic and quietly devastating.' },
      { id: 'r2', author: 'BlueLight Mag', score: 4.0, quote: 'A moody indie with rich texture.' },
    ],
    stills: placeholderStills,
    relatedIds: ['oppenheimer', 'martian', 'blade-runner-2049'],
    progress: null,
  },
  {
    id: 'mission-impossible',
    title: 'Mission: Impossible',
    type: 'Movie',
    year: 2025,
    duration: '2h 31m',
    ageRating: 'PG-13',
    rating: 8.2,
    heroImage:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=avz06PDqDbM',
    trailerLength: '2:26',
    synopsis:
      'Ethan Hunt and the IMF race across continents to prevent a global cyber weapon from falling into the wrong hands.',
    genres: ['Action', 'Thriller'],
    creator: {
      name: 'Christopher McQuarrie',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=220&q=80',
      bio: 'Known for practical stunt spectacle and tight espionage storytelling.',
    },
    cast: ['Tom Cruise', 'Hayley Atwell', 'Ving Rhames', 'Simon Pegg'],
    crew: ['Stunts: Wade Eastwood', 'Music: Lorne Balfe', 'Editing: Eddie Hamilton'],
    pricing: {
      rent: '$6.49',
      buy: '$20.99',
      currency: 'USD',
      note: 'IMAX enhanced version available',
    },
    reviews: [
      { id: 'r1', author: 'D. Brooks', score: 4.6, quote: 'Pure action craftsmanship.' },
      { id: 'r2', author: 'Pulse Cinema', score: 4.3, quote: 'High-speed thrills with strong set pieces.' },
    ],
    stills: placeholderStills,
    relatedIds: ['dune-part-two', 'oppenheimer', 'arcane-league-of-legends'],
    progress: null,
  },
  {
    id: 'mufasa-the-lion-king',
    title: 'Mufasa: The Lion King',
    type: 'Movie',
    year: 2024,
    duration: '1h 58m',
    ageRating: 'PG',
    rating: 6.6,
    heroImage:
      'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1800&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=o17MF9vnabg',
    trailerLength: '2:04',
    synopsis:
      'An origin story of Mufasa that explores loyalty, family, and destiny across the Pride Lands.',
    genres: ['Family', 'Drama', 'Adventure'],
    creator: {
      name: 'Barry Jenkins',
      role: 'Director',
      avatar:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=220&q=80',
      bio: 'Oscar-winning storyteller blending lyrical visuals with character-rich drama.',
    },
    cast: ['Aaron Pierre', 'Kelvin Harrison Jr.', 'John Kani', 'Seth Rogen'],
    crew: ['Music: Nicholas Britell', 'Editing: Joi McMillon', 'Production: Adele Romanski'],
    pricing: {
      rent: '$5.49',
      buy: '$18.99',
      currency: 'USD',
      note: 'Family watch mode supported',
    },
    reviews: [
      { id: 'r1', author: 'R. Noble', score: 3.9, quote: 'Beautifully rendered with heartfelt moments.' },
      { id: 'r2', author: 'Sunset Review', score: 3.7, quote: 'A polished prequel with strong visuals.' },
    ],
    stills: placeholderStills,
    relatedIds: ['wild-robot', 'lilo-and-stitch', 'how-to-train-your-dragon'],
    progress: null,
  },
]

export const filmDetailsById = Object.fromEntries(filmDetails.map((film) => [film.id, film]))

export function getFilmDetailById(id) {
  return filmDetailsById[id] ?? null
}
