// src/components/About/About.js

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import { ReactComponent as MediumIcon } from '../../img/medium.svg'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitterX && (
              <a
                href={social.twitterX}
                aria-label='twitterX'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <XIcon />
              </a>
            )}

            {social.medium && (
              <a
                href={social.medium}
                aria-label='medium'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MediumIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
