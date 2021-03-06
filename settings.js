const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘
  
    // General
    name: 'Polifck',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: false,
  
    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',
  
    // Weather
    weatherKey: '4e178321f26fbd963a893751c286c4c3',
    weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'F', 'C'
    language: 'en', // More languages in https://openweathermap.org/current#multi
  
    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '37.775',
    defaultLongitude: '-122.419',
  
    // ┌─┐┌─┐┬─┐┌┬┐┌─┐
    // │  ├─┤├┬┘ ││└─┐
    // └─┘┴ ┴┴└──┴┘└─┘
  
    // Links
    cards: [
      {
        id: '1',
        name: 'Github',
        icon: 'github',
        link: 'https://github.com/Polifack',
      },
      {
        id: '2',
        name: 'Mail',
        icon: 'mail',
        link: 'https://mail.google.com/',
      },
      {
        id: '3',
        name: 'Youtube',
        icon: 'youtube',
        link: 'https://youtube.com',
      },
      {
        id: '4',
        name: 'Calendar',
        icon: 'calendar',
        link: 'https://calendar.google.com/calendar/r',
      },
      {
        id: '5',
        name: 'Reddit',
        icon: 'glasses',
        link: 'https://reddit.com',
      },
      {
        id: '6',
        name: 'News',
        icon: 'trello',
        link: 'https://publico.es/',
      },
    ],
  
    // ┬  ┬┌─┐┌┬┐┌─┐
    // │  │└─┐ │ └─┐
    // ┴─┘┴└─┘ ┴ └─┘
  
    //Icons
    firstListIcon: 'music',
    secondListIcon: 'coffee',
  
    // Links
    lists: {
      firstList: [
        {
          name: 'Outlook',
          link: 'https://www.outlook.com/',
        },
        {
          name: 'Overleaf',
          link: 'https://www.overleaf.com/project',
        },
        {
          name: 'CampusVirtual',
          link: 'https://campusvirtual.udc.gal/',
        },
      ],
      secondList: [
        {
          name: 'Linkedin',
          link: 'https://linkedin.com/',
        },
        {
          name: 'Figma',
          link: 'https://figma.com/',
        },
        {
          name: 'Dribbble',
          link: 'https://dribbble.com',
        },
        {
          name: 'Telegram',
          link: 'https://webk.telegram.org',
        },
      ],
    },
  };