
export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  explanation: string;
  multipleCorrect: boolean;
  section: string;
}

export const quizSections = [
  "food & drink",
  "culture & customs",
  "geography & places", 
  "language & social",
  "nature",
  "shops & commerce"
];

export const questions: Question[] = [
  // Food & Drink
  {
    id: 1,
    text: "Where would you find a vegan sausage roll?",
    answers: [
      { text: "Cancer Research UK", isCorrect: false },
      { text: "Greggs", isCorrect: true },
      { text: "In the biscuit aisle of Waitrose", isCorrect: false },      
      { text: "3 Mobile", isCorrect: false }
    ],
    explanation: "Greggs is famous for their vegan sausage rolls, which became an unexpected hit when launched!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 2,
    text: "Which of these is NOT a type of tea?",
    answers: [
      { text: "Breakfast", isCorrect: false },
      { text: "Earl Grey", isCorrect: false },
      { text: "Jane Eyre", isCorrect: true },
      { text: "Jasmine", isCorrect: false }
    ],
    explanation: "Jane Eyre is a novel by Charlotte Brontë, not a type of tea!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 3,
    text: "Which of these phrases does NOT refer to a drink?",
    answers: [
      { text: "Bev", isCorrect: false },
      { text: "Bevvy", isCorrect: false },
      { text: "Bevvywev", isCorrect: true }
    ],
    explanation: "Bevvywev is a made-up word - the others are slang terms for beverages!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 4,
    text: "What is a 'Half'?",
    answers: [
      { text: "A pointless amount of beer", isCorrect: true },
      { text: "A half dozen, as in six eggs", isCorrect: false },
      { text: "Half a line of cocaine", isCorrect: false },
      { text: "A 350ml bottle of wine", isCorrect: false }
    ],
    explanation: "A 'half' refers to half a pint of beer, which some consider a rather modest serving!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 5,
    text: "Which of these is NOT a type of roll?",
    answers: [
      { text: "Bread roll", isCorrect: false },
      { text: "Egg roll", isCorrect: false },
      { text: "Rolls Royce", isCorrect: true },
      { text: "Swiss roll", isCorrect: false },
      { text: "Sausage roll", isCorrect: false }
    ],
    explanation: "Car salesman Charles Rolls and engineer Henry Royce created the Rolls-Royce which is a car, not a roll",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 6,
    text: "What does Mr Kipling make?",
    answers: [
      { text: "Exceedingly good cakes", isCorrect: true },
      { text: "Wonderful fried fish", isCorrect: false },
      { text: "Exceptional Yorkshire pudding", isCorrect: false },
      { text: "The very best Kippers", isCorrect: false }
    ],
    explanation: "Mr Kipling's slogan is 'exceedingly good cakes' - they're a famous cake brand in the UK!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 7,
    text: "What is NOT a magnum?",
    answers: [
      { text: "A big bottle of champagne", isCorrect: false },
      { text: "A big pork pie", isCorrect: true },
      { text: "A big ice cream", isCorrect: false },
      { text: "A big gun", isCorrect: false }
    ],
    explanation: "While magnums come in ice cream, champagne and gun varieties, there's no such thing as a magnum pork pie!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 8,
    text: "What is Birdseye least likely to refer to?",
    answers: [
      { text: "A bag of peas", isCorrect: false },
      { text: "Bread and butter pudding", isCorrect: true },
      { text: "A fish finger", isCorrect: false }
    ],
    explanation: "Birdseye is a frozen food brand famous for peas and fish fingers, but they don't make bread and butter pudding!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 9,
    text: "Which would you probably NOT have for tea? (although you're welcome to have any)",
    answers: [
      { text: "Tea", isCorrect: false },
      { text: "Chips", isCorrect: false },
      { text: "Cornflakes", isCorrect: true }
    ],
    explanation: "In Britain, 'tea' can refer to the evening meal, and cornflakes are typically a breakfast food!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 10,
    text: "Which of these is NOT dinner?",
    answers: [
      { text: "Elevenses", isCorrect: true },
      { text: "Tea", isCorrect: false },
      { text: "High tea", isCorrect: false },
      { text: "Supper", isCorrect: false },
      { text: "Dinner", isCorrect: false }
    ],
    explanation: "Elevenses is a mid-morning snack, usually around 11am (hence the name)!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 11,
    text: "Which of these is NOT considered one of the UK's specialities?",
    answers: [
      { text: "Chips and gravy", isCorrect: false },
      { text: "Pie and a pint", isCorrect: false },
      { text: "Deconstructed shepherd's pie", isCorrect: true },
      { text: "Gala pie", isCorrect: false },     
      { text: "Fried Mars bars", isCorrect: false }
    ],
    explanation: "Deconstructed shepherd's pie is a fancy modern invention, not a traditional English specialty!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 12,
    text: "Which of these is NOT a common accompaniment for chips?",
    answers: [
      { text: "Horseradish sauce", isCorrect: true },
      { text: "Cheese", isCorrect: false },
      { text: "Gravy", isCorrect: false },
      { text: "Mushy peas", isCorrect: false }
    ],
    explanation: "While Brits love chips with cheese, gravy or mushy peas, horseradish is usually reserved for roast beef!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 13,
    text: "Which is NOT a classic crisp flavour?",
    answers: [
      { text: "Cheese and Onion", isCorrect: false },
      { text: "Beef Wellington", isCorrect: true },
      { text: "Prawn Cocktail", isCorrect: false },
      { text: "Salt and Vinegar", isCorrect: false },
      { text: "Ready Salted", isCorrect: false }
    ],
    explanation: "Beef Wellington is a dish, not a crisp flavor! The others are classic British crisp flavors.",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 14,
    text: "What would you NOT find in a Sunday roast?",
    answers: [
      { text: "Carrots", isCorrect: false },
      { text: "Roast potatoes", isCorrect: false },
      { text: "Parsnips", isCorrect: false },
      { text: "Jellied eels", isCorrect: true }
    ],
    explanation: "Jellied eels is not part of a Sunday roast dinner!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 15,
    text: "Which of these are you LEAST likely to find in a full English breakfast?",
    answers: [
      { text: "Fried Bread", isCorrect: false },
      { text: "Egg", isCorrect: false },
      { text: "Bangers", isCorrect: false },
      { text: "Grilled tomato", isCorrect: false },
      { text: "Boiled egg with soldiers", isCorrect: true },
      { text: "Beans", isCorrect: false }
    ],
    explanation: "Yes, eggie-wegs and soldiers would be a separate order. ",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 16,
    text: "Marmite is made from",
    answers: [
      { text: "Refined malt extract", isCorrect: false },
      { text: "Yeast extract", isCorrect: true },
      { text: "Concentrated beef stock", isCorrect: false },
      { text: "Reduced soy sauce", isCorrect: false }
    ],
    explanation: "Marmite is made from yeast extract, a by-product of beer brewing!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 17,
    text: "Which of these is neither a potato nor an apple?",
    answers: [
      { text: "Pink Lady", isCorrect: false },
      { text: "King Edward", isCorrect: false },
      { text: "James Turner", isCorrect: true },
      { text: "Maris Piper", isCorrect: false },
      { text: "Granny Smith", isCorrect: false }
    ],
    explanation: "James Turner is a person's name, not a variety of potato or apple!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 18,
    text: "What is toad in the hole?",
    answers: [
      { text: "It's a toad in a hole", isCorrect: false },
      { text: "It's potatoes in gravy", isCorrect: false },
      { text: "It's pig in pancake mix", isCorrect: true },
      { text: "It's pig in a blanket of sliced pig", isCorrect: false }
    ],
    explanation: "Toad in the hole is sausages (the 'pig') baked in Yorkshire pudding batter (the 'pancake mix')!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 19,
    text: "What is a Ploughman's Lunch?",
    answers: [
      { text: "Beer, Vodka and a Whisky Chaser", isCorrect: false },
      { text: "Cheese, Pickle, Onion, Bread", isCorrect: true },
      { text: "Leek, Bean, Celery Soup", isCorrect: false }
    ],
    explanation: "A Ploughman's is a cold meal of cheese, pickle, pickled onion, bread, and often some salad items!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 20,
    text: "Which of these is NOT a biscuit?",
    answers: [
      { text: "Ginger Nut", isCorrect: false },
      { text: "Bourbon", isCorrect: false },
      { text: "Hob Nob", isCorrect: false },
      { text: "Chocolate Digestive", isCorrect: false },
      { text: "Monster Munch", isCorrect: true },
      { text: "Custard Cream", isCorrect: false }
    ],
    explanation: "Monster Munch are crisps (potato chips), not biscuits!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 21,
    text: "Which is NOT a chocolate bar? Select multiple answers",
    answers: [
      { text: "Lion", isCorrect: false },
      { text: "Chumbawumba", isCorrect: true },
      { text: "Wispa", isCorrect: false },
      { text: "Twirl", isCorrect: false },
      { text: "Aero", isCorrect: false },
      { text: "Quattro", isCorrect: true },
      { text: "Flake", isCorrect: false },
      { text: "Bounty", isCorrect: false },
      { text: "Crunchy Nut", isCorrect: true },
      { text: "KitKat Chunky", isCorrect: false },
      { text: "Yorkie", isCorrect: false }
    ],
    explanation: "Chumbawumba was a band, Quattro was a car, and Crunchy Nut is a cereal!",
    multipleCorrect: true,
    section: "food & drink"
  },
  {
    id: 22,
    text: "What is spotted dick?",
    answers: [
      { text: "A warm fruity sponge pudding", isCorrect: true },
      { text: "A classic tale from English folklore", isCorrect: false },
      { text: "An embarrassing ailment", isCorrect: false },
      { text: "A Dalmation named Richard", isCorrect: false }
    ],
    explanation: "Spotted dick is a traditional British steamed sponge pudding containing dried fruit (the 'spots')!",
    multipleCorrect: false,
    section: "food & drink"
  },
  // culture & customs
  {
    id: 23,
    text: "Which of the three holes in a plug socket does NOT carry dangerous electricity?",
    answers: [
      { text: "The left one", isCorrect: false },
      { text: "The right one", isCorrect: false },
      { text: "The top one", isCorrect: true }
    ],
    explanation: "The top hole is the earth pin and doesn't carry current under normal circumstances!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 24,
    text: "Which of these songs would be least appropriate as the last song at a wedding disco?",
    answers: [
      { text: "Mr Brightside by The Killers", isCorrect: false },
      { text: "Nothing Compares 2 U by Sinead O'Connor", isCorrect: true },
      { text: "Wonderwall by Oasis", isCorrect: false }
    ],
    explanation: "Nothing Compares 2 U is a sad breakup song - not ideal for ending a fun disco night!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 25,
    text: "Who are Bill and Ben?",
    answers: [
      { text: "The boys from the blackstuff", isCorrect: false },
      { text: "A grime duo from East London", isCorrect: false },
      { text: "Flowerpot men", isCorrect: true },
      { text: "Two contestants who were kicked off 'Love Island'", isCorrect: false }
    ],
    explanation: "Bill and Ben are the Flowerpot Men, characters from a classic British children's TV show!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 26,
    text: "What special award was given to amazing people on the show Blue Peter?",
    answers: [
      { text: "Lifetime entry to most National Trust sites", isCorrect: false },
      { text: "A signed photograph of presenter Konnie Huq", isCorrect: false },
      { text: "A badge", isCorrect: true }
    ],
    explanation: "Blue Peter badges are coveted awards given on the long-running children's TV show!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 27,
    text: "Which are real rides at Thorpe Park theme park? Select two.",
    answers: [
      { text: "Don't Blink Twice", isCorrect: false },
      { text: "Colossus", isCorrect: true },
      { text: "Nemesis Inferno", isCorrect: true },
      { text: "Hammer Time", isCorrect: false },
      { text: "Wet N Wild", isCorrect: false },
      { text: "The Pincher", isCorrect: false }
    ],
    explanation: "Colossus and Nemesis are both famous roller coasters at Thorpe Park!",
    multipleCorrect: true,
    section: "culture & customs"
  },
  // Geography & Places
  {
    id: 28,
    text: "Which of these lunch items is not also a town?",
    answers: [
      { text: "Sandwich", isCorrect: false },
      { text: "Gravy", isCorrect: true },
      { text: "Cheddar", isCorrect: false },
      { text: "Stilton", isCorrect: false }
    ],
    explanation: "Sandwich, Cheddar, and Stilton are real towns in England, but there's no town called Gravy!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 29,
    text: "When is the much anticipated BIN DAY?",
    answers: [
      { text: "The day after Christmas", isCorrect: false },
      { text: "4th July", isCorrect: false },
      { text: "A day chosen by your local council", isCorrect: true },
      { text: "The day before British Summer Time starts", isCorrect: false }
    ],
    explanation: "Bin collection days vary depending on where you live in the UK - it's set by your local council!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 30,
    text: "Which is NOT on a modern tube and overground map?",
    answers: [
      { text: "The Victoria Line", isCorrect: false },
      { text: "The Elizabeth Line", isCorrect: false },
      { text: "The Hammersmith & City Line", isCorrect: false },
      { text: "The Southern Line", isCorrect: true },
      { text: "The Suffragette Line", isCorrect: false }
    ],
    explanation: "There's no 'Southern Line' on the London Underground or Overground map!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 31,
    text: "Which is NOT a major English football team?",
    answers: [
      { text: "Arsenal", isCorrect: false },
      { text: "Westminster", isCorrect: true },
      { text: "Tottenham", isCorrect: false },
      { text: "Chelsea", isCorrect: false },
      { text: "Manchester United", isCorrect: false }
    ],
    explanation: "Westminster is an area of London and the seat of government, not a football team!",
    multipleCorrect: false,
    section: "geography & places"
  },
  // Language & Social
  {
    id: 32,
    text: "What is generally considered the most socially unacceptable behaviour in a queue in the UK?",
    answers: [
      { text: "Asking how long the queue is", isCorrect: false },
      { text: "Having a conversation with a person further up the queue", isCorrect: false },
      { text: "Making eye contact with someone further up the queue", isCorrect: false },
      { text: "Moving in before a person further up the queue", isCorrect: true }
    ],
    explanation: "Queueing is a serious business in the UK, and pushing in is a declaration of war on British politeness",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 33,
    text: "Which is NOT a typical description of a drunk person?",
    answers: [
      { text: "Smashed", isCorrect: false },
      { text: "Trolleyed", isCorrect: false },
      { text: "Hammered", isCorrect: false },
      { text: "Boshed", isCorrect: true }
    ],
    explanation: "While 'boshed' might be used in some regions, it's not a common term for being drunk across the UK!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 34,
    text: "A number of these phrases can be used to excuse your action as mere tomfoolery. Which one is made up?",
    answers: [
      { text: "Bants e.g it's just bants", isCorrect: false },
      { text: "Joshing e.g. I'm only joshing", isCorrect: false },
      { text: "Cooking e.g. you're cooking me breakfast mate", isCorrect: true },
      { text: "Dicking e.g. we were only dicking around", isCorrect: false }
    ],
    explanation: "'Cooking' isn't used as a term for tomfoolery in British slang!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 35,
    text: "Which is the correct reply to the following statement, \"you ain't my muvva!\"",
    answers: [
      { text: "I am your father", isCorrect: false },
      { text: "Your mum", isCorrect: false },
      { text: "Yes I am!", isCorrect: true },
    ],
    explanation: "The response 'You aint my mother' is the last line from a pivotal and dramatic moment in Eastenders.",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 36,
    text: "What does 'not bad' mean",
    answers: [
      { text: "It's not bad, but it's pretty p*ss poor", isCorrect: false },
      { text: "It's bad", isCorrect: false },
      { text: "It's not bad, it's pretty good", isCorrect: true }
    ],
    explanation: "In British understatement, 'not bad' actually means something is quite good!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 37,
    text: "Which of these classes does NOT (stereotypically) like horses?",
    answers: [
      { text: "Working class", isCorrect: false },
      { text: "Middle class", isCorrect: true },
      { text: "Upper class", isCorrect: false },
      { text: "The landed gentry", isCorrect: true }
    ],
    explanation: "While working class may enjoy horse racing and the upper class and landed gentry enjoy fox hunting, middle class stereotypically don't have the same association with horses!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 38,
    text: "Britain has a number of colourful ways to refer to a wife. Which isn't one?",
    answers: [
      { text: "Love", isCorrect: false },
      { text: "Babes", isCorrect: false },
      { text: "Missus", isCorrect: false },
      { text: "The boss", isCorrect: false },
      { text: "Me Bread Pudding", isCorrect: true },
      { text: "The Old Ball and Chain", isCorrect: false }
    ],
    explanation: "'Me bread pudding isn't a common term for a wife in Britain!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 39,
    text: "British people have a number of antiquated ways to show shock. Which isn't one?",
    answers: [
      { text: "Goodness me", isCorrect: false },
      { text: "Gosh", isCorrect: false },
      { text: "Jesus", isCorrect: false },
      { text: "Lord", isCorrect: false },
      { text: "Cor Blimey", isCorrect: false },
      { text: "Bloody hell", isCorrect: false },
      { text: "Golly", isCorrect: false },
      { text: "Heavens", isCorrect: false },
      { text: "Crikey", isCorrect: false },
      { text: "Ah bisto", isCorrect: true }
    ],
    explanation: "'Ah Bisto' is an advertising slogan for gravy, not an expression of shock!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 40,
    text: "What does \"pull the other one mate\" mean?",
    answers: [
      { text: "I don't have time for this", isCorrect: false },
      { text: "Try the other beer pump", isCorrect: false },
      { text: "I don't beleive you", isCorrect: true }
    ],
    explanation: "'Pull the other one' is shorthand for 'pull the other leg, it's got bells on' - meaning 'I don't believe you'!",
    multipleCorrect: false,
    section: "language & social"
  },
  // Nature
  {
    id: 41,
    text: "Britain does NOT have",
    answers: [
      { text: "Parakeets", isCorrect: false },
      { text: "Raccoons", isCorrect: true },
      { text: "Red squirrels", isCorrect: false },
      { text: "Tawny owls", isCorrect: false }
    ],
    explanation: "While Britain has wild parakeets, red squirrels and tawny owls, there are no wild raccoons!",
    multipleCorrect: false,
    section: "nature"
  },
  // Shops & Commerce
  {
    id: 42,
    text: "Which of these is least likely to have a bureau de change?",
    answers: [
      { text: "Post Office", isCorrect: false },
      { text: "Poundland", isCorrect: true },
      { text: "Marks and Spencer", isCorrect: false },
      { text: "The Money Exchange", isCorrect: false }
    ],
    explanation: "Poundland is a discount store where things cost £1 or so - they don't offer currency exchange!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 43,
    text: "Which of these coins is NOT a real coin?",
    answers: [
      { text: "20p", isCorrect: false },
      { text: "25p", isCorrect: true },
      { text: "50p", isCorrect: false },
      { text: "5p", isCorrect: false }
    ],
    explanation: "The UK has 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2 coins, but no 25p coin in general circulation!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 44,
    text: "Which of these surnames is NOT in the name of a high street shop?",
    answers: [
      { text: "Lewis", isCorrect: false },
      { text: "Dyas", isCorrect: false },
      { text: "Timpson", isCorrect: false },
      { text: "Thatcher", isCorrect: true }
    ],
    explanation: "While John Lewis, Robert Dyas and Timpson are all high street shops, there's no Thatcher store chain!",
    multipleCorrect: false,
    section: "shops & commerce"
  }
];
