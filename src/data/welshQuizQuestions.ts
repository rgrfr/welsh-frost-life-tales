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
  // Food & Drink (Bwyd a Diod)
  {
    id: 1,
    text: "When offered a bowl of 'cawl' in Wales, what hearty traditional dish are you about to enjoy?",
    answers: [
      { text: "A traditional Welsh stew", isCorrect: true },
      { text: "A type of Welsh sweet bread", isCorrect: false },
      { text: "A Welsh musical instrument", isCorrect: false },
      { text: "A very loud cough", isCorrect: false }
    ],
    explanation: "Cawl is Wales' national dish - a hearty stew traditionally made with lamb or beef and seasonal vegetables, perfect on a chilly day!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 2,
    text: "Which of these is a traditional Welsh cheese that often gets confused with a bustling Welsh town?",
    answers: [
      { text: "Wrexham White", isCorrect: false },
      { text: "Caerphilly", isCorrect: true },
      { text: "Holyhead Blue", isCorrect: false },
      { text: "Brecon Brie", isCorrect: false }
    ],
    explanation: "Caerphilly is a crumbly white cheese, but Caerphilly is also a large town in South Wales, famous for its impressive castle!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 3,
    text: "What makes a traditional Welsh Cake distinct from a scone?",
    answers: [
      { text: "They are always square shaped", isCorrect: false },
      { text: "They are cooked on a griddle or bakestone, not baked in an oven", isCorrect: true },
      { text: "They contain no sugar whatsoever", isCorrect: false },
      { text: "They must only be eaten with a tiny fork", isCorrect: false }
    ],
    explanation: "Welsh cakes are traditional flat, round cakes cooked on a bakestone or griddle, giving them a unique texture and flavor compared to baked scones!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 4,
    text: "If a kind Welsh person offers you a slice of 'bara brith,' what delicious treat are they sharing?",
    answers: [
      { text: "A special Welsh lamb sausage", isCorrect: false },
      { text: "A secret Welsh spell book", isCorrect: false },
      { text: "Speckled bread (a fruit loaf)", isCorrect: true },
      { text: "A potent homemade cider", isCorrect: false }
    ],
    explanation: "Bara brith literally means 'speckled bread' and is a delicious, moist fruit loaf, often made with tea-soaked dried fruit and traditionally served with butter!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 5,
    text: "Which of these is definitively NOT a traditional Welsh dish, but might be found in another Celtic nation?",
    answers: [
      { text: "Faggots and peas", isCorrect: false },
      { text: "Laverbread", isCorrect: false },
      { text: "Haggis", isCorrect: true },
      { text: "Cockles and mussels", isCorrect: false }
    ],
    explanation: "Haggis is famously Scottish, not Welsh! Faggots, laverbread, and cockles are all traditional Welsh foods.",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 6,
    text: "Laverbread (bara lawr), a Welsh delicacy, is made from what unexpected ingredient?",
    answers: [
      { text: "A special type of Welsh potato", isCorrect: false },
      { text: "Purple seaweed", isCorrect: true },
      { text: "Finely ground oats", isCorrect: false },
      { text: "Fermented leek tops", isCorrect: false }
    ],
    explanation: "Laverbread is made from laver seaweed, boiled and minced into a dark green puree, often eaten fried with bacon and cockles for breakfast!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 7,
    text: "While Wales is gaining recognition for its emerging whisky and gin scene, which classic alcoholic beverage has it long been famous for producing?",
    answers: [
      { text: "Sparkling wine", isCorrect: false },
      { text: "Traditional Welsh ale and bitter", isCorrect: true },
      { text: "Potent fruit schnapps", isCorrect: false },
      { text: "Cider from apples grown on Snowdon", isCorrect: false }
    ],
    explanation: "Wales has a rich brewing tradition with famous breweries like Brains producing traditional Welsh ales and bitters, enjoyed in pubs across the nation!",
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 31,
    text: "Which of these ingredients is almost certainly NOT found in a genuine Welsh Oggie (a traditional savoury pastry)?",
    answers: [
      { text: "Lamb", isCorrect: false },
      { text: "Potato", isCorrect: false },
      { text: "Pineapple", isCorrect: true },
      { text: "Swede and onion", isCorrect: false }
    ],
    explanation: "An Oggie (similar to a Cornish Pasty) is a traditional Welsh savoury pastry, usually filled with lamb, potato, swede, and onion. Pineapple would be a very surprising and untraditional addition!",
    multipleCorrect: false,
    section: "food & drink"
  },

  // Culture & Customs (Diwylliant a Dulliau)
  {
    id: 8,
    text: "What grand annual cultural festival is synonymous with Wales, celebrating its rich heritage of literature, music, and performance?",
    answers: [
      { text: "The Welsh Castle Conundrum", isCorrect: false },
      { text: "The Eisteddfod", isCorrect: true },
      { text: "The Great Welsh Sheep Shearing Championships", isCorrect: false },
      { text: "The Daffodil Derby", isCorrect: false }
    ],
    explanation: "The Eisteddfod is a major annual festival of Welsh poetry, music, dance, and drama, with thousands competing and attending!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 9,
    text: "When celebrating Wales' national day, which vibrant flower is proudly pinned to lapels?",
    answers: [
      { text: "A thorny rose", isCorrect: false },
      { text: "A spiky thistle", isCorrect: false },
      { text: "A bright yellow daffodil", isCorrect: true },
      { text: "A lucky shamrock", isCorrect: false }
    ],
    explanation: "The daffodil (cenhinen Bedr) is the national flower of Wales, famously worn on St. David's Day!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 10,
    text: "On which date do Welsh people don their daffodils and celebrate their patron saint, St. David?",
    answers: [
      { text: "March 1st", isCorrect: true },
      { text: "March 17th", isCorrect: false },
      { text: "April 23rd", isCorrect: false },
      { text: "November 30th", isCorrect: false }
    ],
    explanation: "St. David's Day (Dydd Gŵyl Dewi) is celebrated on March 1st each year, a day of Welsh pride and festivities!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 11,
    text: "Which of these items would you most likely see as part of a traditional Welsh national costume, especially for women?",
    answers: [
      { text: "A flashy kilt and sporran", isCorrect: false },
      { text: "A tall black hat, warm shawl, and white apron", isCorrect: true },
      { text: "A Bavarian dirndl with lederhosen", isCorrect: false },
      { text: "A flowing silk sari", isCorrect: false }
    ],
    explanation: "The traditional Welsh costume includes a distinctive tall black hat (often called a 'Welsh hat'), a red flannel shawl, and a white apron over a long dress, historically worn by rural women!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 12,
    text: "What might a world-famous Welsh male voice choir be least likely to be caught doing?",
    answers: [
      { text: "Belting out a rousing hymn with full gusto", isCorrect: false },
      { text: "Performing a powerful choral piece in a rugby stadium", isCorrect: false },
      { text: "Whispering quietly in a monotone for a talent show audition", isCorrect: true },
      { text: "Winning a major Eisteddfod prize with their harmonious sound", isCorrect: false }
    ],
    explanation: "Welsh choirs are famous for their powerful, passionate, and harmonious singing – whispering isn't their style! They're known for their big, impactful sound.",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 28,
    text: "Which of these is a traditional Welsh sport, similar to hockey, but now less commonly played?",
    answers: [
      { text: "Shinty", isCorrect: false },
      { text: "Bandy", isCorrect: true },
      { text: "Hurling", isCorrect: false },
      { text: "Quidditch", isCorrect: false }
    ],
    explanation: "Bandy was a traditional Welsh ball game played on ice or land. Cnapan was another ancient, often violent, medieval Welsh sport resembling a mass rugby game!",
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 29,
    text: "When Wales plays internationally, which national team takes to the pitch (usually with a lot of singing)?",
    answers: [
      { text: "The Welsh Dragons", isCorrect: false },
      { text: "The Wales national rugby union team", isCorrect: true },
      { text: "The Red Devils", isCorrect: false },
      { text: "The Celtic Warriors", isCorrect: false }
    ],
    explanation: "The Wales national rugby union team is the pride of the nation, playing at the Principality Stadium in Cardiff and known for their passionate fans and singing!",
    multipleCorrect: false,
    section: "culture & customs"
  },

  // Geography & Places (Daearyddiaeth a Lleoedd)
  {
    id: 13,
    text: "What is the highest mountain in Wales, often shrouded in mist and legend?",
    answers: [
      { text: "Ben Nevis", isCorrect: false },
      { text: "Snowdon (Yr Wyddfa)", isCorrect: true },
      { text: "Scafell Pike", isCorrect: false },
      { text: "Pen y Fan", isCorrect: false }
    ],
    explanation: "Snowdon (Yr Wyddfa in Welsh), located in Snowdonia National Park, is Wales' highest peak at 1,085 meters and a popular hiking destination!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 14,
    text: "Which vibrant and rapidly developing city holds the prestigious title of Wales' capital?",
    answers: [
      { text: "Swansea", isCorrect: false },
      { text: "Cardiff", isCorrect: true },
      { text: "Newport", isCorrect: false },
      { text: "Wrexham", isCorrect: false }
    ],
    explanation: "Cardiff (Caerdydd) has been the capital city of Wales since 1955, boasting a castle, waterfront, and a buzzing city centre!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 15,
    text: "Which Welsh place name is famous for being incredibly long and a tongue-twister for most non-Welsh speakers?",
    answers: [
      { text: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch", isCorrect: true },
      { text: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu", isCorrect: false },
      { text: "Krungthepmahanakhon", isCorrect: false },
      { text: "Chargoggagoggmanchauggagoggchaubunagungamaugg", isCorrect: false }
    ],
    explanation: "This village on Anglesey holds the record for the longest place name in Europe, deliberately created as a publicity stunt to attract tourists in the 1860s!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 16,
    text: "Which spectacular Welsh coastline is celebrated for its dramatic cliffs, golden beaches, and the UK's only coastal National Park?",
    answers: [
      { text: "The Jurassic Coast", isCorrect: false },
      { text: "The Pembrokeshire Coast", isCorrect: true },
      { text: "The Giant's Causeway", isCorrect: false },
      { text: "The White Cliffs of Dover", isCorrect: false }
    ],
    explanation: "The Pembrokeshire Coast Path offers some of the most spectacular coastal scenery in Britain, forming the Pembrokeshire Coast National Park!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 17,
    text: "What kind of rugged, wild landscape is the Brecon Beacons National Park primarily known for?",
    answers: [
      { text: "Endless flat farmland", isCorrect: false },
      { text: "Rolling mountain peaks, expansive moorland, and glistening reservoirs", isCorrect: true },
      { text: "Dense, impenetrable forests", isCorrect: false },
      { text: "Arid desert terrain", isCorrect: false }
    ],
    explanation: "The Brecon Beacons National Park is famous for its dramatic mountain peaks (like Pen y Fan), sweeping moorland, and beautiful glaciated valleys, making it ideal for hiking!",
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 30,
    text: "You've just crossed the border from England into Wales via a famous bridge. What is its Welsh name?",
    answers: [
      { text: "Pont Menai", isCorrect: false },
      { text: "Pont Hafren", isCorrect: true },
      { text: "Pont Britannia", isCorrect: false },
      { text: "Pont Tywi", isCorrect: false }
    ],
    explanation: "Pont Hafren is the Welsh name for the Severn Bridge, an iconic crossing that welcomes you to Wales!",
    multipleCorrect: false,
    section: "geography & places"
  },

  // Language & Social (Iaith a Chymdeithasol)
  {
    id: 18,
    text: "If you want to refer to Wales in its own language, what word would you use?",
    answers: [
      { text: "Hello", isCorrect: false },
      { text: "Cymru", isCorrect: true },
      { text: "Thank you", isCorrect: false },
      { text: "Goodbye", isCorrect: false }
    ],
    explanation: "Cymru is the Welsh name for Wales, and Welsh people are called Cymry. It's a key part of Welsh identity!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 19,
    text: "What is a common, informal way to say 'hello' or 'how are you?' in Welsh, especially in the South?",
    answers: [
      { text: "Bore da", isCorrect: false },
      { text: "Shwmae", isCorrect: true },
      { text: "Nos da", isCorrect: false },
      { text: "Hwyl fawr", isCorrect: false }
    ],
    explanation: "Shwmae (or Sut mae) is a common informal greeting in Welsh, often used in conversations like 'Shwmae, bach!'",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 20,
    text: "You see a sign at the border that says 'Croeso i Gymru'. What warm message is it conveying?",
    answers: [
      { text: "Goodbye from Wales", isCorrect: false },
      { text: "Welcome to Wales", isCorrect: true },
      { text: "Made in Wales", isCorrect: false },
      { text: "Learn Welsh!", isCorrect: false }
    ],
    explanation: "Croeso i Gymru means 'Welcome to Wales' - a friendly greeting you'll see on road signs as you enter the country!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 21,
    text: "Approximately what percentage of the Welsh population can speak the Welsh language, according to recent census data?",
    answers: [
      { text: "Around 10%", isCorrect: false },
      { text: "Around 30%", isCorrect: true },
      { text: "Around 50%", isCorrect: false },
      { text: "Around 70%", isCorrect: false }
    ],
    explanation: "According to recent census data, about 30% of the Welsh population can speak Welsh, a figure that the Welsh government is actively working to increase!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 32,
    text: "When a Welsh person says 'diolch', what common courtesy are they extending?",
    answers: [
      { text: "They're asking for the bill", isCorrect: false },
      { text: "They're saying 'thank you'", isCorrect: true },
      { text: "They're making a toast", isCorrect: false },
      { text: "They're ordering a drink", isCorrect: false }
    ],
    explanation: "'Diolch' means 'thank you' in Welsh. It's a simple but appreciated word to learn when visiting!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 33,
    text: "What does 'Hwyl' (pronounced hoo-eel) most closely represent in Welsh culture, often felt during a good sing-song?",
    answers: [
      { text: "A type of melancholy Welsh folk song", isCorrect: false },
      { text: "A deep sense of passionate enthusiasm, fun, or zest", isCorrect: true },
      { text: "A traditional Welsh lullaby", isCorrect: false },
      { text: "A specific type of boat", isCorrect: false }
    ],
    explanation: "'Hwyl' is a uniquely Welsh concept, describing a deep feeling of emotional passion, often associated with powerful singing, communal spirit, or a great atmosphere. You might hear 'Hwyl Fawr!' for a passionate goodbye too!",
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 34,
    text: "Which of these terms is a common, often affectionate, way you might hear a Welsh person address someone, especially in the South?",
    answers: [
      { text: "Chum", isCorrect: false },
      { text: "Matey", isCorrect: false },
      { text: "Boyo", isCorrect: true },
      { text: "Old Bean", isCorrect: false }
    ],
    explanation: "'Boyo' is a colloquial and often endearing term for a man or boy, particularly associated with South Wales, used much like 'mate' or 'pal'.",
    multipleCorrect: false,
    section: "language & social"
  },

  // Nature (Natur)
  {
    id: 22,
    text: "Which mythical (or not so mythical, if you believe!) creature proudly appears on the Welsh flag?",
    answers: [
      { text: "A majestic lion", isCorrect: false },
      { text: "A fearsome red dragon", isCorrect: true },
      { text: "A soaring eagle", isCorrect: false },
      { text: "A sparkling unicorn", isCorrect: false }
    ],
    explanation: "The red dragon (Y Ddraig Goch) is the vibrant, ancient symbol of Wales and appears prominently on the Welsh flag!",
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 23,
    text: "Which distinctive, colourful seabird with a clown-like beak is a common sight on Welsh coastal cliffs, particularly on its islands?",
    answers: [
      { text: "A fluffy penguin", isCorrect: false },
      { text: "A charming puffin", isCorrect: true },
      { text: "A graceful flamingo", isCorrect: false },
      { text: "A rather tall ostrich", isCorrect: false }
    ],
    explanation: "Puffins nest in large colonies on Welsh coastal cliffs, particularly on islands like Skomer and Skokholm, returning each spring to breed!",
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 24,
    text: "What common farm animal is so iconic in Wales that it's often jokingly said to outnumber the human population?",
    answers: [
      { text: "The mighty Welsh Black cattle", isCorrect: false },
      { text: "The ubiquitous Welsh Mountain sheep", isCorrect: true },
      { text: "The plump Welsh Pig", isCorrect: false },
      { text: "The shaggy Highland cow", isCorrect: false }
    ],
    explanation: "Wales is famous for its vast numbers of hardy Welsh Mountain sheep, which graze across its hills and mountains, leading to the playful joke!",
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 35,
    text: "Which of these exotic animals is absolutely NOT native to the wild Welsh countryside?",
    answers: [
      { text: "The majestic Red Kite", isCorrect: false },
      { text: "The sturdy Welsh Mountain Pony", isCorrect: false },
      { text: "The colourful Puffin", isCorrect: false },
      { text: "A hopping kangaroo", isCorrect: true }
    ],
    explanation: "While Wales boasts stunning wildlife, kangaroos are native to Australia, not the valleys and mountains of Wales!",
    multipleCorrect: false,
    section: "nature"
  },

  // Shops & Commerce (Siopau a Masnach)
  {
    id: 25,
    text: "Which popular supermarket chain, known for its frozen food, has its origins strongly tied to Wales, despite its name?",
    answers: [
      { text: "Tesco", isCorrect: false },
      { text: "Morrisons", isCorrect: false },
      { text: "Iceland", isCorrect: true },
      { text: "ASDA", isCorrect: false }
    ],
    explanation: "Iceland Foods was founded in Oswestry, close to the Welsh border, and has deep roots and a large presence in Wales!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 26,
    text: "If you're looking for local produce, crafts, or a good bargain in Wales, what would a traditional market be called in Welsh?",
    answers: [
      { text: "A bustling Bazaar", isCorrect: false },
      { text: "A Marchnad", isCorrect: true },
      { text: "A vibrant Souk", isCorrect: false },
      { text: "A bustling Fair", isCorrect: false }
    ],
    explanation: "Marchnad is the Welsh word for market – many Welsh towns like Cardiff and Swansea have traditional markets dating back centuries!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 27,
    text: "Which of these was a famous, long-standing department store in Cardiff, a landmark for shoppers?",
    answers: [
      { text: "Harrods", isCorrect: false },
      { text: "Howells", isCorrect: true },
      { text: "Selfridges", isCorrect: false },
      { text: "Harvey Nichols", isCorrect: false }
    ],
    explanation: "Howells was a beloved department store in Cardiff's city centre for over a century, although it has since closed and is now a House of Fraser!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 36,
    text: "Which of these items would you be least likely to find for sale at a traditional Welsh market stall?",
    answers: [
      { text: "Freshly made Welsh laverbread", isCorrect: false },
      { text: "A hand-knitted Welsh wool jumper", isCorrect: false },
      { text: "A full set of scuba diving gear", isCorrect: true },
      { text: "A genuine Welsh slate coaster", isCorrect: false }
    ],
    explanation: "Welsh markets are famous for local produce, crafts, and traditional items, but you'd be hard-pressed to find specialized sports equipment like scuba gear there!",
    multipleCorrect: false,
    section: "shops & commerce"
  },
];