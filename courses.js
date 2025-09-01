const courses = `[
    {
      "name": "Electrical And Computer Engr 1",
      "type": "",
      "description": "Work experience which combines classroom theory with practical knowledge of operations to provide students with a background upon which to base a professional career.",
      "credits": 1.00,
      "enrolled": 25,
      "seats": 50,
      "waitlist": 0
    },
    {
      "name": "Music - performance 21",
      "type": "",
      "description": "Prepares music educators for teaching brass instruments (horn, trumpet trombone, euphonium, and tuba) in K-12 school settings.",
      "credits": 1.00,
      "enrolled": 12,
      "seats": 12,
      "waitlist": 0
    },
    {
      "name": "Music - performance 22",
      "type": "",
      "description": "Prepares music educators for teaching brass instruments (horn, trumpet trombone, euphonium, and tuba) in K-12 school settings.",
      "credits": 1.00,
      "enrolled": 12,
      "seats": 12,
      "waitlist": 0
    },
    {
      "name": "Music 40",
      "type": "",
      "description": "Rehearsal and performance of music from wind ensemble and band literature. Audition required.",
      "credits": 1.00,
      "enrolled": 1,
      "seats": 50,
      "waitlist": 0
    },
    {
      "name": "Mathematics 96",
      "type": "",
      "description": "Covers the necessary mathematical tools needed to succeed in our algebra course and provides fundamental mathematical skills.",
      "credits": 3.00,
      "enrolled": 857,
      "seats": 857,
      "waitlist": 65
    },
    {
      "name": "Accounting And Info Systems 100",
      "type": "",
      "description": "Examines generally accepted accounting principles for measurement and reporting of financial information in a balance sheet, income statement, and statement of cash flows.",
      "credits": 3.00,
      "enrolled": 598,
      "seats": 598,
      "waitlist": 300
    },
    {
      "name": "African Cultural Studies 100",
      "type": "Humanities",
      "description": "An introduction to current research in African cultural studies, ranging from various literary genres and uses of discourse; to diverse media including screen media, music, cartoons, and journalism; and to other forms of popular expression like soccer and drama.",
      "credits": 3.00,
      "enrolled": 86,
      "seats": 140,
      "waitlist": 0
    },
    {
      "name": "American Indian Studies 100",
      "type": "Social Science",
      "description": "Focus is history, social organization, political experience, artistic expression of North American Indians, using methods and materials from a number of disciplines as an introduction to the interdisciplinary field.",
      "credits": 3.00,
      "enrolled": 338,
      "seats": 375,
      "waitlist": 0
    },
    {
      "name": "Anthropology 100",
      "type": "Social Science",
      "description": "General understanding of humans in relation to cultures, evolutionary development and racial diversity, capacities for society, and the development of the world's major cultures.",
      "credits": 3.00,
      "enrolled": 220,
      "seats": 220,
      "waitlist": 0
    },
    {
      "name": "Art Department 100",
      "type": "Humanities",
      "description": "Seek answers to the fundamental question 'What is art?' from multiple perspectives such as historical, theoretical, critical, conceptual, formal, and experiential. Develop visual literacy, sophisticated observational skills and a formal language to assist in the interpretation of objects and experiences in the context of art.",
      "credits": 3.00,
      "enrolled": 557,
      "seats": 594,
      "waitlist": 189
    },
    {
      "name": "Asian Languages And Cultures 100",
      "type": "Humanities",
      "description": "Offers a comparative and interdisciplinary introduction to multiple cultures of Asia. Possible topics include but are not limited to: travelogues; the languages of Asia; food cultures of Asia.",
      "credits": 3.00,
      "enrolled": 104,
      "seats": 125,
      "waitlist": 25
    },
    {
      "name": "Atmospheric & Oceanic Sciences 100",
      "type": "Physical Science",
      "description": "Nature and variability of wind, temperature, clouds and precipitation. Storm systems, fronts, thunderstorms, tornadoes and their prediction. Air composition and pollution. Global winds, seasonal changes, climate and climatic change.",
      "credits": 3.00,
      "enrolled": 398,
      "seats": 450,
      "waitlist": 0
    },
    {
      "name": "Communication Arts 100",
      "type": "Communications A",
      "description": "Develop written and spoken communication skills through hands-on learning while studying audience- centered public speaking. Focus on becoming more confident and comfortable as a speaker and writer.",
      "credits": 3.00,
      "enrolled": 828,
      "seats": 840,
      "waitlist": 0
    },
    {
      "name": "English 100",
      "type": "Communications A",
      "description": "Focuses on development of rhetorical reading, listening, and writing abilities; provides practice in written and spoken communication (emphasis on writing); develops information literacy; provides a foundation for a variety of college course work and post-college careers.",
      "credits": 3.00,
      "enrolled": 1251,
      "seats": 1254,
      "waitlist": 0
    },
    {
      "name": "Folklore Program 100",
      "type": ["Ethnic Studies", "Humanities"],
      "description": "Surveys folklore in the United States and around the world, with a comparative emphasis on ways in which individuals and groups use beliefs, songs, stories, sayings, dances, festivals, and artifacts to address issues of identity, authenticity, and authority, in complex societies.",
      "credits": 3.00,
      "enrolled": 0,
      "seats": 240,
      "waitlist": 48
    },
    {
      "name": "Geoscience 100",
      "type": "Physical Science",
      "description": "Geologic processes; structure and history of the earth; earthquakes, volcanos, glaciers, groundwater, minerals, rocks, deserts, fossils; topographic and geologic maps; climate change on geologic and human time scales.",
      "credits": 3.00,
      "enrolled": 360,
      "seats": 360,
      "waitlist": 0
    },
    {
      "name": "History 100",
      "type": ["Humanities", "Social Science"],
      "description": "Introduction to elementary-level historical studies at the research university. Emphasis on interpretation and critical thinking.",
      "credits": 3.00,
      "enrolled": 47,
      "seats": 60,
      "waitlist": 10
    },
    {
      "name": "Kinesiology 100",
      "type": "Biological Science",
      "description": "Guidelines and assessment methods for fitness and nutrition. Motivation, adherence and stress-reduction techniques discussed. Lecture-demonstration concerning effects of exercise and nutrition on health and well-being.",
      "credits": 2.00,
      "enrolled": 214,
      "seats": 220,
      "waitlist": 50
    },
    {
      "name": "Animal Sciences 101",
      "type": "Biological Science",
      "description": "An overview of animal sciences covering anatomy, physiology, nutrition, reproduction, genetics, management, animal welfare, and behavior of domesticated animals.",
      "credits": 3.00,
      "enrolled": 171,
      "seats": 172,
      "waitlist": 0
    },
    {
      "name": "Asian Lang & Culture: Language 101",
      "type": "",
      "description": "Introduces the sounds, basic grammar along with 400 characters of standard spoken Chinese. It also teaches beginner-level communication skills in everyday life.",
      "credits": 4.00,
      "enrolled": 84,
      "seats": 84,
      "waitlist": 22
    },
    {
      "name": "Chemistry 101",
      "type": "Physical Science",
      "description": "Stoichiometry and the mole concept, chemical reactions, thermochemistry, electronic structure of atoms, periodic properties, chemical bonding, intermolecular forces, and the behavior of gases, liquids and solids.",
      "credits": 1.00,
      "enrolled": 110,
      "seats": 110,
      "waitlist": 0
    },
    {
      "name": "Economics 101",
      "type": ["Social Science", "Quantitative Reasoning B"],
      "description": "Economic problems of individuals, firms and industries with emphasis on value, price, and distribution of income.",
      "credits": 4.00,
      "enrolled": 1488,
      "seats": 1488,
      "waitlist": 0
    },
    {
      "name": "Geography 101",
      "type": ["Social Science", "Communications B"],
      "description": "Human geographers explore socio-spacial relations, processes and representations of the world in which we live.",
      "credits": 4.00,
      "enrolled": 196,
      "seats": 204,
      "waitlist": 45
    },
    {
      "name": "Computer Sciences 102",
      "type": ["Natural Science", "Quantitative Reasoning A"],
      "description": "Provides a broad overview of computing at an introductory level, including topics such as security, robotics, and artificial intelligence. Increases understanding of how computers work and how algorithms solve problems.",
      "credits": 3.00,
      "enrolled": 178,
      "seats": 200,
      "waitlist": 0
    },
  	{
      "name": "Music 102",
      "type": ["Humanities", "Ethnic Studies"],
      "description": "Examines cultural influences on the development of jazz. Explores historical and ethnographic works by scholars in ethnomusicology, history, anthropology, and communication in order to understand cultural influences of traditional and contemporary genres of jazz.",
      "credits": 3.00,
      "enrolled": 405,
      "seats": 420,
      "waitlist": 0
    },
  	{
      "name": "Zoology 102",
      "type": "Biological Science",
      "description": "General concepts of animal biology at an introductory level emphasizing the evolutionary relationships between animals. Learn about general body plans and strategies used to accomplish the basic tasks of staying alive in major animal groups using preserved and live animals.",
      "credits": 2.00,
      "enrolled": 280,
      "seats": 280,
      "waitlist": 52
    },
  	{
      "name": "Asian Languages And Cultures 103",
      "type": ["Humanities", "Social Science"],
      "description": "Survey of major developments in Chinese history from 1500 B.C. to the founding of the Communist state in 1949. Emphasis on patterns and themes; equal time devoted to the classical and traditional period and the modern era.",
      "credits": 3.00,
      "enrolled": 34,
      "seats": 34,
      "waitlist": 0
	  },
	  {
      "name": "Astronomy 103",
      "type": ["Physical Science", "Quantitative Reasoning B"],
      "description": "The cosmos is vast, mysterious, and beautiful. Join us on an exploration of the universe, from the big bang to the birth, life, and death of stars and the warped reality of black holes.",
      "credits": 3.00,
      "enrolled": 569,
      "seats": 720,
      "waitlist": 0
    },
  	{
      "name": "Physics 103",
      "type": ["Physical Science", "Quantitative Reasoning B"],
      "description": "Introduction to physics at the non-calculus level. Principles of mechanics, heat, and waves, with applications to a number of different fields.",
      "credits": 4.00,
      "enrolled": 2185,
      "seats": 2304,
      "waitlist": 521
    },
	  {
      "name": "Political Science 104",
      "type": "Social Science",
      "description": "Basic institutions and processes of American government. The role of constitutional structures, parties, interest groups and elections in the system; policy formation and policy content.",
      "credits": 3.00,
      "enrolled": 286,
      "seats": 323,
      "waitlist": 4
    },
    {
      "name": "Nursing 105",
      "type": "Social Science",
      "description": "Introduction to health care systems. Factors affecting health and the value placed on health, the delivery of health care in different settings, the roles of various health workers, and the sociological and economic aspects of health care.",
      "credits": 2.00,
      "enrolled": 220,
      "seats": 220,
      "waitlist": 0
    },
    {
      "name": "Geoscience 106",
      "type": "Physical Science",
      "description": "Application of geology to problems resulting from the ever more intense use of the earth and its resources.",
      "credits": 3.00,
      "enrolled": 185,
      "seats": 200,
      "waitlist": 0
    },
  	{
      "name": "Art Department 107",
      "type": "",
      "description": "An introduction to a range of digital media techniques for artists and designers, including digital imaging, vector graphics, web design and 3D digital modeling. Emphasis on creative development along with technical skill building.",
      "credits": 3.00,
      "enrolled": 132,
      "seats": 135,
      "waitlist": 67
    },
    {
      "name": "Chemistry 109",
      "type": ["Physical Science", "Quantitative Reasoning B"],
      "description": "Accelerated coverage of topics in general chemistry, including introduction to laboratory techniques. Topics include atomic and molecular structure, chemical equilibrium, acid-base chemistry, thermodynamics, kinetics, and electrochemistry.",
      "credits": 5.00,
      "enrolled": 768,
      "seats": 800,
      "waitlist": 80
    },
    {
      "name": "Classics 110",
      "type": "Humanities",
      "description": "An examination of the evolution of the human community in the Mediterranean Basin, from the beginning of the earliest civilizations in the Near East (3,000 B.C.E.) until the collapse of the Roman Empire in the West (500 C.E.).",
      "credits": 4.00,
      "enrolled": 56,
      "seats": 72,
      "waitlist": 18
    },
    {
      "name": "Geoscience 110",
      "type": "Biological Science",
      "description": "Contemporary views of the origin and diversification of life and evolutionary processes; crises in the history of life, with emphasis on controversies regarding evolution, mass extinctions, and the co-evolution of Earth and life.",
      "credits": 4.00,
      "enrolled": 208,
      "seats": 272,
      "waitlist": 0
    },
  	{
      "name": "Plant Science 110",
      "type": "Biological Science",
      "description": "Introduces the basic principles of plant science and technology as they apply to cultivated plants.",
      "credits": 4.00,
      "enrolled": 29,
      "seats": 48,
      "waitlist": 0
    },
  	{
      "name": "Mathematics 112",
      "type": "Quantitative Reasoning A",
      "description": "Properties of elementary functions, such as polynomial, absolute value, radical, rational, exponential, and logarithmic functions.",
      "credits": 3.00,
      "enrolled": 851,
      "seats": 986,
      "waitlist": 50
    },
  	{
      "name": "Counseling Psychology 120",
      "type": ["Humanities", "Social Science"],
      "description": "Explore perspectives related to human flourishing from the sciences and humanities.",
      "credits": 3.00,
      "enrolled": 306,
      "seats": 325,
      "waitlist": 46
    },
  	{
      "name": "Botany 130",
      "type": "Biological Science",
      "description": "Introduction to the basic principles and concepts of the biology of plants.",
      "credits": 5.00,
      "enrolled": 157,
      "seats": 180,
      "waitlist": 37
    },
  	{
      "name": "Legal Studies 131",
      "type": "Social Science",
      "description": "Day-to-day functioning of the elements of the criminal justice system in the U.S. Nature of crime in the U.S., ideas about causes and solutions.",
      "credits": 3.00,
      "enrolled": 399,
      "seats": 400,
      "waitlist": 203
    },
  	{
      "name": "Integrated Science 140",
      "type": "",
      "description": "A discussion-based seminar introducing first-year STEM students to the world of public service from the perspective of both the university and its community partners.",
      "credits": 1.00,
      "enrolled": 30,
      "seats": 32,
      "waitlist": 0
    },
  	{
      "name": "English 141",
      "type": "Literature",
      "description": "An introduction to the literature of science fiction and fantasy; specific topics will vary.",
      "credits": 3.00,
      "enrolled": 19,
      "seats": 20,
      "waitlist": 0
    },
  	{
      "name": "Mathematics 141",
      "type": "Quantitative Reasoning A",
      "description": "Develops a habit of mind, competency, and comfort in working with numerical data.",
      "credits": 3.00,
      "enrolled": 80,
      "seats": 80,
      "waitlist": 14
    },
  	{
      "name": "English 144",
      "type": "Literature",
      "description": "An introduction to literature in English written by women in various periods and places; specific topics will vary.",
      "credits": 3.00,
      "enrolled": 284,
      "seats": 285,
      "waitlist": 0
    },
    {
      "name": "Food Science 150",
      "type": "Biological Science",
      "description": "Explores the science behind fermented food and beverages, popularized by brewing, winemaking and breadmaking at home and in retail.",
      "credits": 3.00,
      "enrolled": 107,
      "seats": 107,
      "waitlist": 0
    },
    {
      "name": "Journ And Mass Communication 150",
      "type": "",
      "description": "Explore the central activities and concepts related to various communication professions involved in the realm of sports.",
      "credits": 3.00,
      "enrolled": 116,
      "seats": 120,
      "waitlist": 0
    },
  	{
      "name": "Theatre And Drama 150",
      "type": "",
      "description": "Provides a basic introduction to the craft of acting. Develops disciplines and tools of the actor as they relate to voice, movement, language skills, and engaging communication.",
      "credits": 3.00,
      "enrolled": 117,
      "seats": 120,
      "waitlist": 0
    },
    {
      "name": "Biology 151",
      "type": "Biological Science",
      "description": "Topics include: cell structure and function, cellular metabolism (enzymes, respiration, photosynthesis), information flow (DNA, RNA, protein), principles of genetics and selected topics in Animal Physiology.",
      "credits": 5.00,
      "enrolled": 792,
      "seats": 800,
      "waitlist": 0
    },
    {
      "name": "Civil And Environmental Engr 151",
      "type": "",
      "description": "Introduction to architecture and architectural making. 2D and 3D form and space tested through the theoretical, pragmatic, and contextual issues that influence architecture.",
      "credits": 3.00,
      "enrolled": 78,
      "seats": 100,
      "waitlist": 0
    },
    {
      "name": "Music 151",
      "type": "Humanities",
      "description": "Basic tools of music theory and compositional forms. Explores development of music through general survey of musical styles.",
      "credits": 3.00,
      "enrolled": 117,
      "seats": 120,
      "waitlist": 0
    },
    {
      "name": "Asian American Studies 152",
      "type": ["Literature", "Ethnic Studies"],
      "description": "Explores fantasy as a conduit of political meaning in Asian American fiction, graphic novels, anime, and art. Analyzes race as it circulates in visual mediums and literary texts.",
      "credits": 3.00,
      "enrolled": 162,
      "seats": 162,
      "waitlist": 0
    },
    {
      "name": "Biology 152",
      "type": ["Biological Science", "Communications B"],
      "description": "Topics include: selected topics in plant physiology, a survey of the five major kingdoms of organisms, speciation and evolutionary theory, and ecology at multiple levels of the biological hierarchy.",
      "credits": 5.00,
      "enrolled": 605,
      "seats": 624,
      "waitlist": 0
    },
    {
      "name": "African American Studies 154",
      "type": ["Humanities", "Ethnic Studies"],
      "description": "The aesthetic and political evolution of hip-hop culture and its relationship to contemporary social issues.",
      "credits": 3.00,
      "enrolled": 223,
      "seats": 225,
      "waitlist": 30
    },
    {
      "name": "Communication Arts 155",
      "type": "",
      "description": "Teaches the skills needed to produce, engage with, and understand new and emerging technologies within the context of communication and creative expression.",
      "credits": 4.00,
      "enrolled": 116,
      "seats": 128,
      "waitlist": 0
    },
    {
      "name": "English 156",
      "type": "Literature",
      "description": "Exploration of literature as both a source of knowledge about medicine and as a catalyst for reflection about medical concepts and practices, including health, illness, dying, and disability.",
      "credits": 3.00,
      "enrolled": 60,
      "seats": 60,
      "waitlist": 0
    },
    {
      "name": "Civil And Environmental Engr 159",
      "type": "",
      "description": "Graphical communication including lettering, drawing equipment and techniques; geometric constructions, orthographic projections, technical sketching, isometric views, descriptive geometry, and computer-aided design drawing, with applications specific to civil engineering.",
      "credits": 2.00,
      "enrolled": 77,
      "seats": 90,
      "waitlist": 13
    },
    {
      "name": "Theatre And Drama 160",
      "type": "",
      "description": "Through scenery, costumes, lighting, sound, and stage management explore the relationship between the technical components of the production process.",
      "credits": 3.00,
      "enrolled": 35,
      "seats": 35,
      "waitlist": 0
    },
    {
      "name": "English 168",
      "type": "Literature",
      "description": "A thematic introduction to literary works in a variety of genres written in English from the turn of the twentieth century to the present day.",
      "credits": 3.00,
      "enrolled": 180,
      "seats": 180,
      "waitlist": 0
    },
    {
      "name": "Geography 170",
      "type": "Physical Science",
      "description": "Introduction to the collection, representation and use of geospatial data.",
      "credits": 3.00,
      "enrolled": 250,
      "seats": 250,
      "waitlist": 53
    },
    {
      "name": "Sociology 170",
      "type": ["Social Science", "Ethnic Studies"],
      "description": "Social, economic, and political problems affected by birth and death rates, population size and distribution, voluntary and forced migration.",
      "credits": 3.00,
      "enrolled": 154,
      "seats": 160,
      "waitlist": 0
    },
    {
      "name": "Journ And Mass Communication 176",
      "type": "Social Science",
      "description": "Special focus on a specific conceptual issue or topic involving mass communication.",
      "credits": 2.00,
      "enrolled": 236,
      "seats": 240,
      "waitlist": 20
    },
    {
      "name": "Food Science 180",
      "type": "Ethnic Studies",
      "description": "Explores diet-related diseases in the United States and their disproportionate effect on Black Indigenous and People of Color (BIPOC) and other underserved or vulnerable populations.",
      "credits": 3.00,
      "enrolled": 26,
      "seats": 26,
      "waitlist": 1
    },
    {
      "name": "History 190",
      "type": ["Humanities", "Social Science", "Ethnic Studies"],
      "description": "A broad survey of American Indian history which centers Indigenous peoples, communities, and nations in the context of U.S. policy and culture that emphasizes decolonial methods and Native ways of knowing the past.",
      "credits": 3.00,
      "enrolled": 67,
      "seats": 72,
      "waitlist": 10
    },
    {
      "name": "Animal Sciences 200",
      "type": "Biological Science",
      "description": "A systematic coverage of many of the animals (including birds) that humans keep as their social companions.",
      "credits": 3.00,
      "enrolled": 132,
      "seats": 150,
      "waitlist": 0
    },
    {
      "name": "Communication Arts 200",
      "type": ["Humanities", "Social Science"],
      "description": "An introduction to digital communication and how it shapes our everyday lives. Develop digital communication skills, explore digital media tools and trends, and examine expressions of power online.",
      "credits": 3.00,
      "enrolled": 92,
      "seats": 100,
      "waitlist": 0
    },
    {
      "name": "Computer Sciences 200",
      "type": ["Natural Science", "Quantitative Reasoning B"],
      "description": "Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics.",
      "credits": 3.00,
      "enrolled": 555,
      "seats": 560,
      "waitlist": 0
    },
    {
      "name": "Finance, Investment & Banking 200",
      "type": "",
      "description": "Comprehensive introduction to the finance industry ecosystem, examining a variety of industry sectors, or 'Pathways,' within the finance world, providing a nuanced exploration of both macro and micro-level dynamics.",
      "credits": 1.00,
      "enrolled": 60,
      "seats": 60,
      "waitlist": 54
    },
    {
      "name": "Nutritional Sciences 200",
      "type": "",
      "description": "An overview of the nutrition and dietetics professions: career options; professional development; professional references and resources; credentialing; professional issues.",
      "credits": 1.00,
      "enrolled": 29,
      "seats": 55,
      "waitlist": 0
    },
    {
      "name": "Entomology 201",
      "type": "Biological Science",
      "description": "Importance of insects in the environment, emphasizing beneficial insects, disease carriers, and agricultural pests that interfere with the food supply.",
      "credits": 3.00,
      "enrolled": 270,
      "seats": 270,
      "waitlist": 2
    },
    {
      "name": "History 201",
      "type": ["Humanities", "Communications B"],
      "description": "Conduct original historical research and convey the results to others.",
      "credits": 3.00,
      "enrolled": 85,
      "seats": 85,
      "waitlist": 6
    },
    {
      "name": "Engr Mechanics & Aerospace Egr 202",
      "type": "Physical Science",
      "description": "Kinematics, force-mass-acceleration relations, work and energy, impulse and momentum, moments of inertia and mass.",
      "credits": 3.00,
      "enrolled": 289,
      "seats": 310,
      "waitlist": 17
    },
    {
      "name": "Psychology 202",
      "type": "Social Science",
      "description": "Behavior, including its development, motivation, frustrations, emotion, intelligence, learning, forgetting, personality, language, thinking, and social behavior.",
      "credits": 3.00,
      "enrolled": 2438,
      "seats": 2450,
      "waitlist": 156
    },
    {
      "name": "Comparative Literature 203",
      "type": "Literature",
      "description": "Introduction to the critical study of specific literary forms (e.g., comedy, short story) and the connections between literary forms and other cultural and artistic phenomena (e.g., cinema, TV, music, visual arts).",
      "credits": 3.00,
      "enrolled": 93,
      "seats": 93,
      "waitlist": 3
    },
    {
      "name": "Mathematics 221",
      "type": ["Natural Science", "Quantitative Reasoning B"],
      "description": "Introduction to differential and integral calculus and plane analytic geometry; applications; transcendental functions.",
      "credits": 5.00,
      "enrolled": 1359,
      "seats": 1372,
      "waitlist": 56
    },
    {
      "name": "Mathematics 222",
      "type": ["Natural Science", "Quantitative Reasoning B"],
      "description": "Techniques of integration, improper integrals, first order ordinary differential equations, sequences and series, Taylor series, vector geometry in two and three dimensions.",
      "credits": 4.00,
      "enrolled": 1372,
      "seats": 1372,
      "waitlist": 178
    },
    {
      "name": "Psychology 225",
      "type": ["Biological Science", "Communications B"],
      "description": "General characteristics of scientific method; use of experimental, observational, and correlational research designs; research methods used in psychological science.",
      "credits": 4.00,
      "enrolled": 576,
      "seats": 576,
      "waitlist": 44
    },
    {
      "name": "Computer Sciences 240",
      "type": "Natural Science",
      "description": "Basic concepts of logic, sets, partial order and other relations, and functions.",
      "credits": 3.00,
      "enrolled": 600,
      "seats": 600,
      "waitlist": 142
    },
    {
      "name": "Statistics 240",
      "type": ["Natural Science", "Quantitative Reasoning B"],
      "description": "Introduces reproducible data management, modeling, analysis, and statistical inference through a practical, hands-on case studies approach.",
      "credits": 4.00,
      "enrolled": 800,
      "seats": 824,
      "waitlist": 0
    },
  	{
      "name": "Philosophy 241",
      "type": ["Humanities", "Social Science"],
      "description": "Nature of moral problems and of ethical theory, varieties of moral skepticism, practical ethics and the evaluation of social institutions.",
      "credits": 3.00,
      "enrolled": 336,
      "seats": 345,
      "waitlist": 110
    },
  	{
      "name": "History 244",
      "type": ["Humanities", "Social Science"],
      "description": "As an introduction to Southeast Asia, covers the ethnic, cultural, religious, and political histories of the region from the classical states period to the present.",
      "credits": 4.00,
      "enrolled": 76,
      "seats": 90,
      "waitlist": 22
    },
    {
      "name": "Physics 247",
      "type": "Physical Science",
      "description": "Calculus-based introduction to physics intended for Physics, AMEP, and Astronomy-Physics majors.",
      "credits": 5.00,
      "enrolled": 86,
      "seats": 92,
      "waitlist": 29
    },
  	{
      "name": "Communication Arts 250",
      "type": "Humanities",
      "description": "Key concepts for the critical analysis of television, film, radio, and digital media. Focusing primarily on meanings, aesthetics, technology, media industries, representations, and audiences.",
      "credits": 3.00,
      "enrolled": 236,
      "seats": 240,
      "waitlist": 0
    },
  	{
      "name": "Legal Studies 250",
      "type": "Social Science",
      "description": "Investigates how the systems of incarceration and education operate alongside, within, around and through one another.",
      "credits": 3.00,
      "enrolled": 30,
      "seats": 30,
      "waitlist": 4
    },
  	{
      "name": "Computer Sciences 252",
      "type": "",
      "description": "Logic components built with transistors, rudimentary Boolean algebra, basic combinational logic design, basic synchronous sequential logic design, basic computer organization and design, introductory machine- and assembly-language programming.",
      "credits": 3.00,
      "enrolled": 500,
      "seats": 500,
      "waitlist": 72
    },
  	{
      "name": "Political Science 255",
      "type": ["Humanities", "Social Science"],
      "description": "Multidisciplinary and historical perspectives on the East Asian civilizations of China, Japan, Korea, Tibet and Mongolia from prehistory to the present, including developments in philosophy, economy, governance, social structure, kinship, geography, etc.",
      "credits": 3.00,
      "enrolled": 86,
      "seats": 88,
      "waitlist": 0
    },
  	{
      "name": "Botany 260",
      "type": "Biological Science",
      "description": "The relationships of organisms and the environment. Population dynamics and community organization, human-environment relationships, action programs.",
      "credits": 3.00,
      "enrolled": 133,
      "seats": 180,
      "waitlist": 0
    },
  	{
      "name": "Communication Arts 262",
      "type": ["Humanities", "Communications B"],
      "description": "Develop your skills of argument to productively engage people in a diverse society. Learn to discuss differences with others and to contribute positively to a dynamic and diverse society.",
      "credits": 3.00,
      "enrolled": 100,
      "seats": 108,
      "waitlist": 0
    },
  	{
      "name": "Biological Systems Engineering 270",
      "type": "",
      "description": "Introduction to computer aided design (CAD) concepts and techniques, including two- and three-dimensional drawing presentation, methods of graphic communication and design synthesis.",
      "credits": 3.00,
      "enrolled": 42,
      "seats": 42,
      "waitlist": 0
    },
  	{
      "name": "Communication Arts 272",
      "type": ["Social Science", "Communications B"],
      "description": "Survey of concepts, theories, and research concerning communication across all phases of interpersonal relationships, focusing on both theoretical and practical applications.",
      "credits": 3.00,
      "enrolled": 153,
      "seats": 153,
      "waitlist": 0
    },
  	{
      "name": "Computer Sciences 272",
      "type": "",
      "description": "Introduces methods and tools for creating/maintaining secure and interactive web content.",
      "credits": 3.00,
      "enrolled": 130,
      "seats": 130,
      "waitlist": 27
    },
  	{
      "name": "Zoology 275",
      "type": "Biological Science",
      "description": "Biology, ecology and evolution of dinosaurs. Use anatomical correlates and phylogeny to understand physiology, adaptation, and evolutionary transitions.",
      "credits": 3.00,
      "enrolled": 83,
      "seats": 100,
      "waitlist": 0
    },
  	{
      "name": "Curriculum And Instruction 277",
      "type": "Social Science",
      "description": "Explores current research on videogames and learning. Critically reflect on the intellectual and educational merits and drawbacks of videogames and how videogame culture shapes how individuals think and learn.",
      "credits": 3.00,
      "enrolled": 186,
      "seats": 200,
      "waitlist": 23
    },
    {
      "name": "Political Science 297",
      "type": ["Humanities", "Social Science", "Ethnic Studies"],
      "description": "",
      "credits": 4.00,
      "enrolled": 45,
      "seats": 45,
      "waitlist": 0
    },
    {
      "name": "Computer Sciences 300",
      "type": ["Natural Science", "Quantitative Reasoning B"],
      "description": "Introduction to Object-Oriented Programming using classes and objects to solve more complex problems.",
      "credits": 3.00,
      "enrolled": 920,
      "seats": 920,
      "waitlist": 40
    },
    {
      "name": "Art History 303",
      "type": "Humanities",
      "description": "Surveys the arts or visual culture of varying geographical regions, time periods, or cultures depending on selected topic.",
      "credits": 3.00,
      "enrolled": 26,
      "seats": 60,
      "waitlist": 0
    },
    {
      "name": "Geoscience 304",
      "type": "Biological Science",
      "description": "An integrative approach to studying the interaction between the atmosphere, hydrosphere, biosphere, and geosphere as they have evolved during earth history.",
      "credits": 3.00,
      "enrolled": 9,
      "seats": 40,
      "waitlist": 0
    },
    {
      "name": "Art Department 307",
      "type": "",
      "description": "An introduction to making comics as both a subject and means of academic inquiry. This is a rigorous class and the workload is substantial.",
      "credits": 4.00,
      "enrolled": 32,
      "seats": 45,
      "waitlist": 0
    },
    {
      "name": "Asian Languages And Cultures 308",
      "type": ["Humanities", "Social Science"],
      "description": "The basic thought, practices and history of Buddhism, including selflessness and relativity, practices of meditation, merit- making and compassion from both local and translocal perspectives.",
      "credits": 3.00,
      "enrolled": 58,
      "seats": 72,
      "waitlist": 4
    },
    {
      "name": "Economics 310",
      "type": "Quantitative Reasoning B",
      "description": "Introduction to analysis of economic data. The techniques of descriptive statistics and statistical inference (hypothesis testing and estimation) as directed toward application in economic research.",
      "credits": 4.00,
      "enrolled": 416,
      "seats": 456,
      "waitlist": 13
    },
    {
      "name": "Statistics 310",
      "type": "Natural Science",
      "description": "Mathematical statistical inference aims at providing an understanding of likelihood's central role to statistical inference, using the language of mathematical statistics to analyze statistical procedures, and using the computer as a tool for understanding statistics.",
      "credits": 3.00,
      "enrolled": 68,
      "seats": 68,
      "waitlist": 6
    },
    {
      "name": "Communication Arts 313",
      "type": "Humanities",
      "description": "Explore various topics in film and media studies, history, and theory.",
      "credits": 3.00,
      "enrolled": 208,
      "seats": 240,
      "waitlist": 4
    },
    {
      "name": "Computer Sciences 319",
      "type": "",
      "description": "In addition to a survey of programming basics (control flow and data structures), web scraping, database queries, and tabular analysis will be introduced.",
      "credits": 3.00,
      "enrolled": 1080,
      "seats": 1192,
      "waitlist": 0
    },
  	{
      "name": "Computer Sciences 320",
      "type": "Natural Science",
      "description": "Learn to implement data structures (e.g., graphs) to efficiently represent datasets. Software-engineering tools such as version control and Python virtual environments will be introduced, with an emphasis on reproducibility of analysis.",
      "credits": 4.00,
      "enrolled": 498,
      "seats": 520,
      "waitlist": 7
    },
    {
      "name": "Information Systems 322",
      "type": "",
      "description": "Introduction to database management systems with a focus on relational databases.",
      "credits": 3.00,
      "enrolled": 84,
      "seats": 84,
      "waitlist": 5
    },
  	{
      "name": "Food Science 324",
      "type": "Biological Science",
      "description": "Lab exercises dealing with food preservation, spoilage, and food poisoning. Isolation, identification and quantification of specific microbes occurring in foods, and food fermentations by bacteria and yeast.",
      "credits": 2.00,
      "enrolled": 35,
      "seats": 48,
      "waitlist": 0
    },
    {
      "name": "Mechanical Engineering 331",
      "type": "",
      "description": "Introduction to the fundamentals of Computer Aided Engineering.",
      "credits": 3.00,
      "enrolled": 180,
      "seats": 186,
      "waitlist": 0
    },
  	{
      "name": "Statistics 340",
      "type": "Natural Science",
      "description": "Teaches how to explore, model, and analyze data using R.",
      "credits": 4.00,
      "enrolled": 409,
      "seats": 432,
      "waitlist": 52
    },
  	{
      "name": "Comparative Literature 358",
      "type": "Literature",
      "description": "Comparative study of the nature and substance of genre distinctions; relations between genre and mode in diverse literatures; critical analysis of texts in the context of literary distinctions of genre and mode.",
      "credits": 3.00,
      "enrolled": 13,
      "seats": 20,
      "waitlist": 0
    },
    {
      "name": "Communication Arts 361",
      "type": ["Social Science", "Quantitative Reasoning B"],
      "description": "An introduction to social science research methods and statistical analyses applicable to the study of communication research and mass media effects.",
      "credits": 3.00,
      "enrolled": 68,
      "seats": 72,
      "waitlist": 0
    },
    {
      "name": "Information Systems 365",
      "type": "",
      "description": "Exploration of subject areas possibly to be introduced into the business curriculum.",
      "credits": 2.00,
      "enrolled": 25,
      "seats": 47,
      "waitlist": 0
    },
    {
      "name": "Computer Sciences 368",
      "type": "",
      "description": "Focuses on a specific language offered at one of three levels: beginner, intermediate, and advanced.",
      "credits": 1.00,
      "enrolled": 4,
      "seats": 50,
      "waitlist": 0
    },
    {
      "name": "Geography 370",
      "type": "Physical Science",
      "description": "A broad introduction to cartography emphasizing the theory and practice of map-making.",
      "credits": 4.00,
      "enrolled": 48,
      "seats": 48,
      "waitlist": 9
    },
    {
      "name": "Mathematics 375",
      "type": "Natural Science",
      "description": "Vector spaces and linear transformations, differential calculus of scalar and vector fields, determinants, eigenvalues and eigenvectors, multiple integrals, line integrals, and surface integrals.",
      "credits": 5.00,
      "enrolled": 210,
      "seats": 210,
      "waitlist": 7
    },
    {
      "name": "Computer Sciences 400",
      "type": "Natural Science",
      "description": "The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed.",
      "credits": 3.00,
      "enrolled": 489,
      "seats": 500,
      "waitlist": 20
    },
  	{
      "name": "Legal Studies 400",
      "type": "Social Science",
      "description": "Addresses a variety of issues linking various social sciences perspectives to the central themes of law and legal institutions.",
      "credits": 3.00,
      "enrolled": 140,
      "seats": 160,
      "waitlist": 0
    },
  	{
      "name": "Mathematics 415",
      "type": "Natural Science",
      "description": "An introduction to nonlinear dynamical systems including stability, bifurcations and chaos. The course will give underlying mathematical ideas, but emphasize applications from many scientific fields.",
      "credits": 3.00,
      "enrolled": 170,
      "seats": 170,
      "waitlist": 10
    },
  	{
      "name": "Sociology 421",
      "type": "Social Science",
      "description": "Factors and conditions that underlie disagreement about fundamental values which inform views and conceptualizations of deviance; their relation to personal and social maladjustment; deviant behavior across different social contexts.",
      "credits": 3.00,
      "enrolled": 80,
      "seats": 80,
      "waitlist": 16
    },
  	{
      "name": "Computer Sciences 544",
      "type": "Natural Science",
      "description": "Deploy and use distributed systems to store and analyze large datasets. Unstructured and structured approaches to storage will be covered.",
      "credits": 3.00,
      "enrolled": 600,
      "seats": 600,
      "waitlist": 116
    },
    {
      "name": "Computer Sciences 577",
      "type": "Natural Science",
      "description": "Basic paradigms for the design and analysis of efficient algorithms: greed, divide-and-conquer, dynamic programming, reductions, and the use of randomness.",
      "credits": 4.00,
      "enrolled": 429,
      "seats": 429,
      "waitlist": 163
    }
]
`
const template = `
{
  "name": "",
  "type": "",
  "description": "",
  "credits": 0,
  "enrolled": 0,
  "seats": 0,
  "waitlist": 0
},
`

export default courses;