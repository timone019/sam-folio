import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {/* {project.screenshots && project.screenshots.length > 0 && (
  <img src={`${process.env.PUBLIC_URL}${project.screenshots[0]}`} alt={`${project.name} screenshot`} className='project__screenshot' />
)} */}

    {/* Render the first screenshot if available */}
    {project.screenshots && project.screenshots.length > 0 && (
      <img
        src={project.screenshots[0]}
        alt={`${project.name} screenshot`}
        className='project__screenshot'
      />
    )}
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
