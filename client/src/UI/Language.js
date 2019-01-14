
const Language = (lang) => {
  // console.log(lang)
  let Anglais = [
    {
      header: 'Select a lesson',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aspernatur accusantium quas earum atque, similique sunt magnam alias qui odit.'
    }
    , 
    [{

      lessons: 'Lesson One',
      featured: 'Featured Topic',
      title: 'Introduction',
      home: 'Zuhause',
      topic: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      lessons: 'Lesson Two',
      featured: 'Featured Topic',
      title: 'Basics',
      home: 'Zuhause',
      topic: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets'
    },
    {
      lessons: 'Lesson Three',
        featured: 'Featured Topic',
        title: 'Grammar Rules',
        home: 'Zuhause',
        topic: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets'
      }]
    
  ]


  let Francais = [
    {
      header: 'Choisir une leçon',
      description: 'Veuillez sélectionner une leçon pour commencer votre apprentissage linguistique.Vous pouvez commencer à partir de n importe quelle leçon que vous voulez.'
    },
    [{
      lessons: 'Lecon Un',
      featured: 'Subject Une Vendette',
      title: 'Introduction',
      home: 'Page d\'accueil',
      topic: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500 '
    },
    {
      lessons: 'Lecon Deux',
      featured: 'Subject Une Vendette',
      title: 'Les Bases',
      home: 'Page d\'accueil',
      topic: 'Quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n a pas fait que survivre cinq siècles.'
    },
    {
      lessons: 'Lecon Trois',
      featured: 'Subject Une Vendette',
      title: 'Les Regles de Grammaire',
      home: 'Page d\'accueil',
      topic: 'Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion.'
    }]
  ]

  let Espanol = [
    {
      header: 'Selecciona una lección ',
      description: 'Por favor, seleccione una lección para comenzar su aprendizaje de idiomas.Puedes empezar desde cualquier lección que quieras.'
    },
    [{
      lessons: 'Leccion Uno',
      featured: 'Teme Destacado',
      title: 'Introduccion',
      home: 'Página de inicio',
      topic: 'Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente.'
    },
    {
      lessons: 'Leccion Deux',
      featured: 'Teme Destacado',
      title: 'El Basico',
      home: 'Página de inicio',
      topic: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.'
    },
    {
      lessons: 'Leccion Tres',
      featured: 'Teme Destacado',
      title: 'Reglas Gramaticales',
      home: 'Página de inicio',
      topic: 'Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet.'
    }]
  ]

  let Deustchland = [
    {
      header: 'Selecteer een les ',
      description: 'Selecteer een les om te beginnen met het leren van uw taal.Je kunt beginnen met elke les die je wilt.'
      
    },
    [{
      lessons: 'Lektion Eins',
      featured: 'Vorgestelltes Thema',
      title: 'Einführung',
      home: 'Startpagina',
      topic: 'Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen.'
    },
    {
      lessons: 'Lektion Zwei',
      featured: 'Vorgestelltes Thema',
      title: 'Die Grundlagen',
      home: 'Startpagina',
      topic: 'Wenn du eine Passage des Lorem Ipsum nutzt, solltest du aufpassen dass in der Mitte des Textes keine ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorgefertigte Stücke zu wiederholen.'
    },
    {
      lessons: 'Lektion Drei',
      featured: 'Vorgestelltes Thema',
      title: 'Grammatik Regeln',
      home: 'Startpagina',
      topic: 'Wir nutzen ein Wörterbuch aus über 200 Lateinischen Wörter, kombiniert mit einer Handvoll Kunstsätzen, welche das Lorem Ipsum glaubwürdig macht. Das generierte Lorem Ipsum ist außerdem.'
    }]
  ]

  let Tagalog = [
    {
      header:'Pumili ng aralin',
      description: 'Mangyaring pumili ng aralin upang simulan ang pag - aaral ng iyong wika.Maaari mong simulan mula sa anumang aralin na gusto mo.'
    },
    [{
      lessons: 'Aralin Uno',
      featured: 'Tampok na Paksa',
      title: 'Aralin Panimula',
      home: 'Home',
      topic: 'Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s, noong may isang di kilalang manlilimbag and kumuha ng galley ng type at ginulo ang pagkaka-ayos nito upang makagawa ng libro ng mga type specimen.'
    },
    {
      lessons: 'Aralin Dalawa',
      featured: 'Tampok na Paksa',
      title: 'Pangunahing Kaalaman',
      home: 'Home',
      topic: 'Nalagpasan nito hindi lang limang siglo, kundi nalagpasan din nito ang paglaganap ng electronic typesetting at nanatiling parehas. Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum.'
    },
    {
      lessons: 'Aralin Tatlo',
      featured: 'Tampok na Paksa',
      title: 'Mga Panuntunan sa Grammar',
      home: 'Home',
      topic: 'Salungat sa kaalaman ng marami, ang Lorem Ipsum ay hindi puro walang kwentang salita lang. Umuugat ito sa klasikong literatura na Latin galing 45 BC, Pinpahiwatig na higit 2000 na ang taong gulang nito. Si Richard McClintock, isang Latin na propesor sa Hampden-Sydney College sa Viginia.'
    }]
  ]


  switch(lang){
    case 'Anglais':
      return Anglais;
    case 'Francais':
      return Francais;
    case 'Espanol':
      return Espanol;
    case 'Deutschland':
      return Deustchland;
    case 'Tagalog':
      return Tagalog;
    default: 
      return null
  }

}

export default Language
