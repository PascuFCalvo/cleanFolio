import vacio from './images/vacio.jpg'
import final from './images/final.jpg'
import dbquiz from './images/dbquiz.jpg'
import analizer from './images/analizer.jpg'
import aosCalculator from './images/aos-calculator.jpg'
import herocults from './images/herocults.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pascual',
  role: 'desarrollador web Full Stack',
  description:
    'Desarrollador web full stack con enfoque frontend. Me encanta meterme en proyectos que me pongan a prueba, siempre explorando nuevas tecnologías para mejorar y hacer cosas más eficientes y creativas.',
  resume:
    'https://www.linkedin.com/in/pascualfernandez/overlay/1635556155538/single-media-viewer/?profileId=ACoAAAR6S5QBT3jM6TK4DuS-joQS_PYXPCaHNBo',
  social: {
    linkedin: 'https://www.linkedin.com/in/pascualfernandez/',
    github: 'https://github.com/PascuFCalvo',
  },
}

const projects = [
  {
    name: 'Vacio',
    description:
      'Web para el influencer y corredor de ultra distancia, Dualcillo -en construcción-',
    image: vacio, // Usa la ruta desde public
    stack: ['Next', 'JS', 'Tailwind'],
    sourceCode: 'https://github.com/PascuFCalvo/VacioNextJS',
    livePreview: 'https://vacio-next-js.vercel.app',
  },
  {
    name: 'StreamCash',
    description:
      'Proyecto final del Bootcamp, simula una plataforma para gestionar publicidad con Streamers',
    image: final,
    stack: ['React', 'Redux', 'CSS'],
    sourceCode: 'https://github.com/PascuFCalvo/FInal_Geeks_23',
    livePreview: 'https://github.com/PascuFCalvo/FInal_Geeks_23',
  },
  {
    name: 'Quiz game',
    description:
      'Modulo para crear un juego de preguntas y respuesta con almacenamient de estado ',
    image: dbquiz,
    stack: ['Redux', 'TS', 'React'],
    sourceCode: 'https://github.com/PascuFCalvo/DBQuiz',
    livePreview: 'https://db-quiz-seven.vercel.app',
  },
  {
    name: 'Analizador de listas para AOS',
    description:
      'Analiza listas para el juego de tablero, AGE OF SIGMAR y hace una estimación de lo poderosa o débil que es',
    image: analizer, // Corrige "image" a "image"
    stack: ['JS', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/PascuFCalvo/listAnalizer',
    livePreview: 'https://list-analizer.vercel.app',
  },
  {
    name: 'Calculadora de daño',
    description: 'Calculadora de daño para el juego AGE OF SIGMAR',
    image: aosCalculator,
    stack: ['JS', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/PascuFCalvo/listAnalizer',
    livePreview: 'https://list-analizer.vercel.app',
  },
  {
    name: 'HeroCults JS',
    description:
      'Parodia del juego HeroQuest, que salio en españa bajo el nombre de HeroCults -en construcción-',
    image: herocults,
    stack: ['JS', 'CSS', 'React'],
    sourceCode: 'https://github.com/PascuFCalvo/herocultsGame',
    livePreview: 'https://herocults-game.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Google Cloud Platform',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pascual.fernandez.calvo@mail.com',
}

export { header, about, projects, skills, contact }
