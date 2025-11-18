// SkyTrails - Travel Planner JavaScript

// Places data - Comprehensive list of Uttarakhand tourist destinations
const places = [
    // HARIDWAR - Pilgrim & Spiritual
    { name: "Har Ki Pauri (Evening Aarti)", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 400, ticket: 0 },
    { name: "Mansa Devi Temple (Cable Car)", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 450, ticket: 250 },
    { name: "Chandi Devi Temple (Cable Car)", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 450, ticket: 250 },
    { name: "Daksh Mahadev Temple", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 400, ticket: 0 },
    { name: "Pawan Dham Temple", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 400, ticket: 0 },
    { name: "Shanti Kunj Ashram", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 400, ticket: 0 },
    { name: "Bharat Mata Mandir Haridwar", category: "pilgrim", city: "Haridwar", region: "LowerPlains", est_travel: 400, ticket: 0 },
    { name: "Rajaji National Park (Haridwar)", category: "wildlife", city: "Haridwar", region: "LowerPlains", est_travel: 500, ticket: 500 },
    
    // RISHIKESH - Adventure & Spiritual
    { name: "Laxman Jhula (Suspension Bridge)", category: "youth", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Ram Jhula (Suspension Bridge)", category: "youth", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Ganga Rafting (White Water)", category: "adventure", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 1200 },
    { name: "Neelkanth Mahadev Temple", category: "pilgrim", city: "Rishikesh", region: "LowerPlains", est_travel: 800, ticket: 0 },
    { name: "Triveni Ghat (Evening Aarti)", category: "pilgrim", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Kunjapuri Temple (Sunrise Trek)", category: "adventure", city: "Rishikesh", region: "LowerPlains", est_travel: 700, ticket: 0 },
    { name: "Bungee Jumping Rishikesh", category: "adventure", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 3500 },
    { name: "Flying Fox Zipline", category: "adventure", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 1500 },
    { name: "Beatles Ashram (Chaurasi Kutia)", category: "youth", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 150 },
    { name: "Parmarth Niketan Ashram", category: "pilgrim", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Jumpin Heights (Giant Swing)", category: "adventure", city: "Rishikesh", region: "LowerPlains", est_travel: 600, ticket: 2500 },
    { name: "Rajaji Tiger Reserve (Rishikesh)", category: "wildlife", city: "Rishikesh", region: "LowerPlains", est_travel: 700, ticket: 600 },
    
    // DEHRADUN - Youth & Scenic
    { name: "Robbers Cave (Guchhupani)", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 450, ticket: 50 },
    { name: "Sahastradhara (Sulphur Springs)", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 500, ticket: 0 },
    { name: "Tapkeshwar Temple", category: "pilgrim", city: "Dehradun", region: "LowerPlains", est_travel: 450, ticket: 0 },
    { name: "Forest Research Institute (FRI)", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 450, ticket: 30 },
    { name: "Mindrolling Monastery", category: "pilgrim", city: "Dehradun", region: "LowerPlains", est_travel: 500, ticket: 0 },
    { name: "Rajpur Road (Shopping & Cafes)", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 450, ticket: 0 },
    { name: "Lachhiwala Picnic Spot", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 400, ticket: 50 },
    { name: "Clock Tower (Paltan Bazaar)", category: "youth", city: "Dehradun", region: "LowerPlains", est_travel: 450, ticket: 0 },
    
    // MUSSOORIE - Scenic & Youth
    { name: "Kempty Falls", category: "youth", city: "Mussoorie", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Gun Hill (Cable Car)", category: "scenic", city: "Mussoorie", region: "LowerPlains", est_travel: 600, ticket: 200 },
    { name: "Lal Tibba (Highest Point)", category: "scenic", city: "Mussoorie", region: "LowerPlains", est_travel: 650, ticket: 0 },
    { name: "Cloud's End", category: "scenic", city: "Mussoorie", region: "LowerPlains", est_travel: 700, ticket: 0 },
    { name: "Company Garden (Adventure Park)", category: "youth", city: "Mussoorie", region: "LowerPlains", est_travel: 600, ticket: 100 },
    { name: "Camel's Back Road (Sunset Point)", category: "scenic", city: "Mussoorie", region: "LowerPlains", est_travel: 600, ticket: 0 },
    { name: "Jharipani Falls", category: "youth", city: "Mussoorie", region: "LowerPlains", est_travel: 650, ticket: 0 },
    { name: "Mussoorie Lake (Boating)", category: "youth", city: "Mussoorie", region: "LowerPlains", est_travel: 600, ticket: 150 },
    { name: "Nag Tibba Trek (Base)", category: "adventure", city: "Mussoorie", region: "LowerPlains", est_travel: 800, ticket: 0 },
    { name: "Benog Wildlife Sanctuary", category: "wildlife", city: "Mussoorie", region: "LowerPlains", est_travel: 700, ticket: 200 },
    { name: "George Everest House", category: "scenic", city: "Mussoorie", region: "LowerPlains", est_travel: 700, ticket: 0 },
    
    // NAINITAL - Youth & Scenic
    { name: "Naini Lake (Boating)", category: "youth", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 300 },
    { name: "Naina Devi Temple", category: "pilgrim", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 0 },
    { name: "Snow View Point (Cable Car)", category: "scenic", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 300 },
    { name: "Tiffin Top (Dorothy's Seat)", category: "scenic", city: "Nainital", region: "Kumaon", est_travel: 1900, ticket: 0 },
    { name: "Naini Peak (China Peak)", category: "scenic", city: "Nainital", region: "Kumaon", est_travel: 1900, ticket: 0 },
    { name: "Eco Cave Gardens", category: "youth", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 150 },
    { name: "High Altitude Zoo", category: "wildlife", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 100 },
    { name: "Gurney House", category: "scenic", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 50 },
    { name: "Kilbury Bird Sanctuary", category: "wildlife", city: "Nainital", region: "Kumaon", est_travel: 2000, ticket: 100 },
    { name: "Sattal (Seven Lakes)", category: "youth", city: "Nainital", region: "Kumaon", est_travel: 2000, ticket: 0 },
    { name: "Mall Road (Shopping)", category: "youth", city: "Nainital", region: "Kumaon", est_travel: 1800, ticket: 0 },
    
    // ALMORA - Scenic & Pilgrim
    { name: "Katarmal Sun Temple", category: "pilgrim", city: "Almora", region: "Kumaon", est_travel: 1500, ticket: 0 },
    { name: "Chitai Golu Devta Temple", category: "pilgrim", city: "Almora", region: "Kumaon", est_travel: 1500, ticket: 0 },
    { name: "Bright End Corner (Sunset)", category: "scenic", city: "Almora", region: "Kumaon", est_travel: 1500, ticket: 0 },
    { name: "Jageshwar Temple Complex", category: "pilgrim", city: "Almora", region: "Kumaon", est_travel: 1600, ticket: 0 },
    { name: "Kasar Devi Temple", category: "pilgrim", city: "Almora", region: "Kumaon", est_travel: 1500, ticket: 0 },
    { name: "Binsar Mahadev Temple", category: "pilgrim", city: "Almora", region: "Kumaon", est_travel: 1600, ticket: 0 },
    { name: "Zero Point Binsar", category: "scenic", city: "Almora", region: "Kumaon", est_travel: 1600, ticket: 200 },
    { name: "Martola Village", category: "scenic", city: "Almora", region: "Kumaon", est_travel: 1500, ticket: 0 },
    
    // RANIKHET - Scenic & Youth
    { name: "Bharat Mata Mandir Ranikhet", category: "youth", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    { name: "Chaubatia Gardens", category: "scenic", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    { name: "Jhula Devi Temple", category: "pilgrim", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    { name: "Mankameshwar Temple", category: "pilgrim", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    { name: "Golf Course Ranikhet", category: "youth", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 500 },
    { name: "Upat Kalika Temple", category: "pilgrim", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    { name: "Haidakhan Babaji Temple", category: "pilgrim", city: "Ranikhet", region: "Kumaon", est_travel: 900, ticket: 0 },
    
    // KAUSANI - Scenic
    { name: "Anasakti Ashram (Gandhi Ashram)", category: "pilgrim", city: "Kausani", region: "Kumaon", est_travel: 1700, ticket: 0 },
    { name: "Rudradhari Falls & Caves", category: "youth", city: "Kausani", region: "Kumaon", est_travel: 1800, ticket: 0 },
    { name: "Sumitranandan Pant Gallery", category: "scenic", city: "Kausani", region: "Kumaon", est_travel: 1700, ticket: 20 },
    { name: "Baijnath Temple", category: "pilgrim", city: "Kausani", region: "Kumaon", est_travel: 1750, ticket: 0 },
    
    // MUKTESHWAR - Scenic & Adventure
    { name: "Mukteshwar Temple", category: "pilgrim", city: "Mukteshwar", region: "Kumaon", est_travel: 1400, ticket: 0 },
    { name: "Chauli Ki Jali (Cliff Jumping)", category: "adventure", city: "Mukteshwar", region: "Kumaon", est_travel: 1400, ticket: 0 },
    { name: "Sunrise Point Mukteshwar", category: "scenic", city: "Mukteshwar", region: "Kumaon", est_travel: 1400, ticket: 0 },
    { name: "Indian Veterinary Research Institute", category: "youth", city: "Mukteshwar", region: "Kumaon", est_travel: 1400, ticket: 0 },
    
    // BHIMTAL - Youth & Scenic
    { name: "Bhimtal Lake (Boating)", category: "youth", city: "Bhimtal", region: "Kumaon", est_travel: 1900, ticket: 200 },
    { name: "Bhimeshwar Temple", category: "pilgrim", city: "Bhimtal", region: "Kumaon", est_travel: 1900, ticket: 0 },
    { name: "Victoria Dam", category: "scenic", city: "Bhimtal", region: "Kumaon", est_travel: 1900, ticket: 0 },
    { name: "Hydel Aquarium", category: "youth", city: "Bhimtal", region: "Kumaon", est_travel: 1900, ticket: 50 },
    
    // LANSDOWNE - Scenic & Youth
    { name: "Tip N Top (Sunrise Point)", category: "scenic", city: "Lansdowne", region: "LowerPlains", est_travel: 800, ticket: 0 },
    { name: "Tarkeshwar Mahadev Temple", category: "pilgrim", city: "Lansdowne", region: "LowerPlains", est_travel: 900, ticket: 0 },
    { name: "St. Mary's Church", category: "scenic", city: "Lansdowne", region: "LowerPlains", est_travel: 800, ticket: 0 },
    { name: "Bhulla Tal (Lake)", category: "youth", city: "Lansdowne", region: "LowerPlains", est_travel: 800, ticket: 0 },
    { name: "Garhwali Mess Museum", category: "youth", city: "Lansdowne", region: "LowerPlains", est_travel: 800, ticket: 50 },
    
    // CHAKRATA - Adventure & Wildlife
    { name: "Tiger Falls", category: "adventure", city: "Chakrata", region: "LowerPlains", est_travel: 1000, ticket: 0 },
    { name: "Buddha Temple", category: "pilgrim", city: "Chakrata", region: "LowerPlains", est_travel: 1000, ticket: 0 },
    { name: "Deoban (Deodar Forest)", category: "wildlife", city: "Chakrata", region: "LowerPlains", est_travel: 1100, ticket: 0 },
    { name: "Kanasar (Cedar Forest)", category: "scenic", city: "Chakrata", region: "LowerPlains", est_travel: 1100, ticket: 0 },
    
    // JIM CORBETT & WILDLIFE
    { name: "Jim Corbett National Park (Jeep Safari)", category: "wildlife", city: "Ramnagar", region: "CorbettRegion", est_travel: 1200, ticket: 1500 },
    { name: "Corbett Waterfall", category: "youth", city: "Ramnagar", region: "CorbettRegion", est_travel: 1200, ticket: 50 },
    { name: "Garjia Temple (Corbett)", category: "pilgrim", city: "Ramnagar", region: "CorbettRegion", est_travel: 1200, ticket: 0 },
    { name: "Corbett Museum", category: "youth", city: "Ramnagar", region: "CorbettRegion", est_travel: 1200, ticket: 100 },
    { name: "Binsar Wildlife Sanctuary", category: "wildlife", city: "Binsar", region: "Kumaon", est_travel: 1600, ticket: 200 },
    { name: "Pangot Bird Sanctuary", category: "wildlife", city: "Pangot", region: "Kumaon", est_travel: 1200, ticket: 0 },
    
    // CHAMBA - Scenic & Adventure
    { name: "Surkanda Devi Temple (Trek)", category: "adventure", city: "Chamba", region: "LowerPlains", est_travel: 650, ticket: 0 },
    { name: "Dhanaulti (Adventure Park)", category: "adventure", city: "Chamba", region: "LowerPlains", est_travel: 700, ticket: 300 },
    { name: "Eco Park Dhanaulti", category: "scenic", city: "Chamba", region: "LowerPlains", est_travel: 700, ticket: 50 },
    
    // KEDARNATH REGION - Pilgrim & Adventure
    { name: "Kedarnath Temple", category: "pilgrim", city: "Kedarnath", region: "GarhwalHigh", est_travel: 3500, ticket: 200 },
    { name: "Gaurikund (Kedarnath Base)", category: "pilgrim", city: "Kedarnath", region: "GarhwalHigh", est_travel: 3400, ticket: 0 },
    { name: "Trijuginarayan Temple", category: "pilgrim", city: "Kedarnath", region: "GarhwalHigh", est_travel: 3400, ticket: 0 },
    { name: "Vasuki Tal (Trek)", category: "adventure", city: "Kedarnath", region: "GarhwalHigh", est_travel: 3700, ticket: 0 },
    { name: "Chorabari Tal (Gandhi Sarovar)", category: "adventure", city: "Kedarnath", region: "GarhwalHigh", est_travel: 3600, ticket: 0 },
    
    // BADRINATH REGION - Pilgrim & Scenic
    { name: "Badrinath Temple", category: "pilgrim", city: "Badrinath", region: "GarhwalHigh", est_travel: 3800, ticket: 150 },
    { name: "Mana Village (Last Village)", category: "scenic", city: "Badrinath", region: "GarhwalHigh", est_travel: 3900, ticket: 0 },
    { name: "Vasudhara Falls", category: "adventure", city: "Badrinath", region: "GarhwalHigh", est_travel: 3900, ticket: 0 },
    { name: "Vyas Gufa (Cave)", category: "pilgrim", city: "Badrinath", region: "GarhwalHigh", est_travel: 3900, ticket: 0 },
    { name: "Tapt Kund (Hot Spring)", category: "pilgrim", city: "Badrinath", region: "GarhwalHigh", est_travel: 3800, ticket: 0 },
    { name: "Bheem Pul", category: "scenic", city: "Badrinath", region: "GarhwalHigh", est_travel: 3900, ticket: 0 },
    { name: "Satopanth Lake (Trek)", category: "adventure", city: "Badrinath", region: "GarhwalHigh", est_travel: 4200, ticket: 0 },
    
    // YAMUNOTRI - Pilgrim & Adventure
    { name: "Yamunotri Temple", category: "pilgrim", city: "Yamunotri", region: "GarhwalHigh", est_travel: 3400, ticket: 0 },
    { name: "Janki Chatti (Base Camp)", category: "pilgrim", city: "Yamunotri", region: "GarhwalHigh", est_travel: 3300, ticket: 0 },
    { name: "Surya Kund (Hot Spring)", category: "pilgrim", city: "Yamunotri", region: "GarhwalHigh", est_travel: 3400, ticket: 0 },
    { name: "Divya Shila", category: "pilgrim", city: "Yamunotri", region: "GarhwalHigh", est_travel: 3400, ticket: 0 },
    
    // GANGOTRI - Pilgrim & Adventure
    { name: "Gangotri Temple", category: "pilgrim", city: "Gangotri", region: "GarhwalHigh", est_travel: 3300, ticket: 0 },
    { name: "Gaumukh (Gomukh - Glacier Source)", category: "adventure", city: "Gangotri", region: "GarhwalHigh", est_travel: 3600, ticket: 0 },
    { name: "Tapovan (Meditation Site)", category: "adventure", city: "Gangotri", region: "GarhwalHigh", est_travel: 3700, ticket: 0 },
    { name: "Bhairon Ghati Temple", category: "pilgrim", city: "Gangotri", region: "GarhwalHigh", est_travel: 3350, ticket: 0 },
    { name: "Pandava Gufa (Cave)", category: "pilgrim", city: "Gangotri", region: "GarhwalHigh", est_travel: 3300, ticket: 0 },
    
    // AULI & JOSHIMATH - Adventure & Scenic
    { name: "Auli Ski Resort", category: "adventure", city: "Auli", region: "AuliRegion", est_travel: 3000, ticket: 1200 },
    { name: "Auli Ropeway (Longest in India)", category: "adventure", city: "Auli", region: "AuliRegion", est_travel: 3000, ticket: 800 },
    { name: "Gurso Bugyal (Meadow)", category: "scenic", city: "Auli", region: "AuliRegion", est_travel: 3100, ticket: 0 },
    { name: "Joshimath (Winter Seat Badrinath)", category: "pilgrim", city: "Joshimath", region: "AuliRegion", est_travel: 2800, ticket: 0 },
    { name: "Valley of Flowers National Park", category: "adventure", city: "Joshimath", region: "AuliRegion", est_travel: 2200, ticket: 0 },
    { name: "Hemkund Sahib (Gurudwara Trek)", category: "pilgrim", city: "Joshimath", region: "AuliRegion", est_travel: 2400, ticket: 0 },
    { name: "Narsingh Temple Joshimath", category: "pilgrim", city: "Joshimath", region: "AuliRegion", est_travel: 2800, ticket: 0 },
    { name: "Kalpavriksha Tree", category: "pilgrim", city: "Joshimath", region: "AuliRegion", est_travel: 2800, ticket: 0 },
    { name: "Auli Artificial Lake", category: "scenic", city: "Auli", region: "AuliRegion", est_travel: 3000, ticket: 0 },
    
    // CHOPTA - Adventure & Scenic
    { name: "Chopta (Mini Switzerland)", category: "scenic", city: "Chopta", region: "GarhwalHigh", est_travel: 1500, ticket: 0 },
    { name: "Tungnath Temple (Highest Shiva)", category: "pilgrim", city: "Chopta", region: "GarhwalHigh", est_travel: 1600, ticket: 0 },
    { name: "Chandrashila Peak (Trek)", category: "adventure", city: "Chopta", region: "GarhwalHigh", est_travel: 1700, ticket: 0 },
    { name: "Deoria Tal (Lake Trek)", category: "adventure", city: "Chopta", region: "GarhwalHigh", est_travel: 1600, ticket: 0 },
    
    // TEHRI - Adventure & Scenic
    { name: "Tehri Dam (Largest in India)", category: "scenic", city: "Tehri", region: "GarhwalHigh", est_travel: 1100, ticket: 0 },
    { name: "Tehri Lake (Water Sports)", category: "adventure", city: "Tehri", region: "GarhwalHigh", est_travel: 1100, ticket: 500 },
    { name: "New Tehri (Modern Town)", category: "scenic", city: "Tehri", region: "GarhwalHigh", est_travel: 1100, ticket: 0 },
    { name: "Chandrabadni Temple", category: "pilgrim", city: "Tehri", region: "GarhwalHigh", est_travel: 1200, ticket: 0 },
    
    // PAURI - Scenic & Pilgrim
    { name: "Kandoliya Temple", category: "pilgrim", city: "Pauri", region: "GarhwalHigh", est_travel: 1300, ticket: 0 },
    { name: "Kyunkaleshwar Temple", category: "pilgrim", city: "Pauri", region: "GarhwalHigh", est_travel: 1300, ticket: 0 },
    { name: "Ransi Village (Scenic Views)", category: "scenic", city: "Pauri", region: "GarhwalHigh", est_travel: 1400, ticket: 0 },
    
    // PITHORAGARH - Scenic & Adventure
    { name: "Pithoragarh Fort", category: "scenic", city: "Pithoragarh", region: "Kumaon", est_travel: 2000, ticket: 0 },
    { name: "Chandak Hill (Sunrise)", category: "scenic", city: "Pithoragarh", region: "Kumaon", est_travel: 2000, ticket: 0 },
    { name: "Kapileshwar Mahadev Temple", category: "pilgrim", city: "Pithoragarh", region: "Kumaon", est_travel: 2000, ticket: 0 },
    { name: "Nakuleshwar Temple", category: "pilgrim", city: "Pithoragarh", region: "Kumaon", est_travel: 2000, ticket: 0 },
    { name: "Askot Wildlife Sanctuary", category: "wildlife", city: "Pithoragarh", region: "Kumaon", est_travel: 2200, ticket: 300 },
    
    // MUNSIYARI - Scenic & Adventure
    { name: "Munsiyari (Base for Treks)", category: "scenic", city: "Munsiyari", region: "Kumaon", est_travel: 2500, ticket: 0 },
    { name: "Thamri Kund (Lake)", category: "adventure", city: "Munsiyari", region: "Kumaon", est_travel: 2500, ticket: 0 },
    { name: "Maheshwari Kund (Lake)", category: "adventure", city: "Munsiyari", region: "Kumaon", est_travel: 2500, ticket: 0 },
    { name: "Birthi Falls", category: "scenic", city: "Munsiyari", region: "Kumaon", est_travel: 2600, ticket: 0 },
    { name: "Nanda Devi Temple Munsiyari", category: "pilgrim", city: "Munsiyari", region: "Kumaon", est_travel: 2500, ticket: 0 },
    
    // NANDA DEVI - Adventure & Scenic
    { name: "Nanda Devi Base Camp", category: "adventure", city: "Nanda Devi", region: "GarhwalHigh", est_travel: 4000, ticket: 0 },
    { name: "Nanda Devi National Park", category: "wildlife", city: "Nanda Devi", region: "GarhwalHigh", est_travel: 4000, ticket: 500 },
    { name: "Milam Glacier (Trek)", category: "adventure", city: "Nanda Devi", region: "GarhwalHigh", est_travel: 4500, ticket: 0 },
    
    // RAJAJI NATIONAL PARK - Wildlife
    { name: "Rajaji National Park (Wildlife Safari)", category: "wildlife", city: "Rajaji", region: "LowerPlains", est_travel: 900, ticket: 500 },
    { name: "Chilla Safari Zone", category: "wildlife", city: "Rajaji", region: "LowerPlains", est_travel: 1000, ticket: 600 },
    
    // OTHER ATTRACTIONS
    { name: "Devprayag (Sangam)", category: "pilgrim", city: "Devprayag", region: "LowerPlains", est_travel: 700, ticket: 0 },
    { name: "Rudraprayag (Sangam)", category: "pilgrim", city: "Rudraprayag", region: "GarhwalHigh", est_travel: 2000, ticket: 0 },
    { name: "Karnaprayag (Sangam)", category: "pilgrim", city: "Karnaprayag", region: "GarhwalHigh", est_travel: 2200, ticket: 0 },
    { name: "Vishnuprayag (Sangam)", category: "pilgrim", city: "Vishnuprayag", region: "GarhwalHigh", est_travel: 2700, ticket: 0 },
    { name: "Nandaprayag (Sangam)", category: "pilgrim", city: "Nandaprayag", region: "GarhwalHigh", est_travel: 2300, ticket: 0 }
];

const hotels = [
    { name: "Divine Resort & Spa (Rishikesh)", city: "Rishikesh", price_per_night: 3200, rating: 4, popularity: 25 },
    { name: "River View Retreat (Rishikesh)", city: "Rishikesh", price_per_night: 2200, rating: 4, popularity: 18 },
    { name: "Sterling Nainital", city: "Nainital", price_per_night: 4200, rating: 4, popularity: 30 },
    { name: "Lakefront Inn (Nainital)", city: "Nainital", price_per_night: 2600, rating: 4, popularity: 22 },
    { name: "Corbett Resort & Spa (Ramnagar)", city: "Ramnagar", price_per_night: 3500, rating: 4, popularity: 15 },
    { name: "Budget Stay (Dehradun)", city: "Dehradun", price_per_night: 1200, rating: 3, popularity: 40 },
    { name: "Ghangaria Lodge (Ghangaria)", city: "Ghangaria", price_per_night: 1900, rating: 3, popularity: 8 },
    { name: "Himalayan Retreat (Auli)", city: "Auli", price_per_night: 5200, rating: 5, popularity: 12 },
    { name: "Luxury Haridwar Hotel", city: "Haridwar", price_per_night: 2100, rating: 3, popularity: 35 },
    { name: "Binsar Heritage (Binsar)", city: "Binsar", price_per_night: 2800, rating: 4, popularity: 6 }
];

// Global state
let currentUser = {
    name: '',
    age: 25,
    placeSelectionMode: 'suggested',
    selectedPlaces: [],
    days: 4,
    hotel: null,
    itinerary: null,
    transport: null
};

let feedbackData = JSON.parse(localStorage.getItem('skytrails_feedback') || '[]');

// Get unique cities from places
function getUniqueCities() {
    const cities = [...new Set(places.map(p => p.city))];
    return cities.sort();
}

// Category icons
const categoryIcons = {
    pilgrim: '🕉️',
    adventure: '⛰️',
    youth: '🎢',
    wildlife: '🦅',
    scenic: '🏞️'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    // Populate city dropdowns
    populateCityDropdowns();
    
    setupEventListeners();
    renderFeedbackList();
    
    // Load saved itinerary if exists
    const saved = localStorage.getItem('skytrails_itinerary');
    if (saved) {
        currentUser.itinerary = JSON.parse(saved);
    }
});

function populateCityDropdowns() {
    const cities = getUniqueCities();
    const suggestedSelect = document.getElementById('suggested-city');
    const manualSelect = document.getElementById('manual-city');
    
    if (suggestedSelect) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            suggestedSelect.appendChild(option);
        });
    }
    
    if (manualSelect) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            manualSelect.appendChild(option);
        });
    }
}

function setupEventListeners() {
    const transportForm = document.getElementById('transport-booking-form');
    if (transportForm) {
        transportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleTransportBooking();
        });
    }
    
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFeedbackSubmit();
        });
    }
    
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('feedback-rating-value').value = this.dataset.rating;
        });
    });
    
    // Load admin data
    drivers = JSON.parse(localStorage.getItem('skytrails_drivers') || '[]');
    bikeFleet = JSON.parse(localStorage.getItem('skytrails_bike_fleet') || '[]');
    partnerHotels = JSON.parse(localStorage.getItem('skytrails_partner_hotels') || '[]');
    
    // Add partner hotels to main hotels array if not already there
    partnerHotels.forEach(ph => {
        if (!hotels.find(h => h.name === ph.name && h.city === ph.city)) {
            hotels.push({
                name: ph.name,
                city: ph.city,
                price_per_night: ph.price_per_night,
                rating: ph.rating,
                popularity: 0
            });
        }
    });
}

function startPlanning() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    showPage('planner');
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function backToHome() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('hero').style.display = 'flex';
    window.scrollTo(0, 0);
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    if (pageName === 'itinerary') {
        displayItinerary();
    }
}

function setPlaceSelectionMode(mode) {
    currentUser.placeSelectionMode = mode;
    
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.choice-btn').classList.add('active');
    
    if (mode === 'suggested') {
        document.getElementById('suggested-places-section').style.display = 'block';
        document.getElementById('manual-places-section').style.display = 'none';
        // Clear places list until city is selected
        document.getElementById('suggested-places-list').innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">Please select a city to see recommended places</p>';
    } else {
        document.getElementById('suggested-places-section').style.display = 'none';
        document.getElementById('manual-places-section').style.display = 'block';
        // Clear places list until city is selected
        document.getElementById('manual-places-list').innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">Please select a city to see available places</p>';
    }
}

function filterSuggestedByCity() {
    const city = document.getElementById('suggested-city').value;
    if (!city) {
        document.getElementById('suggested-places-list').innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">Please select a city to see recommended places</p>';
        return;
    }
    
    const age = parseInt(document.getElementById('user-age').value) || 25;
    currentUser.age = age;
    
    let suggestedCategories = [];
    if (age <= 30) {
        suggestedCategories = ['adventure', 'youth', 'wildlife'];
    } else if (age <= 55) {
        suggestedCategories = ['pilgrim', 'adventure'];
    } else {
        suggestedCategories = ['pilgrim', 'scenic'];
    }
    
    // Filter by city and suggested categories
    const cityPlaces = places.filter(p => 
        p.city.toLowerCase() === city.toLowerCase() && 
        suggestedCategories.includes(p.category)
    );
    
    // Group by category
    displayPlacesByCategory(cityPlaces, 'suggested-places-list');
}

function filterManualByCity() {
    const city = document.getElementById('manual-city').value;
    if (!city) {
        document.getElementById('manual-places-list').innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">Please select a city to see available places</p>';
        return;
    }
    
    // Filter by city only
    const cityPlaces = places.filter(p => p.city.toLowerCase() === city.toLowerCase());
    
    // Group by category
    displayPlacesByCategory(cityPlaces, 'manual-places-list');
}

function displayPlacesByCategory(placesList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (placesList.length === 0) {
        container.innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">No places found in this city for your selection.</p>';
        return;
    }
    
    // Group places by category
    const groupedByCategory = {};
    placesList.forEach(place => {
        if (!groupedByCategory[place.category]) {
            groupedByCategory[place.category] = [];
        }
        groupedByCategory[place.category].push(place);
    });
    
    // Sort categories: pilgrim, adventure, youth, wildlife, scenic
    const categoryOrder = ['pilgrim', 'adventure', 'youth', 'wildlife', 'scenic'];
    
    let html = '';
    categoryOrder.forEach(category => {
        if (groupedByCategory[category]) {
            const categoryPlaces = groupedByCategory[category];
            html += `
                <div class="city-category-section">
                    <div class="category-header">
                        <span class="category-icon">${categoryIcons[category] || '📍'}</span>
                        <h4>${category} (${categoryPlaces.length})</h4>
                    </div>
                    <div class="places-in-category">
                        ${categoryPlaces.map(place => {
                            const isSelected = currentUser.selectedPlaces.some(p => p.name === place.name);
                            return `
                                <div class="place-card ${isSelected ? 'selected' : ''}" onclick="togglePlaceSelection('${place.name}', '${currentUser.placeSelectionMode}')">
                                    <input type="checkbox" ${isSelected ? 'checked' : ''}>
                                    <div class="place-name">${place.name}</div>
                                    <div class="place-details">
                                        <span>💰 Travel: ₹${place.est_travel} | Ticket: ₹${place.ticket}</span>
                                        ${place.region ? `<span>📍 Region: ${place.region}</span>` : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = html;
}

function togglePlaceSelection(placeName, mode) {
    const place = places.find(p => p.name === placeName);
    if (!place) return;
    
    const card = event.currentTarget;
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        if (!currentUser.selectedPlaces.find(p => p.name === place.name)) {
            currentUser.selectedPlaces.push(place);
            card.classList.add('selected');
        }
    } else {
        currentUser.selectedPlaces = currentUser.selectedPlaces.filter(p => p.name !== place.name);
        card.classList.remove('selected');
    }
    
    // Refresh the display to show updated selection
    if (mode === 'suggested') {
        filterSuggestedByCity();
    } else {
        filterManualByCity();
    }
}

function searchHotels(city) {
    const container = document.getElementById('hotels-list');
    if (!city || city === 'no') {
        container.innerHTML = '';
        return;
    }
    
    const cityHotels = hotels.filter(h => h.city.toLowerCase().includes(city));
    
    if (cityHotels.length === 0) {
        const topHotels = [...hotels]
            .sort((a, b) => (b.rating * 30 + b.popularity * 2) - (a.rating * 30 + a.popularity * 2))
            .slice(0, 5);
        
        container.innerHTML = '<p style="color: var(--muted); margin-bottom: 1rem;">No hotels found in this city. Showing top recommendations:</p>' +
            topHotels.map((hotel) => `
                <div class="hotel-item" onclick="selectHotel('${hotel.name}')">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <strong>${hotel.name}</strong>
                            <p style="color: var(--muted); margin: 0.25rem 0;">📍 ${hotel.city} | ⭐ ${hotel.rating}/5 | ₹${hotel.price_per_night}/night</p>
                        </div>
                        ${currentUser.hotel?.name === hotel.name ? '<span style="color: var(--primary);">✓ Selected</span>' : ''}
                    </div>
                </div>
            `).join('');
    } else {
        container.innerHTML = cityHotels.map((hotel) => `
            <div class="hotel-item" onclick="selectHotel('${hotel.name}')">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <strong>${hotel.name}</strong>
                        <p style="color: var(--muted); margin: 0.25rem 0;">⭐ ${hotel.rating}/5 | ₹${hotel.price_per_night}/night</p>
                    </div>
                    ${currentUser.hotel?.name === hotel.name ? '<span style="color: var(--primary);">✓ Selected</span>' : ''}
                </div>
            </div>
        `).join('');
    }
}

function selectHotel(hotelName) {
    currentUser.hotel = hotels.find(h => h.name === hotelName);
    searchHotels(document.getElementById('city-hotel').value.trim().toLowerCase());
    showResult('planner-result', `Selected: ${currentUser.hotel.name}`, 'success');
}

function checkAndSuggestHotels() {
    const name = document.getElementById('user-name').value;
    const age = parseInt(document.getElementById('user-age').value) || 25;
    const days = parseInt(document.getElementById('travel-days').value) || 4;
    
    if (!name) {
        showResult('planner-result', 'Please enter your name', 'error');
        return;
    }
    
    if (currentUser.selectedPlaces.length === 0) {
        showResult('planner-result', 'Please select at least one place to visit', 'error');
        return;
    }
    
    currentUser.name = name;
    currentUser.age = age;
    currentUser.days = days;
    
    // Suggest hotels based on selected cities
    suggestHotelsForSelectedCities();
}

function suggestHotelsForSelectedCities() {
    if (currentUser.selectedPlaces.length === 0) return;
    
    // Get unique cities from selected places
    const cities = [...new Set(currentUser.selectedPlaces.map(p => p.city))];
    
    // Find hotels in these cities
    const cityHotels = hotels.filter(h => cities.some(city => h.city.toLowerCase() === city.toLowerCase()));
    
    if (cityHotels.length > 0) {
        // Show hotel suggestion section
        document.getElementById('hotels-suggestion-section').style.display = 'block';
        const container = document.getElementById('suggested-hotels-list');
        
        container.innerHTML = cityHotels.map((hotel) => {
            const isSelected = currentUser.hotel?.name === hotel.name;
            return `
                <div class="hotel-item ${isSelected ? 'selected' : ''}" onclick="selectSuggestedHotel('${hotel.name}')">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <strong>${hotel.name}</strong>
                            <p style="color: var(--muted); margin: 0.25rem 0;">📍 ${hotel.city} | ⭐ ${hotel.rating}/5 | ₹${hotel.price_per_night}/night</p>
                        </div>
                        ${isSelected ? '<span style="color: var(--primary);">✓ Selected</span>' : '<button class="btn btn-secondary" style="padding: 0.5rem 1rem;">Select</button>'}
                    </div>
                </div>
            `;
        }).join('');
        
        // Scroll to hotel section
        setTimeout(() => {
            document.getElementById('hotels-suggestion-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // No hotels found, allow to generate without hotel
        generateItinerary();
    }
}

function selectSuggestedHotel(hotelName) {
    currentUser.hotel = hotels.find(h => h.name === hotelName);
    suggestHotelsForSelectedCities(); // Refresh to show selection
    showResult('planner-result', `Selected: ${currentUser.hotel.name}`, 'success');
}

function skipHotel() {
    currentUser.hotel = null;
    generateItinerary();
}

function generateItinerary() {
    const days = currentUser.days || parseInt(document.getElementById('travel-days').value) || 4;
    
    const itineraryPlaces = currentUser.selectedPlaces.slice(0, days);
    
    let transport = 0;
    let tickets = 0;
    itineraryPlaces.forEach(place => {
        transport += place.est_travel;
        tickets += place.ticket;
    });
    
    const hotelCost = currentUser.hotel ? currentUser.hotel.price_per_night * days : 1800 * days;
    const food = 600 * days;
    const total = transport + hotelCost + food + tickets;
    
    currentUser.itinerary = {
        places: itineraryPlaces,
        days: days,
        hotel: currentUser.hotel,
        budget: {
            transport,
            hotel: hotelCost,
            food,
            tickets,
            total
        }
    };
    
    localStorage.setItem('skytrails_itinerary', JSON.stringify(currentUser.itinerary));
    
    displayItinerary();
    showPage('itinerary');
    showResult('planner-result', 'Itinerary generated successfully!', 'success');
    
    // Hide hotel section after generation
    document.getElementById('hotels-suggestion-section').style.display = 'none';
}

function displayItinerary() {
    if (!currentUser.itinerary) {
        const saved = localStorage.getItem('skytrails_itinerary');
        if (saved) {
            currentUser.itinerary = JSON.parse(saved);
        } else {
            document.getElementById('itinerary-display').innerHTML = '<p style="color: var(--muted);">No itinerary found. Please create one in the Travel Planner.</p>';
            return;
        }
    }
    
    const it = currentUser.itinerary;
    const container = document.getElementById('itinerary-display');
    
    container.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">📅 ${it.days} Day Itinerary for ${currentUser.name || 'You'}</h3>
            ${it.places.map((place, idx) => `
                <div class="itinerary-day">
                    <h3>Day ${idx + 1}: ${place.name}</h3>
                    <p style="color: var(--muted);">📍 ${place.city} | ${place.category} | Travel: ₹${place.est_travel} | Ticket: ₹${place.ticket}</p>
                </div>
            `).join('')}
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 16px; margin-top: 2rem;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">💰 Budget Estimate</h3>
            <div style="display: grid; gap: 0.75rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Transport:</span>
                    <strong>₹${it.budget.transport}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Hotel (${it.days} nights):</span>
                    <strong>₹${it.budget.hotel}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Food:</span>
                    <strong>₹${it.budget.food}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Tickets:</span>
                    <strong>₹${it.budget.tickets}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 1.25rem;">
                    <span>Total:</span>
                    <strong style="color: var(--primary);">₹${it.budget.total}</strong>
                </div>
            </div>
            ${it.hotel ? `<p style="margin-top: 1rem; color: var(--muted);">🏨 Selected Hotel: ${it.hotel.name} (${it.hotel.city})</p>` : ''}
        </div>
    `;
}

function selectTransport(type) {
    currentUser.transport = type;
    document.getElementById('transport-form').style.display = 'block';
    document.getElementById('transport-result').innerHTML = '';
    window.scrollTo({ top: document.getElementById('transport-form').offsetTop - 100, behavior: 'smooth' });
}

function handleTransportBooking() {
    const name = document.getElementById('transport-name').value;
    const phone = document.getElementById('transport-phone').value;
    const start = document.getElementById('transport-start').value;
    const date = document.getElementById('transport-date').value;
    
    if (!name || !phone || !start || !date) {
        showResult('transport-result', 'Please fill all fields', 'error');
        return;
    }
    
    const transportTypes = {
        driver: 'Recommended Driver',
        bike: 'Rent a Bike',
        scooty: 'Rent a Scooty',
        self: 'Self Vehicle'
    };
    
    showResult('transport-result', 
        `Booking confirmed for ${transportTypes[currentUser.transport]}! We'll contact you at ${phone} to confirm details.`, 
        'success');
    
    document.getElementById('transport-booking-form').reset();
    
    const booking = {
        type: currentUser.transport,
        name,
        phone,
        start,
        date,
        timestamp: new Date().toISOString()
    };
    
    const bookings = JSON.parse(localStorage.getItem('skytrails_bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('skytrails_bookings', JSON.stringify(bookings));
}

function handleFeedbackSubmit() {
    const name = document.getElementById('feedback-name').value;
    const rating = parseInt(document.getElementById('feedback-rating-value').value);
    const message = document.getElementById('feedback-message').value;
    const suggestions = document.getElementById('feedback-suggestions').value;
    
    if (!name || !message) {
        showResult('feedback-result', 'Please fill all required fields', 'error');
        return;
    }
    
    const feedback = {
        name,
        rating,
        message,
        suggestions,
        date: new Date().toISOString()
    };
    
    feedbackData.push(feedback);
    localStorage.setItem('skytrails_feedback', JSON.stringify(feedbackData));
    
    showResult('feedback-result', 'Thank you for your feedback! We appreciate your input.', 'success');
    document.getElementById('feedback-form').reset();
    
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.rating === '5') btn.classList.add('active');
    });
    document.getElementById('feedback-rating-value').value = '5';
    
    renderFeedbackList();
}

function renderFeedbackList() {
    const container = document.getElementById('feedback-list');
    if (!container) return;
    
    if (feedbackData.length === 0) {
        container.innerHTML = '<p style="color: var(--muted);">No feedback yet. Be the first to share!</p>';
        return;
    }
    
    const emojiMap = {
        1: '😞',
        2: '😐',
        3: '🙂',
        4: '😊',
        5: '😍'
    };
    
    container.innerHTML = feedbackData.slice().reverse().slice(0, 10).map(fb => `
        <div class="feedback-item">
            <div class="feedback-header">
                <span class="feedback-author">${fb.name}</span>
                <span class="feedback-rating">${emojiMap[fb.rating] || '⭐'}</span>
            </div>
            <p style="margin: 0.75rem 0; color: var(--text);">${fb.message}</p>
            ${fb.suggestions ? `<p style="color: var(--muted); font-size: 0.9rem; font-style: italic;">💡 Suggestion: ${fb.suggestions}</p>` : ''}
            <p style="color: var(--muted); font-size: 0.85rem; margin-top: 0.5rem;">${new Date(fb.date).toLocaleDateString()}</p>
        </div>
    `).join('');
}

function showResult(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.textContent = message;
    element.className = `result-message ${type}`;
    
    setTimeout(() => {
        element.textContent = '';
        element.className = 'result-message';
    }, 5000);
}

// Admin/Partners functionality
let drivers = JSON.parse(localStorage.getItem('skytrails_drivers') || '[]');
let bikeFleet = JSON.parse(localStorage.getItem('skytrails_bike_fleet') || '[]');
let partnerHotels = JSON.parse(localStorage.getItem('skytrails_partner_hotels') || '[]');

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(`${tab}-tab`).classList.add('active');
    event.target.classList.add('active');
    
    if (tab === 'driver') {
        loadDriverProfile();
        loadDriverBookings();
    } else if (tab === 'bike-rental') {
        loadBikeFleet();
        loadBikeRentals();
    } else if (tab === 'hotel') {
        loadHotelProperties();
        loadHotelBookings();
    }
}

const bookingTypes = {
    driver: 'Driver Service',
    bike: 'Bike Rental',
    scooty: 'Scooty Rental',
    self: 'Self Vehicle'
};

function loadAdminDashboard() {
    const bookings = JSON.parse(localStorage.getItem('skytrails_bookings') || '[]');
    const itineraries = JSON.parse(localStorage.getItem('skytrails_itinerary') ? '1' : '0');
    
    document.getElementById('total-bookings').textContent = bookings.length;
    document.getElementById('active-itineraries').textContent = itineraries;
    document.getElementById('registered-drivers').textContent = drivers.length;
    document.getElementById('partner-hotels').textContent = partnerHotels.length;
    
    // Show recent bookings
    const container = document.getElementById('recent-bookings');
    if (bookings.length === 0) {
        container.innerHTML = '<p class="muted">No bookings yet.</p>';
    } else {
        container.innerHTML = bookings.slice().reverse().slice(0, 10).map(booking => `
            <div class="data-row">
                <strong>${bookingTypes[booking.type] || booking.type}</strong> | ${booking.name}<br>
                <span class="muted">📞 ${booking.phone} | 📍 ${booking.start} | 📅 ${new Date(booking.date).toLocaleDateString()}</span>
            </div>
        `).join('');
    }
}

// Driver Registration
document.getElementById('driver-registration-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const driver = {
        id: Date.now(),
        name: document.getElementById('driver-name').value,
        phone: document.getElementById('driver-phone').value,
        license: document.getElementById('driver-license').value,
        experience: parseInt(document.getElementById('driver-experience').value),
        vehicle: document.getElementById('driver-vehicle').value,
        areas: document.getElementById('driver-areas').value.split(',').map(a => a.trim()),
        rate: parseInt(document.getElementById('driver-rate').value),
        status: 'available',
        bookings: []
    };
    
    drivers.push(driver);
    localStorage.setItem('skytrails_drivers', JSON.stringify(drivers));
    
    showResult('driver-result', `Driver registered successfully! ID: ${driver.id}`, 'success');
    this.reset();
    loadDriverProfile();
    loadAdminDashboard();
});

function loadDriverProfile() {
    const container = document.getElementById('driver-profile');
    if (drivers.length === 0) {
        container.innerHTML = '<p class="muted">No driver profile registered yet.</p>';
        return;
    }
    
    // Show most recent driver profile
    const driver = drivers[drivers.length - 1];
    container.innerHTML = `
        <div class="data-row">
            <strong>${driver.name}</strong> | ID: ${driver.id}<br>
            <span class="muted">📞 ${driver.phone} | 🚗 ${driver.vehicle} | ⭐ ${driver.experience} years experience</span><br>
            <span class="muted">📍 Service Areas: ${driver.areas.join(', ')} | ₹${driver.rate}/day</span>
        </div>
    `;
}

function loadDriverBookings() {
    const bookings = JSON.parse(localStorage.getItem('skytrails_bookings') || '[]');
    const driverBookings = bookings.filter(b => b.type === 'driver');
    
    const container = document.getElementById('driver-bookings');
    if (driverBookings.length === 0) {
        container.innerHTML = '<p class="muted">No bookings assigned yet.</p>';
        return;
    }
    
    container.innerHTML = driverBookings.slice().reverse().map(booking => `
        <div class="data-row">
            <strong>${booking.name}</strong> | 📞 ${booking.phone}<br>
            <span class="muted">📍 Pickup: ${booking.start} | 📅 ${new Date(booking.date).toLocaleDateString()}</span>
        </div>
    `).join('');
}

// Bike Rental
document.getElementById('bike-add-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bike = {
        id: Date.now(),
        type: document.getElementById('bike-type').value,
        brand: document.getElementById('bike-brand').value,
        location: document.getElementById('bike-location').value,
        rate: parseInt(document.getElementById('bike-rate').value),
        status: document.getElementById('bike-status').value
    };
    
    bikeFleet.push(bike);
    localStorage.setItem('skytrails_bike_fleet', JSON.stringify(bikeFleet));
    
    showResult('bike-result', `Vehicle added successfully! ID: ${bike.id}`, 'success');
    this.reset();
    loadBikeFleet();
    loadAdminDashboard();
});

function loadBikeFleet() {
    const container = document.getElementById('bike-fleet');
    if (bikeFleet.length === 0) {
        container.innerHTML = '<p class="muted">No vehicles in fleet yet.</p>';
        return;
    }
    
    container.innerHTML = bikeFleet.map(bike => `
        <div class="data-row">
            <strong>${bike.brand}</strong> (${bike.type}) | ID: ${bike.id}<br>
            <span class="muted">📍 ${bike.location} | ₹${bike.rate}/day | Status: ${bike.status}</span>
        </div>
    `).join('');
}

function loadBikeRentals() {
    const bookings = JSON.parse(localStorage.getItem('skytrails_bookings') || '[]');
    const bikeBookings = bookings.filter(b => b.type === 'bike' || b.type === 'scooty');
    
    const container = document.getElementById('bike-rentals');
    if (bikeBookings.length === 0) {
        container.innerHTML = '<p class="muted">No active rentals yet.</p>';
        return;
    }
    
    container.innerHTML = bikeBookings.slice().reverse().map(booking => `
        <div class="data-row">
            <strong>${booking.name}</strong> | 📞 ${booking.phone}<br>
            <span class="muted">🚴 ${bookingTypes[booking.type]} | 📍 ${booking.start} | 📅 ${new Date(booking.date).toLocaleDateString()}</span>
        </div>
    `).join('');
}

// Hotel Management
document.getElementById('hotel-registration-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const hotel = {
        id: Date.now(),
        name: document.getElementById('hotel-name-admin').value,
        city: document.getElementById('hotel-city-admin').value,
        address: document.getElementById('hotel-address').value,
        phone: document.getElementById('hotel-phone').value,
        price_per_night: parseInt(document.getElementById('hotel-price-admin').value),
        rating: parseInt(document.getElementById('hotel-rating-admin').value),
        amenities: document.getElementById('hotel-amenities').value.split(',').map(a => a.trim()),
        bookings: []
    };
    
    partnerHotels.push(hotel);
    localStorage.setItem('skytrails_partner_hotels', JSON.stringify(partnerHotels));
    
    // Also add to main hotels array for suggestions
    hotels.push({
        name: hotel.name,
        city: hotel.city,
        price_per_night: hotel.price_per_night,
        rating: hotel.rating,
        popularity: 0
    });
    
    showResult('hotel-result', `Hotel registered successfully! ID: ${hotel.id}`, 'success');
    this.reset();
    loadHotelProperties();
    loadAdminDashboard();
});

function loadHotelProperties() {
    const container = document.getElementById('hotel-properties');
    if (partnerHotels.length === 0) {
        container.innerHTML = '<p class="muted">No hotel properties registered yet.</p>';
        return;
    }
    
    container.innerHTML = partnerHotels.map(hotel => `
        <div class="data-row">
            <strong>${hotel.name}</strong> | ID: ${hotel.id}<br>
            <span class="muted">📍 ${hotel.city} | ⭐ ${hotel.rating}/5 | ₹${hotel.price_per_night}/night</span><br>
            <span class="muted">📞 ${hotel.phone} | 🏨 ${hotel.amenities.join(', ')}</span>
        </div>
    `).join('');
}

function loadHotelBookings() {
    // Show bookings that match partner hotels
    const bookings = JSON.parse(localStorage.getItem('skytrails_bookings') || '[]');
    const itineraries = JSON.parse(localStorage.getItem('skytrails_itinerary') || 'null');
    
    const container = document.getElementById('hotel-bookings');
    if (!itineraries || !itineraries.hotel) {
        container.innerHTML = '<p class="muted">No hotel bookings yet.</p>';
        return;
    }
    
    const hotelName = itineraries.hotel.name;
    const matchingHotel = partnerHotels.find(h => h.name === hotelName);
    
    if (matchingHotel) {
        container.innerHTML = `
            <div class="data-row">
                <strong>${hotelName}</strong><br>
                <span class="muted">Booking from itinerary | ${itineraries.days} nights | ₹${itineraries.budget.hotel} total</span>
            </div>
        `;
    } else {
        container.innerHTML = '<p class="muted">No bookings for your properties yet.</p>';
    }
}

// Initialize admin forms on load
document.addEventListener('DOMContentLoaded', () => {
    // Already set up in main init, but ensure forms are ready
    if (document.getElementById('admin-page')) {
        loadAdminDashboard();
    }
});

