import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeName')
    if (storedTheme) {
      setThemeName(storedTheme)
    } else {
      const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)')
      setThemeName(lightMediaQuery.matches ? 'light' : 'dark')
      lightMediaQuery.addEventListener('change', (e) => {
        setThemeName(e.matches ? 'light' : 'dark')
      })
    }
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }