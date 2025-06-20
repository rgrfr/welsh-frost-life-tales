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
      { text: "A type of Welsh sweet bread that sings hymns", isCorrect: false }, // Humour added
      { text: "A Welsh musical instrument for very hungry bards", isCorrect: false }, // Humour added
      { text: "A Welsh doner kebab (surprisingly delicious, but not cawl!)", isCorrect: false } // Humour added
    ],
    explanation: "Cawl is Wales' national dish - a hearty stew traditionally made with lamb or beef and seasonal vegetables, perfect on a chilly day. You'll need a spoon, not a conductor's baton!", // Humour added
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
      { text: "Brecon Brie (sounds fancy, but isn't quite Welsh!)", isCorrect: false } // Humour added
    ],
    explanation: "Caerphilly is a crumbly white cheese, but Caerphilly is also a large town in South Wales, famous for its impressive castle! Just try not to get lost in the cheese... or the town.", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 3,
    text: "What makes a traditional Welsh Cake distinct from a scone?",
    answers: [
      { text: "They are always square shaped and come with built-in Wi-Fi", isCorrect: false }, // Humour added
      { text: "They are cooked on a griddle or bakestone, not baked in an oven", isCorrect: true },
      { text: "They contain a secret ingredient for instant rugby skills", isCorrect: false }, // Humour added
      { text: "They are eaten with a tiny, ceremonial fork while wearing a tall hat", isCorrect: false } // Humour added
    ],
    explanation: "Welsh cakes are traditional flat, round cakes cooked on a bakestone or griddle, giving them a unique texture and flavor compared to baked scones! No magical powers or Wi-Fi included, sadly.", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 4,
    text: "If a kind Welsh person offers you a slice of 'bara brith,' what delicious treat are they sharing?",
    answers: [
      { text: "A special Welsh lamb sausage (strictly vegetarian version, of course!)", isCorrect: false }, // Humour added
      { text: "A secret Welsh spell book disguised as bread", isCorrect: false }, // Humour added
      { text: "A fruit loaf", isCorrect: true },
      { text: "A potent homemade cider that makes you speak fluent Welsh after one sip", isCorrect: false } // Humour added
    ],
    explanation: "Bara brith literally means 'speckled bread' and is a delicious, moist fruit loaf, often made with tea-soaked dried fruit and traditionally served with butter! Much tastier than a spell book, trust us.", // Humour added
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
    explanation: "Haggis is famously Scottish, not Welsh! While we love our Celtic cousins, we prefer our national dishes to not involve quite so much... 'offal stuffing'. Faggots, laverbread, and cockles are all proper Welsh foods.", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 6,
    text: "Laverbread (bara lawr), a Welsh delicacy, is made from what unexpected ingredient?",
    answers: [
      { text: "A special Welsh potato (that sings 'Bread of Heaven' in a choir)", isCorrect: false }, // Humour added
      { text: "A purple seaweed", isCorrect: true },
      { text: "Finely ground oats from a particularly grumpy dragon", isCorrect: false }, // Humour added
      { text: "Fermented leek tops (sounds plausible, doesn't it?)", isCorrect: false } // Humour added
    ],
    explanation: "Laverbread is made from laver seaweed, boiled and minced into a dark green puree, often eaten fried with bacon and cockles for breakfast! Don't knock it 'til you've tried it – it's an acquired, but delicious, taste!", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 7,
    text: "While Wales is gaining recognition for its emerging whisky and gin scene, which classic alcoholic beverage has it long been famous for producing?",
    answers: [
      { text: "Sparkling wine made purely from Welsh mist and good intentions", isCorrect: false }, // Humour added
      { text: "Ale and bitter", isCorrect: true },
      { text: "Potent fruit spirits distilled in a shed by a mischievous gnome", isCorrect: false }, // Humour added
      { text: "Cider from apples grown on the very top of Snowdon (it's a long climb for a pint!)", isCorrect: false } // Humour added
    ],
    explanation: "Wales has a rich brewing tradition with famous breweries like Brains producing traditional Welsh ales and bitters, enjoyed in pubs across the nation! Perfect for a post-rugby sing-song.", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },
  {
    id: 31,
    text: "Which of these ingredients is almost certainly NOT found in a genuine Welsh Oggie (a traditional savoury pastry)?",
    answers: [
      { text: "Lamb", isCorrect: false },
      { text: "Potato", isCorrect: false },
      { text: "Pineapple (unless you've truly upset the cook!)", isCorrect: true }, // Humour added
      { text: "Swede and onion", isCorrect: false }
    ],
    explanation: "An Oggie (similar to a Cornish Pasty) is a traditional Welsh savoury pastry, usually filled with lamb, potato, swede, and onion. Pineapple would be a very surprising and untraditional addition... unless it's an experimental modern art piece, perhaps?", // Humour added
    multipleCorrect: false,
    section: "food & drink"
  },

  // Culture & Customs (Diwylliant a Dulliau)
  {
    id: 8,
    text: "What grand annual cultural festival is synonymous with Wales, celebrating its rich heritage of literature, music, and performance?",
    answers: [
      { text: "The Welsh Castle Conundrum (a board game involving sheep)", isCorrect: false }, // Humour added
      { text: "The Eisteddfod", isCorrect: true },
      { text: "The Great Welsh Sheep Shearing Championships (which are real, but not *the* Eisteddfod!)", isCorrect: false }, // Humour added
      { text: "The Daffodil Derby (a competitive race for flowers)", isCorrect: false } // Humour added
    ],
    explanation: "The Eisteddfod is a major annual festival of Welsh poetry, music, dance, and drama, with thousands competing and attending! It's a grand affair, where quiet whispering is definitely not encouraged.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 9,
    text: "When celebrating Wales' national day, which vibrant flower is proudly pinned to lapels?",
    answers: [
      { text: "A rose", isCorrect: false },
      { text: "A thistle", isCorrect: false },
      { text: "A daffodil", isCorrect: true },
      { text: "A shamrock (wrong Celtic nation, but good try!)", isCorrect: false } // Humour added
    ],
    explanation: "The daffodil (cenhinen Bedr) is the national flower of Wales, famously worn on St. David's Day! It's a much cheerier symbol than a leek, though both are associated with Wales.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 10,
    text: "On which date do Welsh people don their daffodils and celebrate their patron saint, St. David?",
    answers: [
      { text: "March 1st", isCorrect: true },
      { text: "March 17th (that's another saint's day, from another green island!)", isCorrect: false }, // Humour added
      { text: "April 23rd", isCorrect: false },
      { text: "November 30th", isCorrect: false }
    ],
    explanation: "St. David's Day (Dydd Gŵyl Dewi) is celebrated on March 1st each year, a day of Welsh pride and festivities! Expect lots of red, white, and green, and probably some singing.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 11,
    text: "Which of these items would you most likely see as part of a traditional Welsh national costume, especially for women?",
    answers: [
      { text: "A kilt and sporran (wrong Celtic nation, mate!)", isCorrect: false }, // Humour added
      { text: "A black hat, shawl and apron", isCorrect: true },
      { text: "A dirndl with lederhosen (might be comfy, but decidedly un-Welsh)", isCorrect: false }, // Humour added
      { text: "A flowing silk wrap made from dragon's breath", isCorrect: false } // Humour added
    ],
    explanation: "The traditional Welsh costume includes a distinctive tall black hat (often called a 'Welsh hat'), a red flannel shawl, and a white apron over a long dress, historically worn by rural women! Perfect for looking grand at the Eisteddfod.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 12,
    text: "What might a world-famous Welsh male voice choir be least likely to be caught doing?",
    answers: [
      { text: "Belting out a rousing hymn with full gusto", isCorrect: false },
      { text: "Performing a powerful choral piece in a rugby stadium", isCorrect: false },
      { text: "Whispering quietly in a monotone for a talent show audition (they'd never get past the first round!)", isCorrect: true }, // Humour added
      { text: "Winning a major Eisteddfod prize with their harmonious sound", isCorrect: false }
    ],
    explanation: "Welsh choirs are famous for their powerful, passionate, and harmonious singing – whispering isn't their style! They're known for their big, impactful sound that can make the very mountains tremble... with emotion, of course.", // Humour added
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
      { text: "Quidditch (only if you have a very strong broomstick licence)", isCorrect: false } // Humour added
    ],
    explanation: "Bandy was a traditional Welsh ball game played on ice or land. Cnapan was another ancient, often violent, medieval Welsh sport resembling a mass rugby game! Thankfully, we mostly stick to rugby and football these days.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },
  {
    id: 29,
    text: "When Wales plays internationally, which national team takes to the pitch (usually with a lot of singing)?",
    answers: [
      { text: "The Welsh Dragons (who occasionally assist from the sidelines)", isCorrect: false }, // Humour added
      { text: "The Wales national rugby union team", isCorrect: true },
      { text: "The Red Devils", isCorrect: false },
      { text: "The Celtic Warriors (sounds cool, but it's not the official name!)", isCorrect: false } // Humour added
    ],
    explanation: "The Wales national rugby union team is the pride of the nation, playing at the Principality Stadium in Cardiff and known for their passionate fans and singing! You haven't truly lived until you've heard 'Hymns and Arias' sung by 70,000 Welsh fans.", // Humour added
    multipleCorrect: false,
    section: "culture & customs"
  },

  // Geography & Places (Daearyddiaeth a Lleoedd)
  {
    id: 13,
    text: "What is the highest mountain in Wales, often shrouded in mist and legend?",
    answers: [
      { text: "Ben Nevis", isCorrect: false },
      { text: "Snowdon", isCorrect: true },
      { text: "Scafell Pike", isCorrect: false },
      { text: "Pen y Fan (a worthy challenger, but not quite the tallest!)", isCorrect: false } // Humour added
    ],
    explanation: "Snowdon (Yr Wyddfa in Welsh), located in Snowdonia National Park, is Wales' highest peak at 1,085 meters and a popular hiking destination! Legend says a giant sleeps beneath it, so tread lightly.", // Humour added
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
      { text: "Wrexham (famous for football, but not quite the capital!)", isCorrect: false } // Humour added
    ],
    explanation: "Cardiff (Caerdydd) has been the capital city of Wales since 1955, boasting a castle, waterfront, and a buzzing city centre! It's come a long way since it was just a small Roman fort and a few sheep.", // Humour added
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 15,
    text: "Which Welsh place name is famous for being incredibly long and a tongue-twister for most non-Welsh speakers?",
    answers: [
      { text: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch", isCorrect: true },
      { text: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu (that's New Zealand calling!)", isCorrect: false }, // Humour added
      { text: "Krungthepmahanakhon (try saying that after a pint of Brains!)", isCorrect: false }, // Humour added
      { text: "Chargoggagoggmanchauggagoggchaubunagungamaugg (sounds like a dragon clearing its throat!)", isCorrect: false } // Humour added
    ],
    explanation: "This village on Anglesey holds the record for the longest place name in Europe, deliberately created as a publicity stunt to attract tourists in the 1860s! Good luck asking for directions without a local guide, or a very long piece of paper.", // Humour added
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 16,
    text: "Which spectacular Welsh coastline is celebrated for its dramatic cliffs, golden beaches, and the UK's only coastal National Park?",
    answers: [
      { text: "The Jurassic Coast (too many dinosaurs for Wales, mostly!)", isCorrect: false }, // Humour added
      { text: "The Pembrokeshire Coast", isCorrect: true },
      { text: "The Giant's Causeway", isCorrect: false },
      { text: "The South Stack, Anglesey (beautiful, but just a small part of a bigger picture!)", isCorrect: false } // Humour added
    ],
    explanation: "The Pembrokeshire Coast Path offers some of the most spectacular coastal scenery in Britain, forming the Pembrokeshire Coast National Park! Perfect for bracing walks, spotting puffins, and pretending you're in a dramatic movie scene.", // Humour added
    multipleCorrect: false,
    section: "geography & places"
  },
  {
    id: 17,
    text: "What kind of rugged, wild landscape is the Brecon Beacons National Park primarily known for?",
    answers: [
      { text: "Rich flat farmland (where sheep play cricket)", isCorrect: false }, // Humour added
      { text: "Mountain peaks, moorland and reservoirs", isCorrect: true },
      { text: "Dense forests (where the Welsh hobbits live)", isCorrect: false }, // Humour added
      { text: "Arid terrain (unless you visit during a heatwave, then maybe!)", isCorrect: false } // Humour added
    ],
    explanation: "The Brecon Beacons National Park is famous for its dramatic mountain peaks (like Pen y Fan), sweeping moorland, and beautiful glaciated valleys, making it ideal for hiking! And yes, sometimes it's misty, adding to the drama.", // Humour added
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
      { text: "Ponty Pandy (where the fire engine lives, but not a border crossing!)", isCorrect: false } // Humour added
    ],
    explanation: "Pont Hafren is the Welsh name for the Severn Bridge, an iconic crossing that welcomes you to Wales! Get ready for rolling hills, friendly faces, and possibly a sudden urge to sing.", // Humour added
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
      { text: "Goodbye (but you won't want to leave!)", isCorrect: false } // Humour added
    ],
    explanation: "Cymru is the Welsh name for Wales, and Welsh people are called Cymry. It's a key part of Welsh identity, and much more exciting to say than 'that place next to England'!", // Humour added
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 19,
    text: "What is a common, informal way to say 'hello' or 'how are you?' in Welsh, especially in the South?",
    answers: [
      { text: "Bore da (that's 'good morning', for early birds)", isCorrect: false }, // Humour added
      { text: "Shwmae", isCorrect: true },
      { text: "Nos da (that's 'good night', for sleepyheads)", isCorrect: false }, // Humour added
      { text: "Hwyl fawr (that's 'goodbye', don't leave just yet!)", isCorrect: false } // Humour added
    ],
    explanation: "Shwmae (or Sut mae) is a common informal greeting in Welsh, often used in conversations like 'Shwmae, bach!' – it's like a warm hug in a word, especially common in South Wales.", // Humour added
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 20,
    text: "You see a sign at the border that says 'Croeso i Gymru'. What warm message is it conveying?",
    answers: [
      { text: "Goodbye from Wales (already?! You've barely arrived!)", isCorrect: false }, // Humour added
      { text: "Welcome to Wales", isCorrect: true },
      { text: "Beware of sheep (a common joke, but not on the official signs!)", isCorrect: false }, // Humour added
      { text: "Learn Welsh! (a noble goal, but not what that sign means)", isCorrect: false } // Humour added
    ],
    explanation: "Croeso i Gymru means 'Welcome to Wales' - a friendly greeting you'll see on road signs as you enter the country! So, pull over, take a deep breath of Welsh air, and get ready for adventure.", // Humour added
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 21,
    text: "Approximately what percentage of the Welsh population can speak the Welsh language, according to recent census data?",
    answers: [
      { text: "Around 10%", isCorrect: false },
      { text: "Around 30%", isCorrect: true },
      { text: "Around 50% (that would be amazing!)", isCorrect: false }, // Humour added
      { text: "Around 70% (we're working on it!)", isCorrect: false } // Humour added
    ],
    explanation: "According to recent census data, about 30% of the Welsh population can speak Welsh, a figure that the Welsh government is actively working to increase! Every 'diolch' and 'shwmae' helps!", // Humour added
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 32,
    text: "When a Welsh person says 'diolch', what common courtesy are they extending?",
    answers: [
      { text: "They're asking for the bill (after a very long meal)", isCorrect: false }, // Humour added
      { text: "They're saying 'thank you'", isCorrect: true },
      { text: "They're making a toast (to the dragons, naturally)", isCorrect: false }, // Humour added
      { text: "They're ordering a drink (probably a pint of Brains!)", isCorrect: false } // Humour added
    ],
    explanation: "'Diolch' means 'thank you' in Welsh. It's a simple but appreciated word to learn when visiting – and much easier than trying to sing the national anthem after a few cawls!", // Humour added
    multipleCorrect: false,
    section: "language & social"
  },
  {
    id: 33,
    text: "What does 'Hwyl' (pronounced hoo-eel) most closely represent in Welsh culture, often felt during a good sing-song?",
    answers: [
      { text: "A type of melancholy Welsh folk song (that makes you want to hug a sheep)", isCorrect: false }, // Humour added
      { text: "A passionate enthusiasm, fun, or zest", isCorrect: true },
      { text: "A traditional Welsh lullaby (that could wake the neighbours)", isCorrect: false }, // Humour added
      { text: "A type of boat (that sails very, very fast!)", isCorrect: false } // Humour added
    ],
    explanation: "'Hwyl' is a uniquely Welsh concept, describing a deep feeling of emotional passion, often associated with powerful singing, communal spirit, or a great atmosphere. You might hear 'Hwyl Fawr!' for a passionate goodbye too – it's basically emotional rocket fuel!", // Humour added
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
      { text: "Old Bean (unless they're actually a very old, wise legume)", isCorrect: false } // Humour added
    ],
    explanation: "'Boyo' is a colloquial and often endearing term for a man or boy, particularly associated with South Wales, used much like 'mate' or 'pal'. So, 'Alright, boyo?' is a perfectly normal greeting!", // Humour added
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
      { text: "A sparkling unicorn (sadly, that's Scotland's gig)", isCorrect: false } // Humour added
    ],
    explanation: "The red dragon (Y Ddraig Goch) is the vibrant, ancient symbol of Wales and appears prominently on the Welsh flag! It's been breathing fire (metaphorically speaking) over Wales for centuries, long before any reality TV dragons came along.", // Humour added
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 23,
    text: "Which distinctive, colourful seabird with a clown-like beak is a common sight on Welsh coastal cliffs, particularly on its islands?",
    answers: [
      { text: "A fluffy penguin (too cold for them here!)", isCorrect: false }, // Humour added
      { text: "A charming puffin", isCorrect: true },
      { text: "A graceful flamingo (they prefer warmer, less rainy climes)", isCorrect: false }, // Humour added
      { text: "A rather tall ostrich (who'd struggle with the coastal winds!)", isCorrect: false } // Humour added
    ],
    explanation: "Puffins nest in large colonies on Welsh coastal cliffs, particularly on islands like Skomer and Skokholm, returning each spring to breed! Their colourful beaks make them look like they're ready for a party.", // Humour added
    multipleCorrect: false,
    section: "nature"
  },
  {
    id: 24,
    text: "What common farm animal is so iconic in Wales that it's often jokingly said to outnumber the human population?",
    answers: [
      { text: "The mighty Welsh Black cattle (they're impressive, but not *that* numerous)", isCorrect: false }, // Humour added
      { text: "The ubiquitous Welsh Mountain sheep", isCorrect: true },
      { text: "The plump Welsh Pig (they're delicious, but keep a lower profile)", isCorrect: false }, // Humour added
      { text: "The shaggy cow (who occasionally tries to sing in a choir)", isCorrect: false } // Humour added
    ],
    explanation: "Wales is famous for its vast numbers of hardy Welsh Mountain sheep, which graze across its hills and mountains, leading to the playful joke! They're basically the true rulers of the Welsh landscape, quietly judging your hiking boots.", // Humour added
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
      { text: "A hopping kangaroo (unless it's escaped from a very niche petting zoo!)", isCorrect: true } // Humour added
    ],
    explanation: "While Wales boasts stunning wildlife, kangaroos are native to Australia, not the valleys and mountains of Wales! If you see one, you've either had too much potent fruit spirit, or you're in the wrong country.", // Humour added
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
      { text: "ASDA (they just like our sheep, not our founding!)", isCorrect: false } // Humour added
    ],
    explanation: "Iceland Foods was founded in Oswestry, close to the Welsh border, and has deep roots and a large presence in Wales! So, next time you're buying a frozen pizza, remember its Welsh connection. Who knew?!", // Humour added
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 26,
    text: "If you're looking for local produce, crafts, or a good bargain in Wales, what would a traditional market be called in Welsh?",
    answers: [
      { text: "A bustling Bazaar (too exotic for our lovely drizzle)", isCorrect: false }, // Humour added
      { text: "A Marchnad", isCorrect: true },
      { text: "A vibrant Souk (unless you're buying magic carpets)", isCorrect: false }, // Humour added
      { text: "A bustling Fair (usually involves more rides than rhubarb)", isCorrect: false } // Humour added
    ],
    explanation: "Marchnad is the Welsh word for market – many Welsh towns like Cardiff and Swansea have traditional markets dating back centuries! Perfect for finding everything from fresh laverbread to a new woolly hat.", // Humour added
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 27,
    text: "Which of these was a famous, long-standing department store in Cardiff, a landmark for shoppers?",
    answers: [
      { text: "Harrods (far too posh, and in London!)", isCorrect: false }, // Humour added
      { text: "Howells", isCorrect: true },
      { text: "Jones Brothers (a good Welsh name, but not *the* store)", isCorrect: false }, // Humour added
      { text: "Professor Pants' Peculiar Emporium (sadly, fictional)", isCorrect: false } // Humour added
    ],
    explanation: "Howells was a beloved department store in Cardiff's city centre for over a century, although it has since closed and is now a House of Fraser! Many a Welsh person has fond memories of Christmas shopping there.", // Humour added
    multipleCorrect: false,
    section: "shops & commerce"
  },
  {
    id: 36,
    text: "Which of these items would you be least likely to find for sale at a traditional Welsh market stall?",
    answers: [
      { text: "Freshly made Welsh laverbread", isCorrect: false },
      { text: "A hand-knitted Welsh wool jumper", isCorrect: false },
      { text: "A set of scuba diving gear (unless the stallholder moonlights as an octopus!)", isCorrect: true }, // Humour added
      { text: "A Welsh slate coaster", isCorrect: false }
    ],
    explanation: "Welsh markets are famous for local produce, crafts, and traditional items, but you'd be hard-pressed to find specialized sports equipment like scuba gear there! Best to stick to the delicious cakes and crafts.", // Humour added
    multipleCorrect: false,
    section: "shops & commerce"
  },
];
