import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import { ReactComponent as MediumIcon } from '../../img/medium.svg'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email && !contact.social) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {contact.email}
        </span>
      </a>

      {contact.social && (
        <div className='contact__social'>
          {contact.social.github && (
            <a
              href={contact.social.github}
              aria-label='github'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon />
            </a>
          )}

          {contact.social.linkedin && (
            <a
              href={contact.social.linkedin}
              aria-label='linkedin'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon />
            </a>
          )}

          {contact.social.twitterX && (
            <a
              href={contact.social.twitterX}
              aria-label='twitterX'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <XIcon />
            </a>
          )}

          {contact.social.medium && (
            <a
              href={contact.social.medium}
              aria-label='medium'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MediumIcon />
            </a>
          )}
        </div>
      )}
    </section>
  )
}

export default Contact
