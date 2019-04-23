
const music = [
    {
        artist: 'Oasis',
        songs: ['Wonderwall', 'Morning Glory', 'Live Forever', 'Acquiesce', 'Don\'t Look Back In Anger'],
        albums: ['Definitely Maybe', '(What\'s the Story) Morning Glory', 'Standing on the Shoulders of Giants'],
        genre: 'Brit-pop'
    },
    {
        artist: 'Massive Attack',
        songs: ['Teardrop', 'Risingson', 'Angel', 'Protection', 'Unfinished Sympathy'],
        albums: ['Blue Lines', 'Protection', 'Mezzanine'],
        genre: 'trip-hop'
    },
    {
        artist: 'Nirvana',
        songs: ['Smells Like Teen Spirit', 'Come As You Are', 'About A Girl', 'All Apologies', 'Rape Me'],
        albums: ['Bleach', 'Nevermind', 'In Utero', 'Mtv Unplugged In New York'],
        genre: 'grunge'
    },
    {
        artist: 'Metallica',
        songs: ['Enter Sandman', 'Sad But True', 'Master of Puppets', 'Whiplash', 'Jump In The Fire', 'Blackened', 'Ride The Lightning'],
        albums: ['...And Justice For All', 'Ride The Lightning', 'Master of Puppets', 'The Black Album', 'Kill \'Em All'],
        genre: 'metal'
    },
    {
        artist: 'Deadmau5',
        songs: ['I Remember', 'Ghosts \'n Stuff', 'Maths', 'Strobe', 'Some Chords', 'Raise Your Weapon'],
        albums: ['4x4=12', 'Random Album Title', 'For Lack of a Better Name', 'Album Title Goes Here'],
        genre: 'EDM'
    },
    {
        artist: 'Weezer',
        songs: ['El Scorcho', 'My Name Is Jonas', 'Say It Ain\'t So', 'Beverly Hills', 'Hash Pipe'],
        albums: ['The Blue Album', 'The Green Album', 'The Black Album', 'The White Album', 'Pinkerton'],
        genre: 'indie rock'
    }
];


const books = [
    {
        author: 'John Steinbeck',
        books: ['The Grapes of Wrath', 'The Pearl', 'Cannery Row', 'East of Eden', 'Of Mice And Men', 'Of Dubious Battle'],
        nationality: 'American'
    },
    {
        author: 'Toni Morrison',
        books: ['Song of Solomon', 'Beloved', 'Jazz', 'A Mercy', 'The Bluest Eye'],
        nationality: 'American'
    },
    {
        author: 'Paulo Coehlo',
        books: ['The Alchemist', 'Veronica Decides To Die', 'Eleven Minutes', 'Brida', 'The Fifth Mountain'],
        nationality: 'Brazilian'
    },
    {
        author: 'F. Scott Fitzgerald',
        books: ['The Great Gatsby'],
        nationality: 'American'
    },
    {
        author: 'Ernest Hemingway',
        books: ['A Farewell To Arms', 'The Sun Also Rises', 'The Old Man and the Sea'],
        nationality: 'American'
    },
    {
        author: 'John Kennedy O\'Toole',
        books: ['A Confederacy of Dunces'],
        nationality: 'American'
    },
    {
        author: 'Frank Herbert',
        books: ['Dune'],
        nationality: 'American'
    },
    {
        author: 'Alex Haley',
        books: ['The Autobiography of Malcolm X', 'Roots', 'Queen'],
        nationality: 'American'
    },
    {
        author: 'Mikhail Bulgakov',
        books: ['The Master And Margarita'],
        nationality: 'Russian'
    }
];

const directors = [
    {
        director: 'Stanley Kubrick',
        films: ['Dr. Strangelove', '2001: A Space Odyssey', 'Eyes Wide Shut', 'The Shining'],
        nationality: 'American'
    },
    {
        director: 'Guillermo Del Toro',
        films: ['Pan\'s Labyrinth', 'The Shape of Water', 'Hellboy', 'Pacific Rim'],
        nationality: 'Mexican'
    },
    {
        director: 'Kathryn Bigelow',
        films: ['Point Break', 'Zero Dark Thirty', 'The Hurt Locker'],
        nationality: 'American'
    },
    {
        director: 'Woody Allen',
        films: ['The Purple Rose of Cairo', 'Blue Jasmine', 'Annie Hall', 'Midnight in Paris'],
        nationality: 'American'
    },
    {
        director: 'John Woo',
        films: ['A Better Tomorrow', 'Hard Boiled', 'Hard Target', 'Face/Off', 'Mission: Impossible II'],
        nationality: 'Chinese'
    },
    {
        director: 'Quentin Tarantino',
        films: ['Pulp Fiction', 'Reservoir Dogs', 'Django Unchained', 'Inglorious Basterds'],
        nationality: 'American'
    },
    {
        director: 'Hayao Miyazaki',
        films: ['Spirited Away', 'My Neighbor Totoro', 'Howl\'s Moving Castle', 'Princess Mononoke'],
        nationality: 'Japanese'
    }
];

const nations = [
    {
        nation: 'U.S.A.',
        cities: ['San Francisco', 'New York City', 'Washington, D.C.', 'Los Angeles', 'Portland'],
        landmarks: ['The Grand Canyon', 'Washington Monument', 'Niagara Falls', 'Golden Gate Bridge', 'The Great Lakes']
    },
    {
        nation: 'France',
        cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
        landmarks: ['The Eiffel Tower', 'The Louvre', 'The Cathedral of Notre Dame', 'Niagara Falls', 'The Great Lakes']
    },
    {
        nation: 'Spain',
        cities: ['Madrid', 'Barcelona', 'Valencia', 'Granada', 'Sevilla', 'Málaga'],
        landmarks: ['El Casco Antiguo de Benidorm', 'Catedral de Mallorca', 'Alhambra', 'Basilica of the Sagrada Familia', 'The Great Lakes', 'Niagara Falls']
    },
    {
        nation: 'South Korea',
        cities: ['Seoul', 'Busan', 'Gwangju', 'Daegu', 'Incheon', 'Ilsan'],
        landmarks: ['Seorak Mountain', 'The Demilitarized Zone', 'The War Memorial Museum', 'Panmunjom', 'The Great East Gate (Dongdaemun)', 'Gyeongbok Palace']
    },
    {
        nation: 'Canada',
        cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton'],
        landmarks: ['The CN Tower', 'Niagara Falls', 'The Great Lakes', 'Chateau Frontenac', 'Chateau Lake Louise']
    },
    {
        nation: 'Thailand',
        cities: ['Chaing Mai', 'Chaing Rai', 'Phuket', 'Bangkok', 'Samut Prakan'],
        landmarks: ['Big Buddha Phuket', 'Bangla Road', 'Temple of the Reclining Buddha (Wat Pho)', 'Temple of Dawn (Wat Arun)']
    }
];

export { music, books, directors, nations};