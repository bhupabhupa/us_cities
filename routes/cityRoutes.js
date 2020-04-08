const Common = require('../utils/common');

module.exports = (app) => {
    app.get('/api/cities', (req, res) => {
        res.send(myCities);
    });

    app.get('/api/city/:city_id', (req, res) => {
        let { city_id } = req.params;
        let myData = Common.getObjectFromArray(city_id, 'abbreviation', myCities);
        res.send(myData);
    });
}



const myCities = [
    {
        "name": "Alabama",
        "abbreviation": "AL",
        "imageURL": "https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c094bf23ae9451c4cda2427_best%20places%20to%20visit%20in%20Mumbai%20in%20one%20day.jpg",
        "details" : "Alabama is a southeastern U.S. state that’s home to significant landmarks from the American Civil Rights Movement. The city of Birmingham's 16th Street Baptist Church, now a museum, was a protest headquarters in the 1960s. Martin Luther King, Jr.'s church and the Rosa Parks Museum, dedicated to the activist, can be found in the capital of Montgomery."
    },
    {
        "name": "Alaska",
        "abbreviation": "AK",
        "imageURL": "https://www.fodors.com/wp-content/uploads/2019/02/HERO_Ultimate_Alaska_dreamstime_l_50550160.jpg",
        "details" : "Alaska is a state located in the northwest extremity of the United States West Coast, just across the Bering Strait from Asia."
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS",
        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pola_Islands_Tutuila_NPS.jpg/1200px-Pola_Islands_Tutuila_NPS.jpg",
        "details" : "American Samoa is a U.S. territory covering 7 South Pacific islands and atolls. Tutuila, the largest island, is home to the capital Pago Pago, whose natural harbor is framed by volcanic peaks including 1,716-ft.-high Rainmaker Mountain. Divided between the islands Tutuila, Ofu and Ta‘ū, the National Park of American Samoa highlights the territory's tropical scenery with rainforests, beaches and reefs."
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ",
        "imageURL": "https://www.usnews.com/dims4/USNEWS/4d1b648/2147483647/thumbnail/1000x468/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F6d%2Ff7%2F217f001f40069b5b73512047526a%2F170207-editorial.jpg",
        "details" : "Arizona, a southwestern U.S. state, is best known for the Grand Canyon, the mile-deep chasm carved by the Colorado River. Flagstaff, a ponderosa pine–covered mountain town, is a major gateway to the Grand Canyon. Other natural sites include Saguaro National Park, protecting cactus-filled Sonoran Desert landscape. Tucson is University of Arizona territory and home to the Arizona-Sonora Desert Museum."
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR",
        "imageURL": "https://www.tripsavvy.com/thmb/mZ5DTHA9EesV7njbC38Atfh4hrE=/1500x1000/filters:fill(auto,1)/arkansas-camping-597904aed088c0001061ac58.jpg",
        "details" : "Arkansas is a southern U.S. state bordering the Mississippi River. It's known for its abundant park and wilderness areas, with terrain encompassing mountains, caves, rivers and hot springs. The rugged Ozarks region in its northwest has hiking trails and limestone caves such as Blanchard Springs Caverns. Its capital, Little Rock, hosts the Clinton Presidential Center, housing Bill Clinton’s presidential archives."
    },
    {
        "name": "California",
        "abbreviation": "CA",
        "imageURL": "https://www.thoughtco.com/thmb/jvcmdLxfvuS7faMEAmX27E4oG5Y=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-869041446-5c8b237746e0fb000146acda.jpg",
        "details" : "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars."
    },
    {
        "name": "Colorado",
        "abbreviation": "CO",
        "imageURL": "https://classifieds.usatoday.com/wp-content/uploads/2018/09/moving-to-colorado-768x512.jpeg",
        "details" : "Colorado, a western U.S. state, has a diverse landscape of arid desert, river canyons and snow-covered Rocky Mountains, which are partly protected by Rocky Mountain National Park. Elsewhere, Mesa Verde National Park features Ancestral Puebloan cliff dwellings. Perched a mile above sea level, Denver, Colorado’s capital and largest city, features a vibrant downtown area."
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT",
        "imageURL": "https://media2.govtech.com/images/940*528/shutterstock_1240369576.jpg",
        "details" : "Connecticut is a U.S. state in southern New England that has a mix of coastal cities and rural areas dotted with small towns. Mystic is famed for its Seaport museum filled with centuries-old ships, and the beluga whale exhibits at Mystic Aquarium. On Long Island Sound, the city of New Haven is known as the home of Yale University and its acclaimed Peabody Museum of Natural History."
    },
    {
        "name": "Delaware",
        "abbreviation": "DE",
        "imageURL": "https://whyy.org/wp-content/uploads/2020/03/1280px-Wilmington_Delaware_skyline.jpg",
        "details" : "Delaware, a small Mid-Atlantic U.S. state, sits on a peninsula marked by dune-backed beaches bordering the Atlantic Ocean, Delaware River and Delaware Bay. In Dover, the capital, First State Heritage Park encompasses 18th-century Colonial landmarks like the Georgian-style Old State House. The city of Wilmington is known for the Riverfront, a waterside district of parks, boutiques and restaurants."
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC",
        "imageURL": "https://www.cappex.com/themes/custom/fingerprint/images/colleges-by-state/districtofcolumbia_statecolleges.jpg",
        "details" : "Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia. It’s defined by imposing neoclassical monuments and buildings – including the iconic ones that house the federal government’s 3 branches: the Capitol, White House and Supreme Court. It's also home to iconic museums and performing-arts venues such as the Kennedy Center."
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM",
        "imageURL": "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/6a/ea/fe/shutterstock-1200694918.jpg",
        "details" : "The Federated States of Micronesia is a country spread across the western Pacific Ocean comprising more than 600 islands. Micronesia is made up of 4 island states: Pohnpei, Kosrae, Chuuk and Yap. The country is known for palm-shaded beaches, wreck-filled dives and ancient ruins, including Nan Madol, sunken basalt temples and burial vaults that extend out of a lagoon on Pohnpei."
    },
    {
        "name": "Florida",
        "abbreviation": "FL",
        "imageURL": "https://businessfacilities.com/wp-content/uploads/2018/08/BFJulyAug18-FloridaFocus-Feature.jpg",
        "details" : "Florida is the southeasternmost U.S. state, with the Atlantic on one side and the Gulf of Mexico on the other. It has hundreds of miles of beaches. The city of Miami is known for its Latin-American cultural influences and notable arts scene, as well as its nightlife, especially in upscale South Beach. Orlando is famed for theme parks, including Walt Disney World."
    },
    {
        "name": "Georgia",
        "abbreviation": "GA",
        "imageURL": "https://media.holidayme.com/wp-content/uploads/2018/03/13105254/Tbilisi-Georgia-in-May-640x480.jpg",
        "details" : "Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that’s home to Caucasus Mountain villages and Black Sea beaches. It’s famous for Vardzia, a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti. The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town."
    },
    {
        "name": "Guam",
        "abbreviation": "GU",
        "imageURL": "https://www.arcgis.com/sharing/rest/content/items/e4d003d4b496423da97068e9c5d49663/resources/1573238895643.jpeg?w=3117",
        "details" : "Guam is a U.S. island territory in Micronesia, in the Western Pacific. It's distinguished by tropical beaches, Chamorro villages and ancient latte-stone pillars. Guam’s WWII significance is on view at the War in the Pacific National Historical Park, whose sites include Asan Beach, a former battlefield. The island’s Spanish colonial heritage is evident in Fort Nuestra Señora de la Soledad, atop a bluff in Umatac."
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI",
        "imageURL": "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Homepage_Hero_042019v1.jpg?itok=JquDLD-V",
        "details" : "Hawaii is a state of the United States of America located in the Pacific Ocean. It is the only U.S. state located outside North America and the only island state. The state encompasses nearly the entire Hawaiian archipelago, 137 islands spread over 1,500 miles."
    },
    {
        "name": "Idaho",
        "abbreviation": "ID",
        "imageURL": "https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2019/03/ID-GettyImages-955157624-o.jpg",
        "details" : "Idaho is a northwestern U.S. state known for mountainous landscapes, and vast swaths of protected wilderness and outdoor recreation areas. The capital, Boise, is set in the Rocky Mountain foothills and is bisected by the Boise River, which is popular for rafting and fishing. The city’s riverfront Julia Davis Park is a downtown green space containing a rose garden, museums and a zoo."
    },
    {
        "name": "Illinois",
        "abbreviation": "IL",
        "imageURL": "https://cdn.britannica.com/s:800x450,c:crop/11/197811-138-513528A0/Illinois-geography-people-history-economy.jpg",
        "details" : "Illinois is a midwestern state bordering Indiana in the east and the Mississippi River in the west. Nicknamed 'the Prairie State,' it's marked by farmland, forests, rolling hills and wetlands. Chicago, one of the largest cities in the U.S, is in the northeast on the shores of Lake Michigan. It’s famous for its skyscrapers, such as sleek, 1,451-ft. Willis Tower and the neo-Gothic Tribune Tower."
    },
    {
        "name": "Indiana",
        "abbreviation": "IN",
        "imageURL": "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555921779/shape/mentalfloss/istock_000017395107_small.jpg",
        "details" : "Indiana is a U.S. state in the Midwestern and Great Lakes regions of North America. Indiana is the 38th-largest by area and the 17th-most populous of the 50 United States. Its capital and largest city is Indianapolis. Indiana was admitted to the United States as the 19th U.S. state on December 11, 1816."
    },
    {
        "name": "Iowa",
        "abbreviation": "IA",
        "imageURL": "https://www.iowapublicradio.org/sites/ipr/files/styles/x_large/public/201904/04192019_IowaCapitol_011_3x2_1080.jpg",
        "details" : "Iowa, a Midwestern U.S. state, sits between the Missouri and Mississippi rivers. It’s known for its landscape of rolling plains and cornfields. Landmarks in the capital, Des Moines, include the gold-domed, 19th-century State Capitol Building, Pappajohn Sculpture Park and the Des Moines Art Center, noted for its contemporary collections. The city of Cedar Rapids' Museum of Art has paintings by native Iowan Grant Wood."
    },
    {
        "name": "Kansas",
        "abbreviation": "KS",
        "imageURL": "https://businessfacilities.com/wp-content/uploads/2019/12/KansasCity.MO_.jpg",
        "details" : "Kansas is a U.S. state in the Midwestern United States. Its capital is Topeka and its largest city is Wichita, with its most populated county and largest employment center being Johnson County. Kansas is bordered by Nebraska on the north; Missouri on the east; Oklahoma on the south; and Colorado on the west."
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY",
        "imageURL": "https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2019/10/02110437/LexSkyNight3854V2.jpg",
        "details" : "Kentucky is a southeastern state bounded by the Ohio River in the north and the Appalachian Mountains in the east, with Frankfort the state capital. The state's largest city, Louisville, is home to the Kentucky Derby, the renowned horse race held at Churchill Downs on the first Saturday in May. The race is preceded by a 2-week festival and celebrated in the Kentucky Derby Museum year-round."
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA",
        "imageURL": "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2019/09/225_FeatureImageTemplate-21.jpg?q=70&crop=faces&fit=crop&w=1300&h=600",
        "details" : "Louisiana is a southeastern U.S. state on the Gulf of Mexico. Its history as a melting pot of French, African, American and French-Canadian cultures is reflected in its Creole and Cajun cultures. The largest city, New Orleans, is known for its colonial-era French Quarter, raucous Mardi Gras festival, jazz music, Renaissance-style St. Louis Cathedral and wartime exhibits at the huge National WWII Museum."
    },
    {
        "name": "Maine",
        "abbreviation": "ME",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2016-09/HERO_stock-photo-portland-head-lighthouse-57279684_72DPI.jpg?itok=UG1aILSO",
        "details" : "Maine, the northeasternmost U.S. state, is known for its rocky coastline, maritime history and nature areas like the granite and spruce islands of Acadia National Park. Moose are plentiful in Baxter State Park, home to Mt. Katahdin, endpoint of the Appalachian Trail. Lighthouses such as the candy-striped beacon at West Quoddy Head, dot the coast, as do lobster shacks and sandy beaches like Ogunquit and Old Orchard."
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH",
        "imageURL": "https://www.internationalinvestment.net/api/v1/wps/97b4cb4/1079b87a-fda7-42e7-b5e7-16aafa036cc7/7/marshallislands-350x250-580x358.jpg",
        "details" : "The Marshall Islands are a sprawling chain of volcanic islands and coral atolls in the central Pacific Ocean, between Hawaii and the Philippines. In the northwest, Bikini Atoll’s largely undisturbed waters, used as a ship graveyard after World War II, are now a popular wreck dive site. Near Majuro Atoll, which holds the islands' capital and largest settlement, the coral reef at Kalalin Pass teems with marine life."
    },
    {
        "name": "Maryland",
        "abbreviation": "MD",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2018-12/94666d240389c46df88438e05cec5216.jpeg?itok=k_x8cDOB",
        "details" : "Maryland is a Mid-Atlantic state that's defined by its abundant waterways and coastlines on the Chesapeake Bay and Atlantic Ocean. Its largest city, Baltimore, has a long history as a major seaport. Fort McHenry, birthplace of the U.S. national anthem, sits at the mouth of Baltimore’s Inner Harbor, home to the National Aquarium and Maryland Science Center."
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA",
        "imageURL": "https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/04/massachusetts.jpg?fit=1024%2C684&ssl=1",
        "details" : "Massachusetts, officially known as the Commonwealth of Massachusetts, is the most populous state in the New England region of the northeastern United States."
    },
    {
        "name": "Michigan",
        "abbreviation": "MI",
        "imageURL": "https://www.history.com/.image/t_share/MTU3ODc5MDg1MDkxMDA2MTc1/usa-michigan-detroit-renaissance-center-general-motors-hq.jpg",
        "details" : "Michigan is a state in the Great Lakes and Midwestern regions of the United States. Its name originates from the Ojibwe word mishigami, meaning 'large water' or 'large lake'."
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
        "imageURL": "https://cache.marriott.com/marriottassets/destinations/hero/minnesota-destination.jpg?interpolation=progressive-bilinear",
        "details" : "Minnesota is a midwestern U.S. state bordering Canada and Lake Superior, the largest of the Great Lakes. The state contains more than 10,000 other lakes, including Lake Itasca, the Mississippi River’s primary source. The “Twin Cities” of Minneapolis and state capital Saint Paul are dense with cultural landmarks like the Science Museum of Minnesota and the Walker Art Center, a modern art museum."
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2019-08/a3318bfd4a73c1047c8212de8674ba6a.jpeg?itok=B_VSzOfM",
        "details" : "Mississippi is a southern U.S. state with the Mississippi River to its west, the state of Alabama to its east, and the Gulf of Mexico to the south. Its Mississippi Delta region is considered the birthplace of blues music, honored at the Delta Blues Museum in Clarksdale. Also in the region is the Vicksburg National Military Park, preserving the site of a critical Civil War battle."
    },
    {
        "name": "Missouri",
        "abbreviation": "MO",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2018-12/a78647473acaf358f4c69a60067b6f34.jpeg?itok=TOqzjvXM",
        "details" : "Missouri is a state in the Midwestern United States. With more than six million residents, it is the 18th-most populous state of the country. The largest urban areas are St. Louis, Kansas City, Springfield and Columbia; the capital is Jefferson City. The state is the 21st-most extensive in area."
    },
    {
        "name": "Montana",
        "abbreviation": "MT",
        "imageURL": "https://cdn.mos.cms.futurecdn.net/bFzYXyi3rYPHThBgoYFxbK.jpg",
        "details" : "Montana is a western state defined by its diverse terrain ranging from the Rocky Mountains to the Great Plains. Its wide-open spaces include Glacier National Park, a vast wilderness preserve that passes into Canada. The park’s many snow-capped peaks, lakes and alpine hiking trails are showcased along its famed Going-to-the-Sun Road, stretching 50 miles."
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE",
        "imageURL": "https://www.usnews.com/dims4/USNEWS/16b2eb9/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Ff3%2Fbd%2F504fd78a44a397be7cdddc2a0fc3%2F190301-bs10thingsne-stock.jpg",
        "details" : "Nebraska is a midwestern U.S. state encompassing the prairies of the Great Plains, the towering dunes of the Sandhills and the panhandle’s dramatic rock formations. Lincoln, the capital and a vibrant university town, is distinguished by its soaring state capitol. The city of Omaha is home to the Durham Museum, which honors the state’s pioneering past in a converted railroad depot."
    },
    {
        "name": "Nevada",
        "abbreviation": "NV",
        "imageURL": "https://static.officeholidays.com/images/935x475c/us-nevada-01.jpg",
        "details" : "Nevada is a state in the Western United States. It is bordered by Oregon to the northwest. Idaho to the northeast. California to the west. Arizona to the southeast, and Utah to the east. Nevada is the 7th most extensive. the 32nd most populous, but the 9th least densely populated of the U.S. states."
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-01/Getty_104106362_Brand_State_NewHampshire_Web72DPI.jpg?itok=-D2AFnPq",
        "details" : "New Hampshire, a U.S. state in New England, is defined by its quaint towns and large expanses of wilderness. In the north, White Mountain National Forest is known for winter sports areas and Mt. Washington, the region’s highest peak, with a cog railway to its summit. Also in the White Mountains are moose, black bears and part of the Appalachian Trail."
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ",
        "imageURL": "https://cdn.britannica.com/40/124040-050-1C958F63/Jersey-City-NJ.jpg",
        "details" : "New Jersey is a northeastern U.S. state with some 130 miles of Atlantic coast. Jersey City, across the Hudson River from Lower Manhattan, is the site of Liberty State Park, where ferries embark for nearby Ellis Island, with its historic Immigration Museum, and the iconic Statue of Liberty. The Jersey Shore includes notable resort towns like historic Asbury Park and Cape May, with its preserved Victorian buildings."
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM",
        "imageURL": "https://cdn.britannica.com/06/117906-004-918F6802/Sandia-Mountains-New-Mexico.jpg",
        "details" : "New Mexico is a southwestern U.S. state whose diverse terrain encompasses the Chihuahuan Desert and the Sangre de Cristo Mountains. Its capital, Santa Fe, founded in 1610, is known for upscale spas and Spanish colonial architecture. It's also home to a vibrant arts scene, as well as the Georgia O’Keeffe Museum, featuring the artist's iconic New Mexican landscape paintings, and the open-air Santa Fe Opera."
    },
    {
        "name": "New York",
        "abbreviation": "NY",
        "imageURL": "https://www.gannett-cdn.com/media/2018/12/15/USATODAY/usatsports/MotleyFool-TMOT-657f0436-21e9af86.jpg",
        "details" : "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square."
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
        "imageURL": "https://www.incimages.com/uploaded_files/image/970x450/getty_928995508_2000133420009280267_381564.jpg",
        "details" : "North Carolina is a U.S. state located in the southeastern region of the United States. North Carolina is the 28th largest and 9th-most populous of the 50 United States. It is bordered by Virginia to the north, the Atlantic Ocean to the east, Georgia and South Carolina to the south, and Tennessee to the west."
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND",
        "imageURL": "https://www.usnews.com/dims4/USNEWS/053aacf/2147483647/crop/2135x999%2B424%2B0/resize/1000x468/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F5e%2Fbe%2F6f9f6a7844f09acd3bb129dc512c%2Fbs18-north-dakota-crop-editorial.jpg",
        "details" : "North Dakota is a midwestern U.S. state dominated by the Great Plains. Its eastern city of Fargo showcases Native American and modern art at the Plains Art Museum. The area's immigrant history is honored at the Scandinavian Heritage Association in the city of Minot. The Great Plains give way to the rugged Badlands near the border with Montana, where Theodore Roosevelt National Park spans the Little Missouri River."
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP",
        "imageURL": "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-PIoM-NorthernMarianaIslands-ManagahaBeach-481701863-CampPhoto-copy.jpg",
        "details" : "The Northern Mariana Islands are a U.S. commonwealth in the Pacific Ocean. Saipan, the largest island, is known for its sandy shores and mountainous landscapes. In clear waters off its west coast is the tiny, coral-fringed Mañagaha islet. On Saipan's northeast coast, turtles inhabit the Grotto, a cavern dive site. Nearby, memorials mark Banzai Cliff and Suicide Cliff, sites from WWII's Battle of Saipan."
    },
    {
        "name": "Ohio",
        "abbreviation": "OH",
        "imageURL": "https://cdn.britannica.com/07/84507-050-35C6F597/Columbus-Ohio.jpg",
        "details" : "Ohio is a midwestern U.S. state stretching from the Ohio River and Appalachian Mountains in the south to Lake Erie in the north. On the shores of the lake is the city of Cleveland, site of the Cleveland Museum of Art and its renowned collection of European paintings and especially Asian art. Cleveland is also home to the Rock and Roll Hall of Fame and Museum, and close to expansive Cuyahoga Valley National Park."
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK",
        "imageURL": "https://www.cbre.us/-/media/cbre/countryunitedstates/corporate-offices/texas-oklahoma/oklahoma-city/2017/oklahoma-city-skyline_768x582.jpg?mh=0&w=768&mw=0&h=582&la=en&hash=3388FB1594126EC6D998B126B3C9D27532D3747C",
        "details" : "Oklahoma is a state in the South Central region of the United States, bordered by the state of Texas on the south and west, Kansas on the north, Missouri on the northeast, Arkansas on the east, New Mexico on the west, and Colorado on the northwest."
    },
    {
        "name": "Oregon",
        "abbreviation": "OR",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2016-12/HERO_Oregon_Crater%20Lake_Reflection_Kyle%20Ellison_Web72DPI.jpg?itok=HtGBEvRF",
        "details" : "Oregon is a coastal U.S. state in the Pacific Northwest known for its diverse landscape of forests, mountains, farms and beaches. The city of Portland is famed for its quirky, avant-garde culture and is home to iconic coffee shops, boutiques, farm-to-table restaurants and microbreweries. Highlights include the Native American art in the Portland Art Museum, the Japanese Garden and the Lan Su Chinese Garden."
    },
    {
        "name": "Palau",
        "abbreviation": "PW",
        "imageURL": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/26/11/Palau.jpg?w968h681",
        "details" : "Palau is an archipelago of over 500 islands, part of the Micronesia region in the western Pacific Ocean. Koror Island is home to the former capital, also named Koror, and is the islands’ commercial center. The larger Babeldaob has the present capital, Ngerulmud, plus mountains and sandy beaches on its east coast. In its north, ancient basalt monoliths known as Badrulchau lie in grassy fields surrounded by palm trees."
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA",
        "imageURL": "https://www.history.com/.image/t_share/MTU3ODc5MDg1ODk2ODM2ODMx/independence-hall.jpg",
        "details" : "Pennsylvania, officially the Commonwealth of Pennsylvania, is a state located in the Northeastern, Great Lakes, Appalachian, and Mid-Atlantic regions of the United States. The Appalachian Mountains run through its middle."
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR",
        "imageURL": "https://qtxasset.com/luxurytraveladvisor/1584385913/shutterstock_1067855027.jpg/shutterstock_1067855027.jpg?k54ykstT9b1_51q2Ny0KZBUat7bLETwt",
        "details" : "Puerto Rico is a Caribbean island and unincorporated U.S. territory with a landscape of mountains, waterfalls and the El Yunque tropical rainforest. In San Juan, the capital and largest city, the Isla Verde area is known for its hotel strip, beach bars and casinos. Its Old San Juan neighborhood features colorful Spanish colonial buildings and El Morro and La Fortaleza, massive, centuries-old fortresses."
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI",
        "imageURL": "https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/3d24c36d-ffad-bba1-5d60-7b7362eab06a/630x355.jpg",
        "details" : "Rhode Island, a U.S. state in New England, is known for sandy shores and seaside Colonial towns. It's home to several large cities, including Newport, which is famed for sailing and Gilded Age mansions, such as The Breakers. Providence, its capital, is home to Brown University, green Roger Williams Park, landscaped Waterplace Park and Riverwalk, with the famed WaterFire art installation."
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC",
        "imageURL": "https://specials-images.forbesimg.com/imageserve/805157896/960x0.jpg?fit=scale",
        "details" : "South Carolina is a southeastern U.S. state known for its shoreline of subtropical beaches and marshlike sea islands. Coastal Charleston is a historic city, defined by pastel-colored houses, Old South plantations and Fort Sumter, where the Civil War’s opening shots were fired. To the north is the Grand Strand, a roughly 60-mile stretch of beachfront known for golf courses and the vacation town Myrtle Beach."
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD",
        "imageURL": "https://cdn.britannica.com/02/75502-050-EF1DDE67/Mount-Rushmore-National-Memorial-South-Dakota.jpg",
        "details" : "South Dakota is an expansive, sparsely populated midwestern U.S. state where rolling prairies give way to the dramatic Black Hills National Forest. Black Hills is home to 2 historical monuments carved right into towering granite peaks: Mt. Rushmore, the iconic depiction of 4 revered U.S. presidents, and Crazy Horse Memorial, a tribute to the storied Native American tribal leader."
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN",
        "imageURL": "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/cb/fc/ac/shutterstock-1078695767.jpg",
        "details" : "Tennessee is a landlocked state in the U.S. South. Its capital, centrally located Nashville, is the heart of the country-music scene, with the long-running Grand Ole Opry, the Country Music Hall of Fame and Museum and a legendary stretch of honky-tonks and dance halls. Memphis, in the far southwest, is the home of Elvis Presley’s Graceland, rock-and-roll pioneering Sun Studio and the blues clubs of Beale Street."
    },
    {
        "name": "Texas",
        "abbreviation": "TX",
        "imageURL": "https://visitdallas.imgix.net/Hubs/State_Fair_of_Texas/State_Fair_of_Texas_h_rgb_72.jpg",
        "details" : "Texas is a state in the South Central Region of the United States. It is the second largest U.S. state by area and population."
    },
    {
        "name": "Utah",
        "abbreviation": "UT",
        "imageURL": "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2016-09/HERO_stock-photo-balanced-rock-74642601_72DPI_0.jpg?itok=9B7bIacS",
        "details" : "Utah is a state in the western United States. It is bordered by Colorado to the east, Wyoming to the northeast, Idaho to the north, Arizona to the south, and Nevada to the west. It also touches a corner of New Mexico in the southeast."
    },
    {
        "name": "Vermont",
        "abbreviation": "VT",
        "imageURL": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/08/15/vermont.jpg?w968h681",
        "details" : "Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes."
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI",
        "imageURL": "https://assets3.thrillist.com/v1/image/2803715/size/tl-full_width_tall_mobile.jpg",
        "details" : "The U.S. Virgin Islands are a group of Caribbean islands and islets. A U.S. territory, it's known for white-sand beaches, reefs and verdant hills. St. Thomas island is home to the capital, Charlotte Amalie. To the east is the island of St. John, most of which comprises Virgin Islands National Park. St. Croix island and its historic towns, Christiansted and Frederiksted, are to the south."
    },
    {
        "name": "Virginia",
        "abbreviation": "VA",
        "imageURL": "https://www.usnews.com/dims4/USNEWS/932f151/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fbd%2F19%2Fb4537491490e9c87a37928f1acdd%2F190620-bs10thingswv-stock.jpg",
        "details" : "Virginia, a southeastern U.S. state, stretches from the Chesapeake Bay to the Appalachian Mountains, with a long Atlantic coastline. It's one of the 13 original colonies, with historic landmarks including Monticello, founding father Thomas Jefferson’s iconic Charlottesville plantation. The Jamestown Settlement and Colonial Williamsburg are living-history museums reenacting Colonial and Revolutionary-era life."
    },
    {
        "name": "Washington",
        "abbreviation": "WA",
        "imageURL": "https://specials-images.forbesimg.com/imageserve/1174222210/960x0.jpg?fit=scale",
        "details" : "Washington, officially the State of Washington, is a state in the Pacific Northwest region of the United States."
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV",
        "imageURL": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB11bZPp.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
        "details" : "West Virginia is an eastern U.S. state in the tree-covered Appalachian Mountains. The town of Harpers Ferry, where the Shenandoah River meets the Potomac River, is the site of a famous Civil War–era raid. Surrounded by a national historical park, the town looks as it did in the 19th century, with many of the buildings open to the public as living-history museums."
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI",
        "imageURL": "https://www.incimages.com/uploaded_files/image/970x450/getty_483517958_368760.jpg",
        "details" : "Wisconsin is a midwestern U.S. state with coastlines on 2 Great Lakes (Michigan and Superior) and an interior of forests and farms. Milwaukee, the largest city, is known for the Milwaukee Public Museum, with its numerous re-created international villages, and the Harley-Davidson Museum, displaying classic motorcycles. Several beer companies are based in Milwaukee, and many offer brewery tours."
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY",
        "imageURL": "https://odis.homeaway.com/odis/destination/645c0cb2-4e66-4ca2-80da-17d06dea3033.dc-t-dest-970x325.jpg",
        "details" : "Wyoming is a state in the mountain region of the Western United States. The state is the 10th largest by area, the least populous, and the second most sparsely populated state in the country."
    }
]