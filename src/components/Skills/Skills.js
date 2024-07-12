import {
  FaReact,
  FaAngular,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaCogs,
  FaFire,
  FaAws,
  FaGoogle,
  FaSass,
  FaGitAlt,
  FaSync,
  FaVial,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaPalette,
} from 'react-icons/fa'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const skillIcons = {
  React: <FaReact className='icon-react' />,
  Angular: <FaAngular className='icon-angular' />,
  TypeScript: <FaJsSquare className='icon-js' />,
  'React-Native': <FaReact className='icon-react' />,
  'Angular Material UI': <FaPalette className='icon-palette' />,
  MUI: <FaPalette className='icon-palette' />,
  JavaScript: <FaJsSquare className='icon-js' />,
  'React-Bootstrap': <FaBootstrap className='icon-bootstrap' />,
  Redux: <FaJsSquare className='icon-js' />,
  NodeJS: <FaNodeJs className='icon-nodejs' />,
  Express: <FaJsSquare className='icon-js' />,
  MongoDB: <FaDatabase className='icon-database' />,
  PostgreSQL: <FaDatabase className='icon-database' />,
  'REST API': <FaCogs className='icon-cogs' />,
  Mongoose: <FaDatabase className='icon-database' />,
  Expo: <FaJsSquare className='icon-js' />,
  FireStoreDB: <FaFire className='icon-fire' />,
  'FirebaseAuth+Cloud': <FaFire className='icon-fire' />,
  'AWS Lambda': <FaAws className='icon-aws' />,
  'Google Api': <FaGoogle className='icon-google' />,
  SASS: <FaSass className='icon-sass' />,
  Git: <FaGitAlt className='icon-git' />,
  'CI/CD': <FaSync className='icon-sync' />,
  Jest: <FaVial className='icon-vial' />,
  HTML: <FaHtml5 className='icon-html5' />,
  CSS: <FaCss3Alt className='icon-css3' />,
  JQuery: <FaCode className='icon-code' />,
}

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skillIcons[skill]} {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
