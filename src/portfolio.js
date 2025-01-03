// src/portfolio.js

import MovieAppShot from './img/MovieAppShot.png'
import AngularMovieAppShot from './img/angularMovieAppShot.png'
import chatAppBg from './img/chatAppBg.png'
import TheLinkScreenShot from './img/TheLinkScreenShot.png'
import pokedexScreenShot from './img/pokedexScreenShot.png'
import recipeScreenShot from './img/recipeDetailsScreenshot.png'
import bookstoreScreenShot from './img/bookstoreScreenshot.png'
import webAppScreenShot from './img/webappscreenshot.png'
import resume from './Files/SamMyResume.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://timone019.github.io/sam-folio',
  title: 'SM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sam My',
  role: 'Full Stack Developer',
  description: `Hi there! 👋

I'm a passionate developer who:

  • Thrives on creating seamless, user-friendly experiences and loves tackling complex problems
  
  • Excels at simplifying technical concepts, making them accessible to everyone
 
  • Enjoys connecting with others through technology and is always excited to learn and grow

Beyond the Code:

  • You'll find me outdoors, bike riding or hiking through scenic trails
  
  • I'm a huge sports enthusiast, especially when it comes to pro football—diving deep into fantasy football each season!
  
  • Whether analyzing stats or enjoying a game with friends, I bring the same enthusiasm to both sports and development
  
  • I believe in teamwork, strategy, and continuous improvement`,
  resume: [resume],
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Must C Movies',
    screenshots: [MovieAppShot],
    description:
      'The project aims to create a Full-Stack Movie web app that provides detailed movie information, user authentication, and personalized movie lists.',
    stack: ['MERN:', 'MongoDB', 'Express', 'React', 'NodeJS'],
    sourceCode: 'https://github.com/timone019/movie_api-client',
    livePreview: 'https://mustcmovies.netlify.app/',
  },
  {
    name: 'Angular Movie App',
    screenshots: [AngularMovieAppShot],
    description:
      'This is the Angular Movie App version which involes being responsive, enabling users to explore movie details, create accounts, and manage their favorite films with a seamless user experience',
    stack: ['MEAN:', 'MongoDB', 'Express', 'Angular', 'NodeJS'],
    sourceCode: 'https://github.com/timone019/myFlix-Angular-client.git',
    livePreview: 'https://timone019.github.io/myFlix-Angular-client/',
  },
  {
    name: 'Chat City',
    screenshots: [chatAppBg],
    description:
      'A mobile chat app using React Native, allowing users to chat, share images, and locations seamlessly on both Android and iOS devices.',
    stack: [
      'React-Native',
      'Expo',
      'FireStoreDB',
      'FirebaseAuth+Cloud',
      'Gifted-Chat-Library',
    ],
    sourceCode: 'https://github.com/timone019/chat-app.git',
    livePreview: 'https://github.com/timone019/chat-app.git',
  },

  {
    name: 'The Link',
    screenshots: [TheLinkScreenShot],
    description:
      'A serverless PWA meet app using Lambda AWS and Google API Calendar to search for upcoming events in different Cities worldwide',
    stack: ['PWA', 'React', 'Google Auth', 'AWS Lambda', 'Google Calendar API'],
    sourceCode: 'https://github.com/timone019/meet.git',
    livePreview: 'https://timone019.github.io/meet',
  },

  {
    name: 'Pok-dex App',
    screenshots: [pokedexScreenShot],
    description:
      'Pokédex app using HTML, CSS, and JavaScript with a search feature and modals for viewing Pokémon attributes, retrieving data from a Pokémon API',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/timone019/Pok-dex.git',
    livePreview: 'https://timone019.github.io/Pok-dex',
  },
  {
    name: 'Bookstore App',
    screenshots: [bookstoreScreenShot],
    description:
      'The Bookstore application provides comprehensive information on books, sales, and sales records',
    stack: ['Python, Django, PostgreSQL, HTML, CSS, JavaScript' ],
    sourceCode: 'https://github.com/timone019/Bookstore.git',
    livePreview: 'https://sleepy-island-60497-040803a19474.herokuapp.com',
  },
  {
    name: 'My Recipe App',
    screenshots: [recipeScreenShot],
    description:
      ' This app allows users to browse, search, and manage a collection of recipes. Users can add new recipes, view details, and edit existing ones',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/timone019/A2_Recipe_App.git',
    livePreview: 'https://timone019.pythonanywhere.com',
  },
  {
    name: 'Web App Template',
    screenshots: [webAppScreenShot],
    description:
      ' This app is a template for multipe apps from Ecommerce, Budget Tracker & Freelance Rate Calculator where within it has an invoice generator - pending backend template in progress ',
    stack: ['React', 'MUI', 'Typescript', 'JavaScript'],
    sourceCode: 'https://github.com/timone019/web-app-template.git',
    livePreview: 'https://timone019.github.io/web-app-template',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'Angular',
  'TypeScript',
  'React-Native',
  'Angular Material UI',
  'MUI',
  'JavaScript',
  'Python',
  'Django',

  'React-Bootstrap',
  'Redux',
  'NodeJS',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'SQLite',
  'REST API',
  'Mongoose',
  'Expo',
  'FireStoreDB',
  'FirebaseAuth+Cloud',
  'AWS Lambda',
  'Google Api',
  'SASS',
  'Git',
  'CI/CD',
  'Jest',
  'HTML',
  'CSS',
  'JQuery',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'my.samnang@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/mrsamman',
    github: 'https://github.com/timone019/portfolio',
    twitterX: 'https://x.com/mrsamman019',
    medium: 'https://medium.com/@my.samnang'
  },
}

export { header, about, projects, skills, contact }
