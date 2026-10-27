// Editorial revision from Lizbeth's October 2026 notes. Loaded after details.js.
const revision = {
  en: {
    ui: {
      navHome:'Home',navActivities:'Activities',
      heroTitle:'I design and validate <em>embedded systems</em>, IoT and computer vision.',
      heroLead:'I combine electronics, software and applied AI in prototypes, research and industrial engineering work.',
      heroCaption:'Engineering in Peru and France · research in Canada.',
      aboutIntro:'I am <strong>Lizbeth Alexandra Torres Flores</strong>. I am currently pursuing the <strong>Diplôme d’ingénieur généraliste</strong> (Bac+5) at IMT Atlantique in France through a double-degree agreement with Universidad Nacional de Ingeniería (UNI) in Peru. I graduated from UNI in Electronic Engineering.',
      profileRole:'Diplôme d’ingénieur généraliste · Ingeniería Electrónica',profileLocation:'Brest / Rennes · France',
      educationNote:'',skillsNote:'',cvTitle:'My CV',cvBody:'Available in English, French and Spanish.',
      galleryUni:'Electronic engineering at UNI.',galleryAlberta:'Researcher at the University of Alberta.',galleryImt:'Ingénieur généraliste at IMT Atlantique.',
      activitiesTitle:'Leadership',activitiesNote:'Student representation and technical-community initiatives.',
      experienceNote:'Open a role to see its context, technical work, results and project photographs.',
      projectsNote:'A short introduction for each project. Open its page for the technical story and photographs.',
      resultLabel:'Results and validation',photoLabel:'Photographs and project material',
    },
    education: [
      {title:'Diplôme d’ingénieur généraliste (Bac+5) · Double degree',description:'Selected for the IMT Atlantique–UNI double-degree programme. In year two, I followed IoT and 5G for Industry 4.0. In year three, I am studying Embedded and Heterogeneous Systems, with practical work on Zynq-7000/ZedBoard, ARM, FPGA logic, AXI, Vivado/Vitis and Linux.'},
      {title:'Electronic Engineering',description:'At UNI, I studied electronic circuits, programming, digital systems and control. I applied that training by designing, programming and testing physical prototypes; my mathematics and engineering projects are presented separately in the Projects section.'}
    ],
    experience: [
      {context:'At Institut Pascal, I studied how to align road images taken with visible-light (VIS) and short-wave infrared (SWIR) cameras despite their different contrast and texture.',actions:['Contributed to a reproducible benchmark using the RASMD dataset: sunny, cloudy, rainy and snowy scenes, both VIS-to-SWIR and SWIR-to-VIS directions, and four complementary metrics.','Developed and evaluated Patch-MAGSAC++, which uses sparse matches from SuperPoint and LightGlue in image patches before global homography estimation with MAGSAC++; and RoMa-MIND, which combines dense RoMa matches with MIND-based multimodal refinement.','Automated experiments with Python, OpenCV, PyTorch and Makefile, and built a Streamlit platform for inspecting methods and results.'],result:'The two methods improved on comparison baselines under several conditions. Their strengths depend on weather, direction and metric; for example, RoMa-MIND achieved 3.43 px reprojection error for sunny SWIR-to-VIS versus 14.81 px for ORB/RANSAC. The benchmark platform makes the comparisons accessible.',tools:'Python · OpenCV · PyTorch · SuperPoint · LightGlue · MAGSAC++ · RoMa · MIND · Makefile · Streamlit'},
      {context:'In ABB Peru’s Process Industries division, I supported electrical-room and UPS engineering for industrial and mining projects in Peru and Colombia.',actions:['Produced DIALux lighting studies for electrical rooms, adapting calculations to each country’s electrical requirements.','Sized UPS batteries and chargers using IEEE 1115 and IEEE 485; created Python scripts to automate calculations and checks previously managed in Excel.','Prepared cable lists and electrical-room material lists using Autodesk Navisworks.'],result:'The lighting studies provided more precise, standards-aligned design information, while Python reduced the time required for battery and UPS sizing.',tools:'DIALux · Python · Excel · Autodesk Navisworks · IEEE 1115 / IEEE 485 · UPS'},
      {context:'During my research placement at the University of Alberta, I used Python for two engineering tasks: generating exam figures from variable inputs and migrating existing MATLAB code. I also contributed to exploratory work on urban solar-energy adoption.',actions:['Built parametric 2D and 3D figures in Python and Jupyter so exam inputs could generate corresponding visual outputs automatically.','Migrated existing MATLAB code to Python and adapted the tools for interactive use in MecSimCalc.'],result:'Automated the generation of exam figures and their use in MecSimCalc. The urban solar-adoption work produced preliminary results.',tools:'Python · Jupyter · MATLAB migration · 2D/3D visualization · MecSimCalc'},
      {context:'MMJ Smart Electronics develops custom embedded systems and practical electronics projects in Lima.',actions:['Built and tested ESP32 and STM32 prototypes; fabricated, soldered and checked PCBs; integrated GPS, position and orientation modules.','Helped validate a Peruvian PLC prototype, measurement systems and electrical-cabinet assembly.','Within the internship, wrote board manuals and IoT training materials and helped deliver electronics and IoT workshops.'],result:'Delivered tested prototypes, hardware documentation and practical workshops as part of the embedded-systems internship.',tools:'ESP32 · STM32 · PCB · sensors · GPS · PLC · electrical cabinets · IoT'},
      {context:'At UNI’s Smart City Lab, I developed electronics, robotics and computer-vision prototypes.',actions:['Implemented an autonomous line-following robot with a camera, Raspberry Pi and OpenCV, then tested it on a physical route.','Designed and simulated a 16-servo bipedal humanoid with SolidWorks Motion and programmed its gait.','Worked on an EMG-controlled, 3D-printed transradial prosthesis using MATLAB and Python for signal processing.'],result:'The prototypes were tested in the lab; the prosthesis was presented at the College of Engineers of Peru’s international engineering-for-health congress.',tools:'Raspberry Pi · OpenCV · SolidWorks Motion · Arduino · EMG · MATLAB · Python'}
    ],
    projects: {
      'vis-swir':{description:'A reproducible VIS–SWIR road-image registration benchmark across four weather conditions, two directions and four metrics. I worked on sparse Patch-MAGSAC++ and dense RoMa-MIND methods and an interactive results platform.',context:'Visible and short-wave infrared cameras capture complementary road information, but their images must be aligned before comparison or fusion. The benchmark uses the RASMD data, with sunny, cloudy, rainy and snowy scenes.',work:'I contributed to the common evaluation protocol, automated global homography experiments, worked on Patch-MAGSAC++ (sparse patch matches with SuperPoint, LightGlue and MAGSAC++) and RoMa-MIND (dense RoMa matches refined with MIND), and developed the Streamlit interface. The evaluation checks GOA, EDGA, MIND-SSD and feature-based reprojection error in both directions.',result:'Both proposed methods improve on baselines in several tasks, with different advantages by weather, direction and metric. Sunny SWIR-to-VIS reprojection error was 3.43 px for RoMa-MIND versus 14.81 px for ORB/RANSAC; no single method dominates every task.'},
      'eco4impact':{description:'A shared Python total-cost-of-ownership core for Eco4Impact truck fleets and EcoBoatTwin maritime scenarios. My main contribution covered the data structure, JSON inputs and residual-value formulas.',work:'I structured the model’s input data and JSON configuration for vehicles, missions, energy and geography; implemented residual-value formulas; and contributed to the modular calculation core shared with the EcoBoatTwin team.'},
      'voice-ai':{description:'Voice-operated LED control on EFR32MG24: audio capture, MFCC feature preparation, on-device inference and hardware validation with Micrium OS.',work:'I prepared MFCC features with Edge Impulse, integrated the inference model and audio pipeline in C/C++ with TensorFlow Lite Micro under Micrium OS, and verified the command-to-LED response on the board.'},
      'lane-keeping':{title:'Autonomous line-following robot',description:'Camera-based line detection and autonomous following on Raspberry Pi with OpenCV, validated on a physical route.',context:'The goal was for a small vehicle to follow a marked line using only its camera and on-board processing.',work:'We connected a camera to Raspberry Pi, processed live frames with OpenCV to locate the line and used the detected path to control the robot. I worked on the image-processing and testing workflow documented in the project report.',result:'The physical robot followed the test route in the controlled environment.'},
      'least-squares':{type:'APPLIED MATHEMATICS · 2020-I',description:'Studied least-squares fitting, its statistical interpretation and applications to data modelling in a UNI Faculty of Sciences mathematics project.',result:'Presented the method and its applications at the UNI Faculty of Sciences 2020-I project fair.'},
      'graph-timetable':{type:'MATHEMATICS & SOFTWARE · 2020-II',description:'Modelled timetable conflicts as a graph and generated compatible course schedules through graph colouring; second place at the UNI Faculty of Sciences 2020-II contest.'}
    },
    skills: [
      ['Programming and reproducible work','Python, C/C++, MATLAB and VHDL; Git, Linux, Jupyter, Makefile, JSON and Streamlit. Used for embedded code, migration, data modelling and repeatable experiments.','VIS–SWIR · Eco4Impact · Alberta · FPGA'],
      ['Embedded systems and digital hardware','ESP32, STM32, EFR32MG24, Raspberry Pi, Arduino and FPGA; Micrium OS, Vivado and hardware tests. Zynq-7000 and Linux boot are current coursework.','Voice control · MMJ · 8-bit CPU · traffic lights'],
      ['Computer vision and applied AI','OpenCV, PyTorch, SuperPoint, LightGlue, MAGSAC++, RoMa, MIND and TensorFlow Lite Micro; image registration, homographies, MFCC features and on-device inference.','VIS–SWIR · line follower · voice control'],
      ['IoT, sensors and communication','Sensor integration, LoRaWAN, GSM, MQTT and Ubidots; familiarity with I2C, SPI, Modbus and RS485. Contiki-NG security is ongoing project work.','Vital-sign monitor · MMJ · CEREBRO'],
      ['Industrial automation and electrical engineering','DIALux lighting studies, UPS battery sizing to IEEE 1115/485, Excel-to-Python automation, Autodesk Navisworks material/cable lists, PLC checks and PCB testing.','ABB Peru · MMJ'],
      ['Robotics and prototyping','SolidWorks Motion, CAD, 3D printing, servo control and EMG signal processing for physical prototypes.','Humanoid · prosthesis · line follower'],
      ['Technical communication and research','Experimental evaluation, method comparison, technical documentation, engineering presentations and international teamwork.','Institut Pascal · Alberta · IEEE EMBS'],
      ['Languages','Spanish (native), French (B2) and English (B2).','Work and study in Peru, France and Canada']
    ]
  },
  fr: {
    ui: {
      navHome:'Accueil',navActivities:'Activités',
      heroTitle:'Je conçois et valide des <em>systèmes embarqués</em>, l’IoT et la vision par ordinateur.',
      heroLead:'Je relie électronique, logiciel et IA appliquée dans des prototypes, travaux de recherche et projets industriels.',
      heroCaption:'Ingénierie au Pérou et en France · recherche au Canada.',
      aboutIntro:'Je suis <strong>Lizbeth Alexandra Torres Flores</strong>. Je prépare actuellement le <strong>Diplôme d’ingénieur généraliste</strong> (Bac+5) à IMT Atlantique, en France, dans le cadre d’un double diplôme avec l’Universidad Nacional de Ingeniería (UNI), au Pérou. Je suis diplômée en génie électronique de l’UNI.',
      profileRole:'Diplôme d’ingénieur généraliste · Ingeniería Electrónica',profileLocation:'Brest / Rennes · France',
      educationNote:'',skillsNote:'',cvTitle:'Mon CV',cvBody:'Disponible en anglais, français et espagnol.',
      galleryUni:'Génie électronique à l’UNI.',galleryAlberta:'Chercheuse à l’Université de l’Alberta.',galleryImt:'Ingénieur généraliste à IMT Atlantique.',
      activitiesTitle:'Engagement',activitiesNote:'Représentation étudiante et communautés techniques.',
      experienceNote:'Ouvrez une expérience pour découvrir le contexte, le travail technique, les résultats et les photographies.',
      projectsNote:'Une introduction courte par projet ; ouvrez sa fiche pour voir le travail et les images.',
      resultLabel:'Résultats et validation',photoLabel:'Photographies et documents du projet',
    },
    education: [
      {title:'Diplôme d’ingénieur généraliste (Bac+5) · Double diplôme',description:'Sélectionnée pour le double diplôme IMT Atlantique–UNI. En deuxième année, j’ai suivi IoT et 5G pour l’Industrie 4.0. En troisième année, je suis le parcours Systèmes embarqués et hétérogènes, avec des travaux pratiques sur Zynq-7000/ZedBoard, ARM, FPGA, AXI, Vivado/Vitis et Linux.'},
      {title:'Génie électronique',description:'À l’UNI, j’ai étudié les circuits électroniques, la programmation, les systèmes numériques et le contrôle. J’ai mis ces connaissances en pratique en concevant, programmant et testant des prototypes ; mes projets de mathématiques et d’ingénierie sont présentés séparément dans la rubrique Projets.'}
    ],
    experience: [
      {context:'À l’Institut Pascal, j’ai étudié le recalage d’images routières prises en lumière visible (VIS) et en infrarouge à ondes courtes (SWIR), malgré leurs différences de texture et de contraste.',actions:['Contribution à un benchmark reproductible sur le jeu de données RASMD : scènes ensoleillées, nuageuses, pluvieuses et enneigées, deux sens de recalage et quatre métriques complémentaires.','Développement et évaluation de Patch-MAGSAC++, fondé sur des correspondances dispersées SuperPoint/LightGlue par régions et une homographie MAGSAC++, et de RoMa-MIND, qui associe correspondances denses RoMa et raffinement multimodal MIND.','Automatisation des expériences avec Python, OpenCV, PyTorch et Makefile, puis création d’une plateforme Streamlit de consultation des méthodes et résultats.'],result:'Les deux méthodes surpassent plusieurs références selon la tâche ; leurs avantages varient avec la météo, le sens et la métrique. Par exemple, en SWIR vers VIS sous soleil, RoMa-MIND obtient 3,43 px d’erreur de reprojection contre 14,81 px pour ORB/RANSAC. La plateforme rend les comparaisons accessibles.',tools:'Python · OpenCV · PyTorch · SuperPoint · LightGlue · MAGSAC++ · RoMa · MIND · Makefile · Streamlit'},
      {context:'Dans la division Process Industries d’ABB Pérou, j’ai participé à l’ingénierie de salles électriques et de systèmes UPS pour des projets industriels et miniers au Pérou et en Colombie.',actions:['Études d’éclairage sous DIALux adaptées aux exigences électriques de chaque pays.','Dimensionnement de batteries et chargeurs UPS selon IEEE 1115 et IEEE 485 ; scripts Python automatisant calculs et vérifications auparavant réalisés dans Excel.','Préparation de listes de câbles et de matériaux de salles électriques avec Autodesk Navisworks.'],result:'Les études ont apporté une conception d’éclairage plus précise et conforme aux normes locales ; Python a réduit le temps nécessaire au dimensionnement des batteries et UPS.',tools:'DIALux · Python · Excel · Autodesk Navisworks · IEEE 1115 / IEEE 485 · UPS'},
      {context:'Lors de mon séjour de recherche à l’Université de l’Alberta, j’ai utilisé Python pour deux travaux d’ingénierie : générer des figures d’examen à partir de paramètres variables et migrer du code MATLAB existant. J’ai également contribué à une étude exploratoire sur l’adoption de l’énergie solaire en ville.',actions:['Création de figures paramétrées en 2D et 3D avec Python et Jupyter, générées automatiquement à partir des données de chaque examen.','Migration de code MATLAB vers Python et adaptation des outils pour une utilisation interactive dans MecSimCalc.'],result:'Génération des figures d’examen et utilisation dans MecSimCalc automatisées. L’étude sur l’énergie solaire urbaine a produit des résultats préliminaires.',tools:'Python · Jupyter · migration MATLAB · visualisation 2D/3D · MecSimCalc'},
      {context:'MMJ Smart Electronics développe des systèmes embarqués sur mesure et des projets pratiques d’électronique à Lima.',actions:['Conception et tests de prototypes ESP32/STM32 ; fabrication, soudure et contrôle de PCB ; intégration de GPS et de modules de position et d’orientation.','Vérification d’un prototype d’automate péruvien, de dispositifs de mesure et d’armoires électriques.','Dans le stage, rédaction de manuels et supports IoT, puis participation à des ateliers d’électronique et d’IoT.'],result:'Prototypes testés, documentation matérielle et ateliers pratiques réalisés au sein de l’équipe embarquée.',tools:'ESP32 · STM32 · PCB · capteurs · GPS · automate · armoires électriques · IoT'},
      {context:'Au Smart City Lab de l’UNI, j’ai développé des prototypes en électronique, robotique et vision par ordinateur.',actions:['Robot suiveur de ligne autonome avec caméra, Raspberry Pi et OpenCV, testé sur un parcours physique.','Conception et simulation d’un humanoïde bipède à 16 servomoteurs sous SolidWorks Motion, puis programmation de la marche.','Contribution à une prothèse transradiale imprimée en 3D et commandée par EMG, avec traitement de signaux sous MATLAB et Python.'],result:'Les prototypes ont été testés au laboratoire ; la prothèse a été présentée au congrès international d’ingénierie pour la santé du Collège des ingénieurs du Pérou.',tools:'Raspberry Pi · OpenCV · SolidWorks Motion · Arduino · EMG · MATLAB · Python'}
    ],
    projects: {
      'vis-swir':{description:'Benchmark reproductible de recalage VIS–SWIR : quatre conditions météo, deux sens, quatre métriques, méthodes Patch-MAGSAC++ et RoMa-MIND et plateforme interactive.',context:'Les caméras visibles et SWIR fournissent des informations complémentaires sur la route, mais leurs images doivent être recalées pour être comparées ou fusionnées. Le benchmark utilise RASMD sous soleil, nuages, pluie et neige.',work:'J’ai contribué au protocole commun, automatisé des expériences d’homographie globale, travaillé sur Patch-MAGSAC++ (appariements dispersés avec SuperPoint, LightGlue et MAGSAC++) et RoMa-MIND (appariements denses RoMa et raffinement MIND), et développé l’interface Streamlit. L’évaluation mesure GOA, EDGA, MIND-SSD et erreur de reprojection dans les deux sens.',result:'Les deux méthodes améliorent plusieurs références, avec des avantages variables selon météo, sens et métrique. Sous soleil en SWIR vers VIS, RoMa-MIND atteint 3,43 px contre 14,81 px pour ORB/RANSAC ; aucune méthode ne domine toutes les tâches.'},
      'eco4impact':{description:'Noyau Python de coût total de possession partagé entre Eco4Impact (camions) et EcoBoatTwin (maritime). Ma contribution principale porte sur les données, les entrées JSON et les formules de valeur résiduelle.',work:'J’ai structuré les données d’entrée et la configuration JSON des véhicules, missions, énergies et pays ; implémenté les formules de valeur résiduelle ; et contribué au noyau de calcul modulaire partagé avec l’équipe EcoBoatTwin.'},
      'voice-ai':{description:'Commande vocale de LED sur EFR32MG24 : acquisition audio, caractéristiques MFCC, inférence embarquée et validation sous Micrium OS.',work:'J’ai préparé les caractéristiques MFCC avec Edge Impulse, intégré le modèle et la chaîne audio en C/C++ avec TensorFlow Lite Micro sous Micrium OS, puis vérifié la réponse de la LED sur carte.'},
      'lane-keeping':{title:'Robot suiveur de ligne autonome',description:'Détection et suivi d’une ligne par caméra sur Raspberry Pi avec OpenCV, validés sur un parcours physique.',context:'Le but était qu’un petit véhicule suive une ligne tracée grâce à sa caméra et à un traitement embarqué.',work:'Une caméra reliée au Raspberry Pi fournit les images traitées par OpenCV pour localiser la ligne et piloter le robot. J’ai participé au traitement d’images et aux essais documentés dans le rapport.',result:'Le robot physique a suivi le parcours d’essai en environnement contrôlé.'},
      'least-squares':{type:'MATHÉMATIQUES APPLIQUÉES · 2020-I',description:'Étude de l’ajustement par les moindres carrés, de son interprétation statistique et de ses applications dans un projet de la Faculté des sciences de l’UNI.',result:'Méthode et applications présentées à la foire de projets de la Faculté des sciences de l’UNI en 2020-I.'},
      'graph-timetable':{type:'MATHÉMATIQUES ET LOGICIEL · 2020-II',description:'Modélisation des conflits horaires par graphe et génération d’emplois du temps compatibles par coloration ; deuxième place au concours UNI 2020-II.'}
    },
    skills: [
      ['Programmation et reproductibilité','Python, C/C++, MATLAB et VHDL ; Git, Linux, Jupyter, Makefile, JSON et Streamlit. Logiciel embarqué, migration, modèles de données et expériences reproductibles.','VIS–SWIR · Eco4Impact · Alberta · FPGA'],
      ['Systèmes embarqués et matériel numérique','ESP32, STM32, EFR32MG24, Raspberry Pi, Arduino et FPGA ; Micrium OS, Vivado et essais sur carte. Zynq-7000 et Linux font partie du cursus actuel.','Commande vocale · MMJ · CPU 8 bits · feux'],
      ['Vision par ordinateur et IA appliquée','OpenCV, PyTorch, SuperPoint, LightGlue, MAGSAC++, RoMa, MIND et TensorFlow Lite Micro ; recalage, homographies, MFCC et inférence sur cible.','VIS–SWIR · suiveur de ligne · commande vocale'],
      ['IoT, capteurs et communications','Intégration de capteurs, LoRaWAN, GSM, MQTT et Ubidots ; notions d’I2C, SPI, Modbus et RS485. La sécurité Contiki-NG relève d’un projet en cours.','Moniteur de signes vitaux · MMJ · CEREBRO'],
      ['Automatisation industrielle et électricité','Études DIALux, dimensionnement UPS selon IEEE 1115/485, automatisation Excel vers Python, listes de matériaux et câbles sous Navisworks, contrôles d’automates et PCB.','ABB Pérou · MMJ'],
      ['Robotique et prototypage','SolidWorks Motion, CAO, impression 3D, servomoteurs et traitement EMG pour prototypes physiques.','Humanoïde · prothèse · suiveur de ligne'],
      ['Communication technique et recherche','Évaluation expérimentale, comparaison de méthodes, documentation technique, présentations d’ingénierie et travail international.','Institut Pascal · Alberta · IEEE EMBS'],
      ['Langues','Espagnol (langue maternelle), français (B2) et anglais (B2).','Travaux et études au Pérou, en France et au Canada']
    ]
  },
  es: {
    ui: {
      navHome:'Inicio',navActivities:'Actividades',
      heroTitle:'Diseño y valido <em>sistemas embebidos</em>, IoT y visión por computadora.',
      heroLead:'Combino electrónica, software e IA aplicada en prototipos, investigación y proyectos de ingeniería industrial.',
      heroCaption:'Ingeniería en Perú y Francia · investigación en Canadá.',
      aboutIntro:'Soy <strong>Lizbeth Alexandra Torres Flores</strong>. Actualmente curso en IMT Atlantique, Francia, el <strong>Diplôme d’ingénieur généraliste</strong> (Bac+5) mediante un programa de doble titulación con la Universidad Nacional de Ingeniería (UNI), Perú. Soy ingeniera electrónica de la UNI.',
      profileRole:'Diplôme d’ingénieur généraliste · Ingeniería Electrónica',profileLocation:'Brest / Rennes · Francia',
      educationNote:'',skillsNote:'',cvTitle:'Mi CV',cvBody:'Disponible en inglés, francés y español.',
      galleryUni:'Ingeniería electrónica en la UNI.',galleryAlberta:'Investigadora en la Universidad de Alberta.',galleryImt:'Ingénieur généraliste en IMT Atlantique.',
      activitiesTitle:'Liderazgo',activitiesNote:'Representación estudiantil y comunidades técnicas.',
      experienceNote:'Abre cada experiencia para conocer el contexto, el trabajo técnico, los resultados y las fotografías.',
      projectsNote:'Cada proyecto tiene un resumen; abre su ficha para ver el trabajo y las imágenes.',
      resultLabel:'Resultados y validación',photoLabel:'Fotografías y material del proyecto',
    },
    education: [
      {title:'Diplôme d’ingénieur généraliste (Bac+5) · Doble titulación',description:'Seleccionada para la doble titulación IMT Atlantique–UNI. En segundo año cursé IoT y 5G para la Industria 4.0. En tercer año curso Sistemas Embebidos y Heterogéneos, con prácticas en Zynq-7000/ZedBoard, ARM, FPGA, AXI, Vivado/Vitis y Linux.'},
      {title:'Ingeniería Electrónica',description:'En la UNI estudié circuitos electrónicos, programación, sistemas digitales y control. Apliqué esa formación al diseñar, programar y probar prototipos; mis proyectos de matemáticas e ingeniería se explican por separado en la sección Proyectos.'}
    ],
    experience: [
      {context:'En el Institut Pascal estudié el registro de imágenes de carretera captadas con cámaras de luz visible (VIS) e infrarrojo de onda corta (SWIR), pese a sus diferencias de textura y contraste.',actions:['Contribuí a un benchmark reproducible con el conjunto RASMD: escenas soleadas, nubladas, lluviosas y nevadas; registro VIS a SWIR y SWIR a VIS; cuatro métricas complementarias.','Desarrollé y evalué Patch-MAGSAC++, que obtiene correspondencias dispersas con SuperPoint y LightGlue por regiones antes de estimar una homografía con MAGSAC++, y RoMa-MIND, que combina correspondencias densas RoMa con refinamiento multimodal MIND.','Automaticé experimentos con Python, OpenCV, PyTorch y Makefile, y desarrollé una plataforma Streamlit para explorar los métodos y resultados.'],result:'Los dos métodos mejoraron referencias comparativas en diversas tareas. Sus ventajas cambian según clima, dirección y métrica; por ejemplo, RoMa-MIND obtuvo 3,43 px de error de reproyección en SWIR a VIS soleado frente a 14,81 px de ORB/RANSAC. La plataforma facilita la consulta de las comparaciones.',tools:'Python · OpenCV · PyTorch · SuperPoint · LightGlue · MAGSAC++ · RoMa · MIND · Makefile · Streamlit'},
      {context:'En Process Industries de ABB Perú participé en la ingeniería de salas eléctricas y sistemas UPS para proyectos industriales y mineros de Perú y Colombia.',actions:['Realicé estudios de iluminación de salas eléctricas con DIALux, adaptando los cálculos a las normas de cada país.','Dimensioné baterías y cargadores UPS según IEEE 1115 e IEEE 485; programé scripts Python para automatizar cálculos y verificaciones antes realizados en Excel.','Preparé listas de cables y materiales de salas eléctricas con Autodesk Navisworks.'],result:'Los estudios aportaron mayor precisión y cumplimiento de los requisitos eléctricos locales; la automatización en Python redujo el tiempo de dimensionamiento de baterías y UPS.',tools:'DIALux · Python · Excel · Autodesk Navisworks · IEEE 1115 / IEEE 485 · UPS'},
      {context:'Durante mi estancia de investigación en la Universidad de Alberta trabajé en dos aplicaciones de Python para ingeniería: generar figuras de examen a partir de parámetros variables y migrar código existente de MATLAB. También colaboré en un estudio exploratorio sobre la adopción de energía solar en entornos urbanos.',actions:['Generé figuras paramétricas 2D y 3D con Python y Jupyter para que las entradas de cada examen produjeran automáticamente las imágenes correspondientes.','Migré código existente de MATLAB a Python y adapté las herramientas para su uso interactivo en MecSimCalc.'],result:'Automaticé la generación de figuras para los exámenes y su uso en MecSimCalc. El estudio sobre energía solar urbana produjo resultados preliminares.',tools:'Python · Jupyter · migración MATLAB · visualización 2D/3D · MecSimCalc'},
      {context:'MMJ Smart Electronics desarrolla sistemas embebidos a medida y proyectos prácticos de electrónica en Lima.',actions:['Diseñé y probé prototipos ESP32/STM32; fabriqué, soldé y revisé PCB; integré GPS y módulos de posición y orientación.','Ayudé a validar un prototipo de PLC peruano, dispositivos de medición y el armado de armarios eléctricos.','Dentro de las prácticas, elaboré manuales y materiales IoT y colaboré en talleres de electrónica e IoT.'],result:'Entregué prototipos probados, documentación de hardware y talleres prácticos como parte de las prácticas de sistemas embebidos.',tools:'ESP32 · STM32 · PCB · sensores · GPS · PLC · armarios eléctricos · IoT'},
      {context:'En Smart City Lab de la UNI desarrollé prototipos de electrónica, robótica y visión por computadora.',actions:['Implementé un robot seguidor de línea autónomo con cámara, Raspberry Pi y OpenCV, y lo probé en una ruta física.','Diseñé y simulé un humanoide bípedo de 16 servomotores con SolidWorks Motion y programé su marcha.','Trabajé en una prótesis transradial impresa en 3D y controlada con EMG, procesando señales en MATLAB y Python.'],result:'Los prototipos se probaron en el laboratorio; la prótesis se presentó en el congreso internacional de ingeniería para la salud del Colegio de Ingenieros del Perú.',tools:'Raspberry Pi · OpenCV · SolidWorks Motion · Arduino · EMG · MATLAB · Python'}
    ],
    projects: {
      'vis-swir':{description:'Benchmark reproducible de registro VIS–SWIR en cuatro climas, dos direcciones y cuatro métricas; métodos Patch-MAGSAC++ y RoMa-MIND y plataforma interactiva.',context:'Las cámaras visible y SWIR ofrecen información complementaria de la carretera, pero sus imágenes deben alinearse antes de compararlas o fusionarlas. El benchmark usa RASMD con sol, nubes, lluvia y nieve.',work:'Contribuí al protocolo de evaluación, automaticé experimentos de homografía global, trabajé en Patch-MAGSAC++ (correspondencias dispersas por regiones con SuperPoint, LightGlue y MAGSAC++) y RoMa-MIND (correspondencias densas RoMa refinadas con MIND), y desarrollé la interfaz Streamlit. La evaluación mide GOA, EDGA, MIND-SSD y error de reproyección en ambas direcciones.',result:'Ambos métodos mejoraron referencias en varias tareas, con ventajas distintas según clima, dirección y métrica. En SWIR a VIS soleado, RoMa-MIND alcanzó 3,43 px frente a 14,81 px de ORB/RANSAC; ningún método domina todas las tareas.'},
      'eco4impact':{description:'Núcleo Python de costo total de propiedad compartido por Eco4Impact (camiones) y EcoBoatTwin (marítimo). Mi aporte principal fue la estructura de datos, entradas JSON y fórmulas de valor residual.',work:'Estructuré datos de entrada y configuración JSON para vehículos, misiones, energía y país; desarrollé fórmulas del valor residual; y contribuí al núcleo modular de cálculo compartido con EcoBoatTwin.'},
      'voice-ai':{description:'Control de LED mediante voz en EFR32MG24: captura de audio, características MFCC, inferencia embebida y validación con Micrium OS.',work:'Preparé características MFCC con Edge Impulse, integré el modelo y flujo de audio en C/C++ con TensorFlow Lite Micro bajo Micrium OS y comprobé la respuesta del LED en la placa.'},
      'lane-keeping':{title:'Robot seguidor de línea autónomo',description:'Detección y seguimiento de línea por cámara en Raspberry Pi con OpenCV, validados en una ruta física.',context:'El objetivo era que un vehículo pequeño siguiera una línea trazada mediante su cámara y procesamiento a bordo.',work:'Una cámara conectada a Raspberry Pi captura imágenes procesadas con OpenCV para localizar la línea y controlar el robot. Participé en el procesamiento de imágenes y las pruebas documentadas en el informe.',result:'El robot físico siguió la ruta de ensayo en un entorno controlado.'},
      'least-squares':{type:'MATEMÁTICAS APLICADAS · 2020-I',description:'Estudio del ajuste por mínimos cuadrados, su interpretación estadística y aplicaciones de modelado de datos en un proyecto de la Facultad de Ciencias de la UNI.',result:'Presenté el método y sus aplicaciones en la feria de proyectos de la Facultad de Ciencias de la UNI en 2020-I.'},
      'graph-timetable':{type:'MATEMÁTICAS Y SOFTWARE · 2020-II',description:'Modelé conflictos de horario como un grafo y generé horarios compatibles mediante coloración; segundo puesto en el concurso UNI 2020-II.'}
    },
    skills: [
      ['Programación y trabajo reproducible','Python, C/C++, MATLAB y VHDL; Git, Linux, Jupyter, Makefile, JSON y Streamlit. Software embebido, migración, datos y experimentos reproducibles.','VIS–SWIR · Eco4Impact · Alberta · FPGA'],
      ['Sistemas embebidos y hardware digital','ESP32, STM32, EFR32MG24, Raspberry Pi, Arduino y FPGA; Micrium OS, Vivado y pruebas en placa. Zynq-7000 y Linux forman parte de la formación actual.','Control por voz · MMJ · CPU de 8 bits · semáforo'],
      ['Visión por computadora e IA aplicada','OpenCV, PyTorch, SuperPoint, LightGlue, MAGSAC++, RoMa, MIND y TensorFlow Lite Micro; registro, homografías, MFCC e inferencia en el dispositivo.','VIS–SWIR · seguidor de línea · control por voz'],
      ['IoT, sensores y comunicaciones','Integración de sensores, LoRaWAN, GSM, MQTT y Ubidots; nociones de I2C, SPI, Modbus y RS485. La seguridad Contiki-NG pertenece a un proyecto en curso.','Monitor de signos vitales · MMJ · CEREBRO'],
      ['Automatización industrial e ingeniería eléctrica','Estudios DIALux, dimensionamiento UPS según IEEE 1115/485, automatización Excel a Python, listas de cables y materiales en Navisworks, pruebas de PLC y PCB.','ABB Perú · MMJ'],
      ['Robótica y prototipado','SolidWorks Motion, CAD, impresión 3D, control de servomotores y procesamiento EMG para prototipos físicos.','Humanoide · prótesis · seguidor de línea'],
      ['Comunicación técnica e investigación','Evaluación experimental, comparación de métodos, documentación técnica, presentaciones de ingeniería y trabajo internacional.','Institut Pascal · Alberta · IEEE EMBS'],
      ['Idiomas','Español (nativo), francés (B2) e inglés (B2).','Trabajo y formación en Perú, Francia y Canadá']
    ]
  }
};

const projectMedia = {
  'vis-swir':['vis-overlay.jpg','vis-methods.jpg'],
  'cerebro':['cerebro.jpg'],
  'eco4impact':['eco-poster.jpg'],
  'voice-ai':['voice-dashboard.jpg','voice-mfcc-parameters.jpg','voice-mfcc-features.jpg'],
  'cpu8bits':['cpu8bits.jpg'],
  'traffic-light':['semaforo.jpg'],
  'vital-signs':['vitals-device.jpg','vitals-dashboard.jpg'],
  'bionic-prosthesis':['prosthesis-project.jpg','cip-stage.jpg'],
  'humanoid':['humanoid.jpg','smart-humanoid.jpg'],
  'lane-keeping':['smart-line-robot.jpg','smart-line-camera.jpg'],
  'graph-timetable':['graph-diagram.jpg'],
  'least-squares':['least-squares-plot.jpg']
};
const experienceMedia = [
  ['vis-overlay.jpg','vis-methods.jpg'],
  ['abb-experience.jpg'],
  ['alberta-work.jpg','alberta-certificate.jpg'],
  ['mmj-practice.jpg','mmj-cabinet.jpg'],
  ['smart-line-robot.jpg','smart-prosthesis.jpg','smart-humanoid.jpg']
];
const talkMedia = [
  ['talk-eeg.jpg','talk-eeg-post.jpg'],
  ['talk-ict.jpg'],
  ['cip-stage.jpg','talk-cip-diploma.jpg']
];
const activityMedia = [
  ['activity-ieee.jpg'],
  ['activity-rep.jpg'],
  ['talk-ict.jpg'],
  ['airbus-certificate.png']
];
const trainingLogos = ['logo-senati.png','logo-ctic.png','logo-mmj.png','logo-abb.png','logo-platzi.png'];
const captions = {
  en:{
    'vis-swir':['Visible, SWIR and aligned images from RASMD; the overlay illustrates Patch-MAGSAC++.','MIND-SSD comparison across registration methods.'],
    'voice-ai':['Voice-command dashboard.','MFCC configuration.','Generated MFCC features.'],
    'vital-signs':['Vital-sign monitoring prototype.','Ubidots measurement dashboard.'],
    'lane-keeping':['Physical line-following robot.','Camera view of the test route.'],
    'graph-timetable':['Graph-colouring diagrams from the project report.'],
    'least-squares':['Project poster from the 2020-I UNI mathematics fair.']
  },
  fr:{
    'vis-swir':['Images VIS, SWIR et recalées de RASMD ; la superposition illustre Patch-MAGSAC++.','Comparaison MIND-SSD des méthodes de recalage.'],
    'voice-ai':['Interface de commande vocale.','Configuration MFCC.','Caractéristiques MFCC générées.'],
    'vital-signs':['Prototype de mesure des signes vitaux.','Tableau de bord Ubidots.'],
    'lane-keeping':['Robot suiveur de ligne physique.','Vue caméra du parcours de test.'],
    'graph-timetable':['Graphes colorés extraits du rapport de projet.'],
    'least-squares':['Poster du projet à la foire de mathématiques UNI 2020-I.']
  },
  es:{
    'vis-swir':['Imágenes VIS, SWIR y alineadas de RASMD; la superposición ilustra Patch-MAGSAC++.','Comparación MIND-SSD de métodos de registro.'],
    'voice-ai':['Dashboard de comandos de voz.','Configuración MFCC.','Características MFCC generadas.'],
    'vital-signs':['Prototipo del monitor de signos vitales.','Dashboard de mediciones en Ubidots.'],
    'lane-keeping':['Robot seguidor de línea físico.','Vista de la cámara en la ruta de ensayo.'],
    'graph-timetable':['Grafos coloreados extraídos del informe del proyecto.'],
    'least-squares':['Póster del proyecto en la feria de matemáticas UNI 2020-I.']
  }
};

for (const lang of ['en','fr','es']) {
  const c = copy[lang];
  const next = revision[lang];
  Object.assign(c, next.ui);
  c.education.forEach((item,i) => Object.assign(item,next.education[i]));
  c.experience.forEach((item,i) => {
    Object.assign(item,next.experience[i]);
    item.images = experienceMedia[i].map((name,index) => ({src:'assets/'+name,caption:item.title+' · '+(index+1)}));
  });
  c.projects = c.projects.filter(item => item.id !== 'zynq-labs');
  c.projects.forEach(item => {
    Object.assign(item,next.projects[item.id] || {});
    const names = projectMedia[item.id];
    if (names) {
      item.images = names.map((name,index) => ({src:'assets/'+name,caption:(captions[lang][item.id] || [])[index] || item.title}));
      item.image = item.images[0].src;
      item.imageAlt = item.images[0].caption;
    }
    if (item.id === 'voice-ai') item.links = [['Edge Impulse','https://studio.edgeimpulse.com/public/884075/live']];
  });
  c.skills = next.skills.map(([title,detail,examples]) => ({title,detail,examples}));
  c.activities = c.activities.slice(0,4);
  c.activities.forEach((item,i) => {item.images = activityMedia[i].map(name => ({src:'assets/'+name,caption:item.title}));});
  c.talkImages = talkMedia.map((names,i) => names.map(name => ({src:'assets/'+name,caption:[c.talkTitle,c.wieTitle,c.cipTitle][i]})));
  c.training.forEach((item,i) => {item.logo='assets/'+trainingLogos[i];});
}
