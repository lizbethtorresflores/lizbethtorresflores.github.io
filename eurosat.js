// EuroSAT is added after the existing content revisions and before page rendering.
(() => {
  const repository = 'https://github.com/lizbethtorresflores/eurosat-land-cover-classification';
  const colab = 'https://colab.research.google.com/github/lizbethtorresflores/eurosat-land-cover-classification/blob/main/projet_a_eurosat_g1_COMPLET_FR.ipynb';
  const translations = {
    en: {
      type: 'REMOTE SENSING · 2026',
      title: 'EuroSAT · Multispectral land cover classification',
      description: 'Classifying ten land cover classes from Sentinel-2 images using 26 spectral statistics and Random Forest. Spatial test: 84.15% accuracy and 0.836 macro F1.',
      context: 'This academic team project uses 27,000 EuroSAT satellite image patches to predict one of ten land cover classes. Each 64 × 64-pixel patch contains 13 spectral bands. We built on a course notebook to study supervised learning with a geographic evaluation protocol.',
      work: 'In this team study, we explored the images, checked exact duplicates and extracted the mean and standard deviation of each band. We combined StandardScaler with a 200-tree Random Forest, compared four configurations on validation, then refitted the pipeline on training and validation data. We examined permutation importance and classification errors.',
      result: 'On the 5,528 spatial test patches, the model obtained 84.15% accuracy and 0.836 macro F1. A majority-class baseline obtained 10.35% accuracy. The 95% macro F1 interval was [0.786, 0.865], estimated from 1,000 spatial-block bootstrap samples. The repository includes the notebook, recorded outputs, predictions and preprocessing parameters.',
      deepDive: [
        { title: 'Spatial evaluation', text: 'We used 50 km geographic blocks and a minimum 2 km distance between patch centers in different sets. After the buffer exclusions, the split contains 16,995 training, 4,144 validation and 5,528 test patches. The scaler is fitted on the data used for training at each stage, excluding the test set.' },
        { title: 'Errors and interpretation', text: 'SeaLake and Forest obtained the strongest F1 scores: 0.997 and 0.972. Highway was the most difficult class, with 0.596 F1. AnnualCrop and PermanentCrop were confused in 74 patches in each direction. Spectral statistics discard object geometry, which may contribute to these errors.' },
        { title: 'Scope and next steps', text: 'The prediction assigns one label to a whole patch. Results apply to this geographic split; transfer to another region or date needs independent evaluation. The test had already been consulted in an earlier evaluation, so the normalization rerun is not an independent validation. Future work could compare spectral indices, texture features and a convolutional network using a new final test.' }
      ],
      captions: ['EuroSAT examples: AnnualCrop, Forest and HerbaceousVegetation, displayed with adjusted contrast.', 'Accuracy and macro F1 with 95% intervals estimated by spatial-block bootstrap.', 'Test confusion matrices: counts and proportions within each true class.'],
      colabLabel: 'Open in Colab'
    },
    fr: {
      type: 'TÉLÉDÉTECTION · 2026',
      title: 'EuroSAT · Classification de l’occupation du sol',
      description: 'Classification de dix types d’occupation du sol à partir d’images Sentinel-2, avec 26 statistiques spectrales et une forêt aléatoire. Test spatial : 84,15 % d’accuracy et 0,836 de F1 macro.',
      context: 'Ce projet académique en groupe utilise 27 000 patches satellitaires EuroSAT pour prédire une classe d’occupation du sol parmi dix. Chaque patch de 64 × 64 pixels contient 13 bandes spectrales. Le travail s’appuie sur un notebook de cours pour étudier l’apprentissage supervisé avec un protocole d’évaluation géographique.',
      work: 'Dans ce travail en équipe, nous avons exploré les images, vérifié les copies exactes et extrait la moyenne et l’écart-type de chaque bande. Nous avons associé StandardScaler à une forêt de 200 arbres, comparé quatre configurations sur validation, puis réajusté la pipeline sur apprentissage et validation. Nous avons étudié les importances par permutation et les erreurs de classification.',
      result: 'Sur les 5 528 patches du test spatial, le modèle obtient 84,15 % d’accuracy et 0,836 de F1 macro, contre 10,35 % d’accuracy pour la référence majoritaire. L’intervalle à 95 % du F1 macro est [0,786 ; 0,865], estimé par 1 000 rééchantillonnages de blocs spatiaux. Le dépôt conserve le notebook, ses sorties, les prédictions et les paramètres de normalisation.',
      deepDive: [
        { title: 'Évaluation spatiale', text: 'Des blocs géographiques de 50 km et une distance minimale de 2 km entre les centres des patches d’ensembles différents réduisent la proximité spatiale. Après les exclusions de la zone tampon : 16 995 patches d’apprentissage, 4 144 de validation et 5 528 de test. Le normaliseur est ajusté sur les données d’apprentissage de chaque étape, sans le test.' },
        { title: 'Erreurs et interprétation', text: 'SeaLake et Forest obtiennent les meilleurs F1 : 0,997 et 0,972. Highway est la classe la plus difficile, avec un F1 de 0,596. AnnualCrop et PermanentCrop sont confondues dans 74 patches dans chaque sens. Les statistiques spectrales perdent la géométrie des objets, ce qui peut contribuer aux erreurs.' },
        { title: 'Portée et suites', text: 'La prédiction attribue une étiquette à un patch entier. Les résultats concernent ce découpage géographique ; une autre région ou date nécessite une évaluation indépendante. Le test ayant déjà été consulté, la réévaluation avec normalisation ne constitue pas une validation indépendante. Les suites envisagées sont les indices spectraux, les textures et un réseau convolutif, suivis d’un nouveau test final.' }
      ],
      captions: ['Exemples EuroSAT : AnnualCrop, Forest et HerbaceousVegetation, avec contraste ajusté pour l’affichage.', 'Accuracy et F1 macro avec intervalles à 95 % par rééchantillonnage des blocs spatiaux.', 'Matrices de confusion du test : effectifs et proportions par vraie classe.'],
      colabLabel: 'Ouvrir dans Colab'
    },
    es: {
      type: 'TELEDETECCIÓN · 2026',
      title: 'EuroSAT · Clasificación de cobertura del suelo',
      description: 'Clasificación de diez coberturas del suelo en imágenes Sentinel-2 mediante 26 estadísticas espectrales y Random Forest. Test espacial: 84,15 % de exactitud y 0,836 de F1 macro.',
      context: 'Este proyecto académico en equipo utiliza 27.000 imágenes satelitales EuroSAT para predecir una de diez clases de cobertura del suelo. Cada imagen de 64 × 64 píxeles contiene 13 bandas espectrales. Partimos de un notebook docente para estudiar aprendizaje supervisado con un protocolo de evaluación geográfico.',
      work: 'En este trabajo en equipo, exploramos las imágenes, comprobamos duplicados exactos y calculamos la media y la desviación estándar de cada banda. Combinamos StandardScaler con un Random Forest de 200 árboles, comparamos cuatro configuraciones en validación y reajustamos la pipeline con entrenamiento y validación. Analizamos la importancia por permutación y los errores de clasificación.',
      result: 'En las 5.528 imágenes del test espacial, el modelo obtuvo un 84,15 % de exactitud y un F1 macro de 0,836, frente al 10,35 % de exactitud de la referencia mayoritaria. El intervalo al 95 % del F1 macro es [0,786; 0,865], estimado con 1.000 remuestreos de bloques espaciales. El repositorio incluye el notebook, sus salidas, predicciones y parámetros de normalización.',
      deepDive: [
        { title: 'Evaluación espacial', text: 'Usamos bloques geográficos de 50 km y una distancia mínima de 2 km entre los centros de imágenes de conjuntos distintos. Después de las exclusiones de la zona de separación quedan 16.995 imágenes de entrenamiento, 4.144 de validación y 5.528 de test. El normalizador se ajusta con los datos de entrenamiento de cada etapa, excluyendo el test.' },
        { title: 'Errores e interpretación', text: 'SeaLake y Forest alcanzaron los mejores F1: 0,997 y 0,972. Highway fue la clase más difícil, con un F1 de 0,596. AnnualCrop y PermanentCrop se confundieron en 74 imágenes en cada sentido. Las estadísticas espectrales pierden la geometría de los objetos, lo que puede contribuir a estos errores.' },
        { title: 'Alcance y próximos pasos', text: 'Se asigna una etiqueta a cada imagen completa. Los resultados corresponden a esta separación geográfica; otras regiones o fechas necesitan evaluación independiente. El test ya se había consultado antes, por lo que la reevaluación con normalización no constituye una validación independiente. Como siguientes pasos se proponen índices espectrales, texturas y una red convolucional, con un nuevo test final.' }
      ],
      captions: ['Ejemplos EuroSAT: AnnualCrop, Forest y HerbaceousVegetation, con contraste ajustado para su visualización.', 'Exactitud y F1 macro con intervalos al 95 % mediante remuestreo de bloques espaciales.', 'Matrices de confusión del test: cantidades y proporciones por clase real.'],
      colabLabel: 'Abrir en Colab'
    }
  };

  for (const lang of ['en', 'fr', 'es']) {
    const { captions, colabLabel, ...content } = translations[lang];
    const images = ['assets/eurosat-patches-rgb.png', 'assets/eurosat-test-metrics.png', 'assets/eurosat-confusion-matrix.png']
      .map((src, index) => ({ src, caption: captions[index] }));
    const project = {
      id: 'eurosat',
      category: 'vision',
      ...content,
      tech: ['Python', 'scikit-learn', 'Random Forest', 'Sentinel-2'],
      image: images[0].src,
      imageAlt: images[0].caption,
      images,
      links: [['GitHub', repository], [colabLabel, colab]]
    };
    const projects = copy[lang].projects;
    projects.splice(projects.findIndex(item => item.id === 'vis-swir') + 1, 0, project);
  }
})();
