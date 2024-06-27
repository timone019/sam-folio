const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://timone019.github.io/samfolio',
  title: 'SM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sam My',
  role: 'Full Stack Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/sam-my-78934046',
    github: 'https://github.com/timone019/portfolio',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Must C Movies',
    screenshots: ['./img/MovieAppShot.png'],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['MERN:', 'MongoDB', 'Express', 'React', 'NodeJS'],
    sourceCode: 'https://github.com/timone019/movie_api-client',
    livePreview: 'https://mustcmovies.netlify.app/',
  },
  {
    name: 'Angular Movie App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['MEAN:', 'MongoDB', 'Express', 'Angular', 'NodeJS'],
    sourceCode: 'https://github.com/timone019/myFlix-Angular-client.git',
    livePreview: 'https://timone019.github.io/myFlix-Angular-client/',
  },
  {
    name: 'Chat City',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React-Native', 'Expo', 'FireStoreDB', 'FirebaseAuth+Cloud', 'Gifted-Chat-Library'],
    sourceCode: 'https://github.com/timone019/chat-app.git',
    livePreview: 'https://github.com/timone019/chat-app.git',
  },

  {
    name: 'The Link',
    description:
      'A serverless PWA meet app using Lambda AWS and Google API Calendar to search for upcoming events in different Cities worldwide',
    stack: ['React-Native', 'Expo', 'FireStoreDB', 'FirebaseAuth+Cloud', 'Gifted-Chat-Library', ],
    sourceCode: 'https://github.com/timone019/meet.git',
    livePreview: 'https://timone019.github.io/meet',
  },

  {
    name: 'Pok-dex App',
    description:
      'A serverless PWA meet app using Lambda AWS and Google API Calendar to search for upcoming events in different Cities worldwide',
    stack: ['React-Native', 'Expo', 'FireStoreDB', 'FirebaseAuth+Cloud', 'Gifted-Chat-Library', ],
    sourceCode: '  "https://github.com/timone019/Pok-dex.git',
    livePreview: 'https://timone019.github.io/Pok-dex',
  },
  {
    name: 'Coming Soon',
    description:
      'TBD',
    stack: ['React-Native', 'Expo', 'FireStoreDB', 'FirebaseAuth+Cloud', 'Gifted-Chat-Library', ],
    sourceCode: '  "https://github.com/timone019',
    livePreview: 'https://timone019.github.io',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'JQuery',
  'TypeScript',
  'React',
  'React-Bootstrap',
  'Redux',
  'NodeJS',
  'Express',
  'MongoDB',
  'REST API',
  'Mongoose',
  'React-Native',
  'Expo',
  'FireStoreDB',
  'FirebaseAuth+Cloud',
  'AWS',
  'Google Api',
  'SASS',
  'Angular Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'my.samnang@gmail.com',
}

export { header, about, projects, skills, contact }
