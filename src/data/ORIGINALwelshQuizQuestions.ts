
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
    text: "What is cawl?",
    answers: [
      { text: "A traditional Welsh stew", isCorrect: true },
      { text: "A type of Welsh bread", isCorrect: false },
      { text: "A Welsh musical instrument", isCorrect: false },
      { text: "A Welsh dance", isCorrect: false }
    ],
    explanation: "Cawl is Wales' national dish - a hearty stew traditionally made with lamb or beef and seasonal vegetables!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 2,
    text: "Which cheese is famously Welsh?",
    answers: [
      { text: "Cheddar", isCorrect: false },
      { text: "Caerphilly", isCorrect: true },
      { text: "Stilton", isCorrect: false },
      { text: "Wensleydale", isCorrect: false }
    ],
    explanation: "Caerphilly cheese originates from the Welsh town of Caerphilly and is a traditional Welsh cheese!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 3,
    text: "What are Welsh cakes cooked on?",
    answers: [
      { text: "In an oven", isCorrect: false },
      { text: "A griddle or bakestone", isCorrect: true },
      { text: "Over an open fire", isCorrect: false },
      { text: "In a deep fryer", isCorrect: false }
    ],
    explanation: "Welsh cakes are traditionally cooked on a bakestone (maen) or griddle, giving them their distinctive flat shape!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 4,
    text: "What is bara brith?",
    answers: [
      { text: "A Welsh fruit bread", isCorrect: true },
      { text: "A type of Welsh beer", isCorrect: false },
      { text: "A Welsh vegetable", isCorrect: false },
      { text: "A Welsh seasoning", isCorrect: false }
    ],
    explanation: "Bara brith means 'speckled bread' in Welsh and is a traditional fruit loaf made with tea-soaked dried fruit!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 5,
    text: "Which of these is NOT a traditional Welsh dish?",
    answers: [
      { text: "Faggots and peas", isCorrect: false },
      { text: "Laverbread", isCorrect: false },
      { text: "Haggis", isCorrect: true },
      { text: "Cockles", isCorrect: false }
    ],
    explanation: "Haggis is Scottish, not Welsh! The others are all traditional Welsh foods.",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 6,
    text: "What is laverbread made from?",
    answers: [
      { text: "Wheat flour", isCorrect: false },
      { text: "Seaweed", isCorrect: true },
      { text: "Oats", isCorrect: false },
      { text: "Barley", isCorrect: false }
    ],
    explanation: "Laverbread (bara lawr) is made from laver seaweed, boiled and minced into a dark green puree - it's considered a Welsh delicacy!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 7,
    text: "What drink is Wales famous for producing?",
    answers: [
      { text: "Whisky", isCorrect: false },
      { text: "Welsh ale and bitter", isCorrect: true },
      { text: "Gin", isCorrect: false },
      { text: "Rum", isCorrect: false }
    ],
    explanation: "Wales has a rich brewing tradition with famous breweries like Brains producing traditional Welsh ales and bitters!",
    multipleCorrect: false,
    section: "food & drink"
  },

  // Culture & Customs
  {
    id: 8,
    text: "What is an Eisteddfod?",
    answers: [
      { text: "A Welsh castle", isCorrect: false },
      { text: "A cultural festival of literature, music and performance", isCorrect: true },
      { text: "A type of Welsh hat", isCorrect: false },
      { text: "A Welsh sport", isCorrect: false }
    ],
    explanation: "An Eisteddfod is a Welsh festival celebrating literature, music, and performance. The National Eisteddfod is held annually!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 9,
    text: "What is Wales' national flower?",
    answers: [
      { text: "Rose", isCorrect: false },
      { text: "Thistle", isCorrect: false },
      { text: "Daffodil", isCorrect: true },
      { text: "Shamrock", isCorrect: false }
    ],
    explanation: "The daffodil (cenhinen Bedr) is Wales' national flower, worn on St. David's Day!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 10,
    text: "When is St. David's Day?",
    answers: [
      { text: "March 1st", isCorrect: true },
      { text: "March 17th", isCorrect: false },
      { text: "April 23rd", isCorrect: false },
      { text: "November 30th", isCorrect: false }
    ],
    explanation: "St. David's Day (Dydd Gŵyl Dewi) is celebrated on March 1st each year to honor Wales' patron saint!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 11,
    text: "What is the Welsh national costume traditionally worn by women?",
    answers: [
      { text: "Kilt and sporran", isCorrect: false },
      { text: "Welsh hat, shawl, and apron", isCorrect: true },
      { text: "Dirndl", isCorrect: false },
      { text: "Sari", isCorrect: false }
    ],
    explanation: "The traditional Welsh costume includes a tall black hat, red flannel shawl, and white apron over a long dress!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 12,
    text: "What is the Welsh male voice choir tradition famous for?",
    answers: [
      { text: "Opera singing", isCorrect: false },
      { text: "Harmonious choral singing", isCorrect: true },
      { text: "Rap music", isCorrect: false },
      { text: "Instrumental music", isCorrect: false }
    ],
    explanation: "Welsh male voice choirs are world-renowned for their powerful harmonious singing, especially of hymns and folk songs!",
    multipleCorrect: false,
    section: "culture & customs"
  },

  // Geography & Places
  {
    id: 13,
    text: "What is the highest mountain in Wales?",
    answers: [
      { text: "Ben Nevis", isCorrect: false },
      { text: "Snowdon (Yr Wyddfa)", isCorrect: true },
      { text: "Scafell Pike", isCorrect: false },
      { text: "Pen y Fan", isCorrect: false }
    ],
    explanation: "Snowdon (Yr Wyddfa in Welsh) is Wales' highest peak at 1,085 meters in the Snowdonia National Park!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 14,
    text: "Which city is the capital of Wales?",
    answers: [
      { text: "Swansea", isCorrect: false },
      { text: "Cardiff", isCorrect: true },
      { text: "Newport", isCorrect: false },
      { text: "Wrexham", isCorrect: false }
    ],
    explanation: "Cardiff (Caerdydd) has been the capital city of Wales since 1955!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 15,
    text: "What is the longest place name in Europe?",
    answers: [
      { text: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch", isCorrect: true },
      { text: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu", isCorrect: false },
      { text: "Krungthepmahanakhon", isCorrect: false },
      { text: "Chargoggagoggmanchauggagoggchaubunagungamaugg", isCorrect: false }
    ],
    explanation: "This Welsh village name has 58 letters and was created as a publicity stunt in the 1860s!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 16,
    text: "Which Welsh coastline is famous for its dramatic cliffs?",
    answers: [
      { text: "Pembrokeshire Coast", isCorrect: true },
      { text: "Jurassic Coast", isCorrect: false },
      { text: "Giant's Causeway", isCorrect: false },
      { text: "White Cliffs of Dover", isCorrect: false }
    ],
    explanation: "The Pembrokeshire Coast Path offers some of the most spectacular coastal scenery in Britain!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 17,
    text: "What type of landscape is the Brecon Beacons known for?",
    answers: [
      { text: "Flat farmland", isCorrect: false },
      { text: "Mountain peaks and moorland", isCorrect: true },
      { text: "Dense forests", isCorrect: false },
      { text: "Desert terrain", isCorrect: false }
    ],
    explanation: "The Brecon Beacons National Park is famous for its dramatic mountain peaks, including Pen y Fan!",
    multipleCorrect: false,
    section: "geography & places"
  },

  // Language & Social
  {
    id: 18,
    text: "What does 'Cymru' mean?",
    answers: [
      { text: "Hello", isCorrect: false },
      { text: "Wales", isCorrect: true },
      { text: "Thank you", isCorrect: false },
      { text: "Goodbye", isCorrect: false }
    ],
    explanation: "Cymru is the Welsh name for Wales, and Welsh people are called Cymry!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 19,
    text: "How do you say 'hello' in Welsh?",
    answers: [
      { text: "Shwmae", isCorrect: true },
      { text: "Bore da", isCorrect: false },
      { text: "Nos da", isCorrect: false },
      { text: "Hwyl fawr", isCorrect: false }
    ],
    explanation: "Shwmae (or Sut mae) is a common informal greeting meaning 'hello' or 'how are you?'",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 20,
    text: "What does 'Croeso i Gymru' mean?",
    answers: [
      { text: "Welcome to Wales", isCorrect: true },
      { text: "Goodbye from Wales", isCorrect: false },
      { text: "Made in Wales", isCorrect: false },
      { text: "Welsh language", isCorrect: false }
    ],
    explanation: "Croeso i Gymru means 'Welcome to Wales' - you'll see this on road signs at the Welsh border!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 21,
    text: "What percentage of people in Wales can speak Welsh?",
    answers: [
      { text: "About 10%", isCorrect: false },
      { text: "About 30%", isCorrect: true },
      { text: "About 50%", isCorrect: false },
      { text: "About 70%", isCorrect: false }
    ],
    explanation: "According to recent census data, about 30% of the Welsh population can speak Welsh!",
    multipleCorrect: false,
    section: "language & social"
  },

  // Nature
  {
    id: 22,
    text: "Which animal appears on the Welsh flag?",
    answers: [
      { text: "Lion", isCorrect: false },
      { text: "Dragon", isCorrect: true },
      { text: "Eagle", isCorrect: false },
      { text: "Unicorn", isCorrect: false }
    ],
    explanation: "The red dragon (Y Ddraig Goch) is the symbol of Wales and appears on the Welsh flag!",
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 23,
    text: "Which seabird is common on Welsh coastal cliffs?",
    answers: [
      { text: "Penguin", isCorrect: false },
      { text: "Puffin", isCorrect: true },
      { text: "Flamingo", isCorrect: false },
      { text: "Ostrich", isCorrect: false }
    ],
    explanation: "Puffins nest on Welsh coastal cliffs, particularly on islands like Skomer and Skokholm!",
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 24,
    text: "What type of sheep is Wales famous for?",
    answers: [
      { text: "Highland sheep", isCorrect: false },
      { text: "Welsh Mountain sheep", isCorrect: true },
      { text: "Merino sheep", isCorrect: false },
      { text: "Suffolk sheep", isCorrect: false }
    ],
    explanation: "Welsh Mountain sheep are hardy breeds perfectly adapted to the Welsh hills and mountains!",
    multipleCorrect: false,
    section: "nature"
  },

  // Shops & Commerce  
  {
    id: 25,
    text: "Which supermarket chain originated in Wales?",
    answers: [
      { text: "Tesco", isCorrect: false },
      { text: "Morrisons", isCorrect: false },
      { text: "Iceland", isCorrect: true },
      { text: "ASDA", isCorrect: false }
    ],
    explanation: "Iceland supermarket was founded in Oswestry on the Welsh border and has strong Welsh connections!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 26,
    text: "What is a traditional Welsh market called?",
    answers: [
      { text: "Bazaar", isCorrect: false },
      { text: "Marchnad", isCorrect: true },
      { text: "Souk", isCorrect: false },
      { text: "Feira", isCorrect: false }
    ],
    explanation: "Marchnad is the Welsh word for market - many Welsh towns have traditional markets dating back centuries!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 27,
    text: "Which of these is a famous Welsh department store?",
    answers: [
      { text: "Harrods", isCorrect: false },
      { text: "Howells", isCorrect: true },
      { text: "Selfridges", isCorrect: false },
      { text: "Harvey Nichols", isCorrect: false }
    ],
    explanation: "Howells was a famous department store in Cardiff, though it has since closed!",
    multipleCorrect: false,
    section: "shops & commerce"
  },

  // Additional Welsh Culture Questions
  {
    id: 28,
    text: "What is the traditional Welsh sport similar to hockey?",
    answers: [
      { text: "Shinty", isCorrect: false },
      { text: "Bandy", isCorrect: true },
      { text: "Hurling", isCorrect: false },
      { text: "Cnapan", isCorrect: false }
    ],
    explanation: "Bandy was a traditional Welsh ball game, though Cnapan was also played in medieval Wales!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 29,
    text: "Which rugby team represents Wales internationally?",
    answers: [
      { text: "The Welsh Dragons", isCorrect: false },
      { text: "Wales national rugby union team", isCorrect: true },
      { text: "The Red Devils", isCorrect: false },
      { text: "Celtic Warriors", isCorrect: false }
    ],
    explanation: "The Wales national rugby union team plays at the Principality Stadium in Cardiff and competes in the Six Nations!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 30,
    text: "What is the Welsh name for the Severn Bridge?",
    answers: [
      { text: "Pont Hafren", isCorrect: true },
      { text: "Pont Menai", isCorrect: false },
      { text: "Pont Britannia", isCorrect: false },
      { text: "Pont Tywi", isCorrect: false }
    ],
    explanation: "Pont Hafren is the Welsh name for the Severn Bridge, connecting Wales and England!",
    multipleCorrect: false,
    section: "geography & places"
  }
];
