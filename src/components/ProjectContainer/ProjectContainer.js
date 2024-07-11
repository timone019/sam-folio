import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  // Handler to navigate to the live preview page
  const navigateToLivePreview = () => {
   // Check if the event target is the container itself
  //  if (e.target === e.currentTarget) {
    window.open(project.livePreview, '_blank');
  // }
};

  return (
    <div
      className='project'
      role='link' // This role indicates the div acts as a link
      tabIndex='0' // This makes the div focusable
      onClick={navigateToLivePreview}
      onKeyPress={(e) => e.key === 'Enter' && navigateToLivePreview(e)} // Adding keyboard listener for accessibility
      style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
    >
      <h3>{project.name}</h3>

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

      <div onClick={(e) => e.stopPropagation()}
       onKeyPress={(e) => e.key === 'Enter' && e.stopPropagation()} // You might need to adjust this based on what you want to achieve with keyboard interactions
       role="presentation" // Adjust this role based on the actual semantics you need
     >

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(project.sourceCode, '_blank')
            }}
          >
            <GitHubIcon /> See Code
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(project.livePreview, '_blank')
            }}
          >
            <LaunchIcon /> See Live Site
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
