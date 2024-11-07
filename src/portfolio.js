import vacio from './images/vacio.jpg'
import final from './images/final.jpg'
import dbquiz from './images/dbquiz.jpg'
import starwars from './images/starwars.jpg'
import aosCalculator from './images/aos-calculator.jpg'
import onboarding from './images/onboarding.jpg'

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
      'Dualcillo - Web oficial (en construcción) Desarrollo de la web para Dualcillo, influencer y corredor de ultra distancia. El sitio incluirá contenido exclusivo, actualizaciones de sus competencias y un espacio para interactuar con su comunidad.',
    image: vacio, // Usa la ruta desde public
    stack: ['Next', 'JS', 'Tailwind'],
    sourceCode: 'https://github.com/PascuFCalvo/VacioNextJS',
    livePreview: 'https://vacio-next-js.vercel.app',
  },
  {
    name: 'Star Wars scroll shooter',
    description:
      'Juego de "navecitas" en scroll lateral, desarrollado todo a base de HTML, JS y animaciones CSS',
    image: starwars, // Usa la ruta desde public
    stack: ['CSS', 'JS', 'HTML'],
    sourceCode: 'https://github.com/PascuFCalvo/star-wars-game',
    livePreview: 'https://star-wars-game-alpha.vercel.app',
  },
  {
    name: 'Plataforma de onboarding para empleados',
    description:
      'Gestiona la formacion de tus empleados, asignales cursos, documentación, gestión de firma electrónica y mucho mas.',
    image: onboarding, // Usa la ruta desde public
    stack: ['NODE', 'REACT', 'MySQL'],
    sourceCode: 'https://github.com/PascuFCalvo/obnoarding-module',
    livePreview: 'no disponible',
  },
  {
    name: 'StreamCash',
    description:
      'Creación de una plataforma que conecta marcas con streamers para gestionar campañas publicitarias, optimizando la selección y análisis de resultados en tiempo real.',
    image: final,
    stack: ['React', 'Redux', 'CSS'],
    sourceCode: 'https://github.com/PascuFCalvo/FInal_Geeks_23',
    livePreview: 'https://github.com/PascuFCalvo/FInal_Geeks_23',
  },
  {
    name: 'Quiz game',
    description:
      'Desarrollo de un módulo que permite crear un juego de preguntas y respuestas con almacenamiento de estado, permitiendo guardar el progreso del jugador y sus respuestas para continuar en cualquier momento.',
    image: dbquiz,
    stack: ['Redux', 'TS', 'React'],
    sourceCode: 'https://github.com/PascuFCalvo/DBQuiz',
    livePreview: 'https://db-quiz-seven.vercel.app',
  },
  {
    name: 'Calculadora de daño',
    description:
      'Desarrollo de una calculadora que permite a los jugadores de Age of Sigmar estimar el daño potencial de sus unidades, considerando factores como ataques, rend y salvación. La herramienta facilita el cálculo rápido durante las partidas.',
    image: aosCalculator,
    stack: ['JS', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/PascuFCalvo/listAnalizer',
    livePreview: 'https://list-analizer.vercel.app',
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
