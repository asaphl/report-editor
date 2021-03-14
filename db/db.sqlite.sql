BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Country Images" (
	"CountryId"	TEXT NOT NULL,
	"ImageId"	INTEGER NOT NULL,
	FOREIGN KEY("ImageId") REFERENCES "Images"("Id"),
	FOREIGN KEY("CountryId") REFERENCES "Countries"("Id")
);
CREATE TABLE IF NOT EXISTS "Texts" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"Title"	TEXT,
	"Body"	TEXT,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Country Texts" (
	"CountryId"	TEXT NOT NULL,
	"TextId"	INTEGER NOT NULL,
	FOREIGN KEY("TextId") REFERENCES "Texts"("Id"),
	FOREIGN KEY("CountryId") REFERENCES "Countries"("Id")
);
CREATE TABLE IF NOT EXISTS "Datasets" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"Title"	TEXT,
	"Data"	TEXT,
	PRIMARY KEY("Id")
);
CREATE TABLE IF NOT EXISTS "Country Datasets" (
	"CountryId"	TEXT NOT NULL,
	"DatasetId"	INTEGER NOT NULL,
	FOREIGN KEY("CountryId") REFERENCES "Countries"("Id"),
	FOREIGN KEY("DatasetId") REFERENCES "Datasets"("Id")
);
CREATE TABLE IF NOT EXISTS "Images" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"Title"	TEXT,
	"Path"	TEXT NOT NULL,
	"Caption"	TEXT,
	"Credit"	TEXT,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Reports" (
	"Id"	INTEGER NOT NULL UNIQUE,
	"Name"	TEXT,
	"Data"	TEXT,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Countries" (
	"Id"	TEXT NOT NULL UNIQUE,
	"Name"	INTEGER NOT NULL UNIQUE,
	PRIMARY KEY("Id")
);
INSERT INTO "Country Images" VALUES ('ESP',1);
INSERT INTO "Country Images" VALUES ('ESP',2);
INSERT INTO "Country Images" VALUES ('ESP',3);
INSERT INTO "Country Images" VALUES ('DEU',4);
INSERT INTO "Country Images" VALUES ('DEU',5);
INSERT INTO "Country Images" VALUES ('DEU',6);
INSERT INTO "Country Images" VALUES ('FRA',7);
INSERT INTO "Country Images" VALUES ('FRA',8);
INSERT INTO "Country Images" VALUES ('FRA',9);
INSERT INTO "Texts" VALUES (1,'History','Ancient humans were present in Germany at least 600,000 years ago.[13] The first non-modern human fossil (the Neanderthal) was discovered in the Neander Valley.[14] Similarly dated evidence of modern humans has been found in the Swabian Jura, including 42,000-year-old flutes which are the oldest musical instruments ever found,[15] the 40,000-year-old Lion Man,[16] and the 35,000-year-old Venus of Hohle Fels.[17] The Nebra sky disk, created during the European Bronze Age, is attributed to a German site.[18]');
INSERT INTO "Texts" VALUES (2,'Geography','Germany is in Western and Central Europe, bordering Denmark to the north, Poland and the Czech Republic to the east, Austria to the southeast, and Switzerland to the south-southwest. France, Luxembourg and Belgium are situated to the west, with the Netherlands to the northwest. Germany is also bordered by the North Sea and, at the north-northeast, by the Baltic Sea. German territory covers 357,022 km2 (137,847 sq mi), consisting of 348,672 km2 (134,623 sq mi) of land and 8,350 km2 (3,224 sq mi) of water. It is the seventh largest country by area in Europe and the 62nd largest in the world.[4]');
INSERT INTO "Texts" VALUES (3,'Economy','Germany has a social market economy with a highly skilled labour force, a low level of corruption, and a high level of innovation.[4][164][165] It is the world''s third largest exporter of goods,[4] and has the largest national economy in Europe which is also the world''s fourth largest by nominal GDP[166] and the fifth by PPP.[167] Its GDP per capita measured in purchasing power standards amounts to 121% of the EU27 average (100%).[168] The service sector contributes approximately 69% of the total GDP, industry 31%, and agriculture 1% as of 2017.[4] The unemployment rate published by Eurostat amounts to 3.2% as of January 2020, which is the fourth-lowest in the EU.[169]');
INSERT INTO "Texts" VALUES (4,'Demographics','With a population of 80.2 million according to the 2011 census,[208] rising to 83.1 million as of 2019,[6] Germany is the most populous country in the European Union, the second-most populous country in Europe after Russia, and the ninteenth-most populous country in the world. Its population density stands at 227 inhabitants per square kilometre (588 per square mile). The overall life expectancy in Germany at birth is 80.19 years (77.93 years for males and 82.58 years for females).[4] The fertility rate of 1.41 children born per woman (2011 estimates) is below the replacement rate of 2.1 and is one of the lowest fertility rates in the world.[4] Since the 1970s, Germany''s death rate has exceeded its birth rate. However, Germany is witnessing increased birth rates and migration rates since the beginning of the 2010s, particularly a rise in the number of well-educated migrants. Germany has the third oldest population in the world, with the average age of 47.4 years.[4]');
INSERT INTO "Texts" VALUES (5,'History','Iberia enters written records as a land populated largely by the Iberians, Basques and Celts. Early on its coastal areas were settled by Phoenicians who founded Western Europe''s most ancient cities Cádiz and Málaga. Phoenician influence expanded as much of the Peninsula was eventually incorporated into the Carthaginian Empire, becoming a major theatre of the Punic Wars against the expanding Roman Empire. After an arduous conquest, the peninsula came fully under Roman rule. During the early Middle Ages it came under Visigothic rule, and then much of it was conquered by Muslim invaders from North Africa. In a process that took centuries, the small Christian kingdoms in the north gradually regained control of the peninsula. The last Muslim state fell in 1492, the same year Columbus reached the Americas. A global empire began which saw Spain become the strongest kingdom in Europe, the leading world power for one and a half centuries, and the largest overseas empire for three centuries.');
INSERT INTO "Texts" VALUES (6,'Geography','At 505,992 km2 (195,365 sq mi), Spain is the world''s fifty-second largest country and Europe fourth largest country. It is some 47,000 km2 (18,000 sq mi) smaller than France and 81,000 km2 (31,000 sq mi) larger than the US state of California. Mount Teide (Tenerife) is the highest mountain peak in Spain and is the third largest volcano in the world from its base. Spain is a transcontinental country, having territory in both Europe and Africa.');
INSERT INTO "Texts" VALUES (7,'Economy','Dummy text here...');
INSERT INTO "Texts" VALUES (8,'Demographics','In 2019, the population of Spain officially reached 47 million people, as recorded by the Padrón municipal (Spain''s Municipal Register).[197] Spain''s population density, at 91/km2 (235/sq mi), is lower than that of most Western European countries and its distribution across the country is very unequal. With the exception of the region surrounding the capital, Madrid, the most populated areas lie around the coast. The population of Spain has risen 2 1/2 times since 1900, when it stood at 18.6 million, principally due to the spectacular demographic boom in the 1960s and early 1970s.[198]');
INSERT INTO "Texts" VALUES (9,'History','The oldest traces of human life in what is now France date from approximately 1.8 million years ago.[29] Over the ensuing millennia, humans were confronted by a harsh and variable climate, marked by several glacial periods. Early hominids led a nomadic hunter-gatherer life.[29] France has a large number of decorated caves from the upper Palaeolithic era, including one of the most famous and best preserved, Lascaux[29] (approximately 18,000 BC). At the end of the last glacial period (10,000 BC), the climate became milder;[29] from approximately 7,000 BC, this part of Western Europe entered the Neolithic era and its inhabitants became sedentary.');
INSERT INTO "Texts" VALUES (10,'Geography','The vast majority of France''s territory and population is situated in Western Europe and is called Metropolitan France, to distinguish it from the country''s various overseas polities. It is bordered by the North Sea in the north, the English Channel in the northwest, the Atlantic Ocean in the west and the Mediterranean sea in the southeast. Its land borders consist of Belgium and Luxembourg in the northeast, Germany and Switzerland in the east, Italy and Monaco in the southeast, and Andorra and Spain in the south and southwest. With the exception of the northeast, most of France''s land borders are roughly delineated by natural boundaries and geographic features: to the south and southeast, the Pyrenees and the Alps and the Jura, respectively, and to the east, the Rhine river. Due to its shape, France is often referred to as l''Hexagone ("The Hexagon"). Metropolitan France includes various coastal islands, of which the largest is Corsica. Metropolitan France is situated mostly between latitudes 41° and 51° N, and longitudes 6° W and 10° E, on the western edge of Europe, and thus lies within the northern temperate zone. Its continental part covers about 1000 km from north to south and from east to west.');
INSERT INTO "Texts" VALUES (11,'Economy','A member of the Group of Seven (formerly Group of Eight) leading industrialized countries, as of 2018, it is ranked as the world''s tenth largest and the EU''s second largest economy by purchasing power parity.[181] France joined 11 other EU members to launch the euro in 1999, with euro coins and banknotes completely replacing the French franc (₣) in 2002.[182]');
INSERT INTO "Texts" VALUES (12,'Demographics','With an estimated December 2020 population of 67.41 million people,[241] France is the 20th most populous country in the world, the third-most populous in Europe (after Russia and Germany), and the second most populous in the European Union (after Germany).');
INSERT INTO "Country Texts" VALUES ('DEU',1);
INSERT INTO "Country Texts" VALUES ('DEU',2);
INSERT INTO "Country Texts" VALUES ('DEU',3);
INSERT INTO "Country Texts" VALUES ('DEU',4);
INSERT INTO "Country Texts" VALUES ('ESP',5);
INSERT INTO "Country Texts" VALUES ('ESP',6);
INSERT INTO "Country Texts" VALUES ('ESP',7);
INSERT INTO "Country Texts" VALUES ('ESP',8);
INSERT INTO "Country Texts" VALUES ('FRA',9);
INSERT INTO "Country Texts" VALUES ('FRA',10);
INSERT INTO "Country Texts" VALUES ('FRA',11);
INSERT INTO "Country Texts" VALUES ('FRA',12);
INSERT INTO "Datasets" VALUES (1,'GDP','1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
215838448137.658,249985055484.303,299801542047.476,398374021953.897,445303484241.554,490636517211.225,519754453161.411,600498238019.035,740469983446.933,881345176608.686,950290856466.538,800472055387.278,776576439106.956,770684323247.798,725111123634.115,732534887058.198,1046259374943.71,1298176105549.51,1401233225303.49,1398967436804.33,1771671206875.68,1868945197407.19,2131571696931.75,2071323790370.28,2205074123177.05,2585792275146.72,2497244606186.64,2211989623279.95,2238990774702.68,2194204133816.32,1943145384190.16,1944107382550.34,2068624129493.69,2496128668171.56,2809187981127.39,2845802760850.64,2992196713084.93,3421229126745.14,3730027830672.33,3397791053070.3,3396354075663.73,3744408602683.94,3527344944139.83,3732743446218.92,3883920155292.26,3356235704119.75,3467498002104.33,3682602479929.42,3963767526250.98,3861123558039.21
');
INSERT INTO "Datasets" VALUES (2,'GDP','1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
12072126075.397,13834300571.4849,16138545209.246,19074913947.7196,21343844643.7341,24756958694.9238,28721062242.1634,31647119228.1982,31475548481.4095,36038711599.541,40992995008.3195,46619420359.2814,59132415221.3306,78639525985.1513,97274006345.5437,114777046376.812,118507184779.905,132449277108.434,160599687500,214601955875.062,232766822928.754,202807891511.984,195996754505.528,170951185614.849,172102910370.524,180793463796.477,251321075204.942,318747935588.196,376160409941.437,414757056921.996,536558591250.408,577166174539.632,630916018202.503,525075636030.854,530562634455.347,614609020549.773,642588992512.807,590077272727.273,619214834614.099,634693160025.57,596877648793.072,627286800894.855,705394315829.098,905492099322.799,1067093369754.16,1153285660987.44,1259343871534.31,1472131125102.66,1625224842536.99,1485583495415.39,1420722034063,1478772824224.03,1324820091194.67,1354757433212.72,1369398844599.58,1195119269971.52,1232076017361.53,1312539279462.36,1422153839840.78,1393490524517.64
');
INSERT INTO "Datasets" VALUES (3,'GDP','1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
62225478000.8822,67461644222.0352,75607529809.9288,84759195105.8693,94007851047.3678,101537248148.427,110045852177.928,118972977486.207,129785441507.456,141903068680.309,148456359985.827,165966615366.402,203494148244.473,264429876252.21,285552373158.756,360832186018.051,372319038514.067,410279486493.715,506707848837.209,613953129818.07,701288419745.421,615552202776.101,584877732308.614,559869179791.72,530683779929.445,553138414367.061,771470783218.108,934173305685.911,1018847043277.17,1025211803413.53,1269179616913.63,1269276828275.78,1401465923172.24,1322815612694,1393982750472.59,1601094756209.75,1605675086549.56,1452884917959.09,1503108739159.44,1492647560196.04,1362248940482.77,1376465324384.79,1494286655373.61,1840480812641.08,2115742488204.62,2196126103718.44,2318593651988.46,2657213249384.07,2918382891460.38,2690222283967.77,2642609548930.36,2861408170264.6,2683825225092.63,2811077725703.59,2852165760630.27,2438207896251.84,2471285607081.72,2595151045197.65,2787863958885.49,2715518274227.45
');
INSERT INTO "Datasets" VALUES (4,'Population','1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
72814900,73377632,74025784,74714353,75318337,75963695,76600311,76951336,77294314,77909682,78169289,78312842,78688452,78936666,78967433,78673554,78336950,78159814,78091820,78126350,78288576,78407907,78333366,78128282,77858685,77684873,77720436,77839920,78144619,78751283,79433029,80013896,80624598,81156363,81438348,81678051,81914831,82034771,82047195,82100243,82211508,82349925,82488495,82534176,82516260,82469422,82376451,82266372,82110097,81902307,81776930,80274983,80425823,80645605,80982500,81686611,82348669,82657002,82905782,83132799
');
INSERT INTO "Datasets" VALUES (5,'Population','1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
30455000,30739250,31023366,31296651,31609195,31954292,32283194,32682947,33113134,33441054,33814531,34224490,34604469,34988947,35373335,35757900,36137812,36511638,36864898,37191330,37491165,37758631,37986012,38171525,38330364,38469512,38584624,38684815,38766939,38827764,38867322,38966376,39157685,39361262,39549108,39724050,39889852,40057389,40223509,40386875,40567864,40850412,41431558,42187645,42921895,43653155,44397319,45226803,45954106,46362946,46576897,46742697,46773055,46620045,46480882,46444832,46484062,46593236,46797754,47076781
');
INSERT INTO "Datasets" VALUES (6,'Population','1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
46621669,47240543,47904877,48582611,49230595,49818028,50330262,50775794,51175508,51561836,51957738,52371342,52793138,53207734,53592233,53931390,54220022,54467702,54691851,54917118,55161527,55430296,55718933,56023770,56337666,56654696,56976123,57302663,57627105,57940212,58235697,58559311,58851217,59106768,59327192,59541899,59753100,59964851,60186288,60496718,60912500,61357430,61805267,62244886,62704895,63179351,63621381,64016225,64374984,64707040,65027507,65342780,65659809,65998687,66312067,66548272,66724104,66864379,66965912,67059887
');
INSERT INTO "Country Datasets" VALUES ('DEU',1);
INSERT INTO "Country Datasets" VALUES ('DEU',4);
INSERT INTO "Country Datasets" VALUES ('ESP',2);
INSERT INTO "Country Datasets" VALUES ('ESP',5);
INSERT INTO "Country Datasets" VALUES ('FRA',3);
INSERT INTO "Country Datasets" VALUES ('FRA',6);
INSERT INTO "Images" VALUES (1,'Alhambra Palace','images/victoriano-izquierdo-HoevDVvxInw-unsplash.jpg','The Alhambra Palace in Spain','Victoriano Izquierdo');
INSERT INTO "Images" VALUES (2,'Sevilla','images/tomas-nozina-UP22zkjJGZo-unsplash.jpg','Boats Plaza of Spain Sevilla, Sevilla, Spain','<span>Photo by <a href="https://unsplash.com/@valentinsteph?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Stéphan Valentin</a> on <a href="https://unsplash.com/s/photos/spain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (3,'Tibidabo Park','images/tomas-nozina-UP22zkjJGZo-unsplash.jpg','Tibidabo Amusement Park, Barcelona, Spain','<span>Photo by <a href="https://unsplash.com/@tomasnozina?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tomáš Nožina</a> on <a href="https://unsplash.com/s/photos/spain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (4,'Traditional Village','images/roman-kraft-g_gwdpsCVAY-unsplash.jpg','Rothenburg ob der Tauber, Germany','<span>Photo by <a href="https://unsplash.com/@romankraft?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Roman Kraft</a> on <a href="https://unsplash.com/s/photos/germany?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (5,'Berlin','images/ansgar-scheffold-mtfTz0FnwBw-unsplash.jpg','Brandenburg Tor, Berlin, Germany','<span>Photo by <a href="https://unsplash.com/@ansgarscheffold?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ansgar Scheffold</a> on <a href="https://unsplash.com/s/photos/germany?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (6,'Cochem','images/kai-pilger--uQBxh6L5D4-unsplash.jpg','Cochem, Germany','<span>Photo by <a href="https://unsplash.com/@kaip?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kai Pilger</a> on <a href="https://unsplash.com/s/photos/germany?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (7,'Eifel Tower','images/anthony-delanoix-QAwciFlS1g4-unsplash.jpg','Eifel Tower','<span>Photo by <a href="https://unsplash.com/@anthonydelanoix?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anthony DELANOIX</a> on <a href="https://unsplash.com/s/photos/france?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (8,'Laon','images/adrien-tutin-hCh_PHIhoLI-unsplash.jpg','Laon, France','<span>Photo by <a href="https://unsplash.com/@adrientutinphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Adrien Tutin</a> on <a href="https://unsplash.com/s/photos/france?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Images" VALUES (9,'Arc of Triumph','images/stevie-ekkelkamp-t7z3xjyRsQ4-unsplash.jpg','The Arc de Triomphe','<span>Photo by <a href="https://unsplash.com/@steviekkelkamp?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Stevie Ekkelkamp</a> on <a href="https://unsplash.com/s/photos/france?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
INSERT INTO "Reports" VALUES (1,'Spain','[{"id":"e3b0fedf-0130-4589-b7dd-701869cc9d05","type":"HEADLINE","data":{"type":"DATASOURCE_STATIC","content":"Spain"},"index":0},{"id":"c25c2f57-9ba8-489c-ac2b-34d6ce0057a8","type":"IMAGE","data":{"type":"DATASOURCE_DYNAMIC","country":"ESP","sourceId":1,"path":"http://localhost:5000/images/victoriano-izquierdo-HoevDVvxInw-unsplash.jpg","caption":"The Alhambra Palace in Spain","credit":"Victoriano Izquierdo"},"index":1},{"id":"e0d9c66a-5c81-443a-b393-996521e391b3","type":"TEXT","data":{"type":"DATASOURCE_DYNAMIC","country":"ESP","sourceId":5,"content":"Iberia enters written records as a land populated largely by the Iberians, Basques and Celts. Early on its coastal areas were settled by Phoenicians who founded Western Europe''s most ancient cities Cádiz and Málaga. Phoenician influence expanded as much of the Peninsula was eventually incorporated into the Carthaginian Empire, becoming a major theatre of the Punic Wars against the expanding Roman Empire. After an arduous conquest, the peninsula came fully under Roman rule. During the early Middle Ages it came under Visigothic rule, and then much of it was conquered by Muslim invaders from North Africa. In a process that took centuries, the small Christian kingdoms in the north gradually regained control of the peninsula. The last Muslim state fell in 1492, the same year Columbus reached the Americas. A global empire began which saw Spain become the strongest kingdom in Europe, the leading world power for one and a half centuries, and the largest overseas empire for three centuries."},"index":2}]');
INSERT INTO "Reports" VALUES (57,'Test','[{"id":"e24052e7-db03-4f44-874b-bff5b6a270d9","type":"TEXT","data":{"type":"DATASOURCE_STATIC","content":"testing... 1.. 2.. 3.."},"index":0}]');
INSERT INTO "Countries" VALUES ('DEU','Germany');
INSERT INTO "Countries" VALUES ('ESP','Spain');
INSERT INTO "Countries" VALUES ('FRA','France');
COMMIT;
