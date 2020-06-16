const words = [
  "alarm",
  "animal",
  "aunt",
  "bait",
  "balloon",
  "bath",
  "bead",
  "beam",
  "bean",
  "bedroom",
  "boot",
  "bread",
  "brick",
  "brother",
  "camp",
  "chicken",
  "children",
  "crook",
  "deer",
  "dock",
  "doctor",
  "downtown",
  "drum",
  "dust",
  "eye",
  "family",
  "father",
  "fight",
  "flesh",
  "food",
  "frog",
  "goose",
  "grade",
  "grandfather",
  "grandmother",
  "grape",
  "grass",
  "hook",
  "horse",
  "jail",
  "jam",
  "kiss",
  "kitten",
  "light",
  "loaf",
  "lock",
  "lunch",
  "lunchroom",
  "meal",
  "mother",
  "notebook",
  "owl",
  "pail",
  "parent",
  "park",
  "plot",
  "rabbit",
  "rake",
  "robin",
  "sack",
  "sail",
  "scale",
  "sea",
  "sister",
  "soap",
  "song",
  "spark",
  "space",
  "spoon",
  "spot",
  "spy",
  "summer",
  "tiger",
  "toad",
  "town",
  "trail",
  "tramp",
  "tray",
  "trick",
  "trip",
  "uncle",
  "vase",
  "winter",
  "water",
  "week",
  "wheel",
  "wish",
  "wool",
  "yard",
  "zebra",
  "women",
];

export const chooseWord = () => words[Math.floor(Math.random() * words.length)];
