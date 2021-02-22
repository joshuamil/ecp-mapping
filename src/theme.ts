import { createTheme, createDarkTheme, lightThemePrimitives } from 'baseui'

const primitives = {
  primaryFontFamily: 'Circular STD',
  white: '#fff',
  accent100: '#5c3290',
  accent200: '#451b79',
  accent300: '#451b79',
}

const overrides = {
  colors: {
    headerNavigationFill: primitives.accent100,
    buttonPrimaryFill: primitives.accent100,
    buttonPrimaryHover: primitives.accent200,
    buttonPrimaryActive: primitives.accent300,
    linkText: lightThemePrimitives.mono900,
  },
  borders: {
    border200: {
      borderColor: primitives.white,
      borderWidth: '2px',
    },
  },
}

export const THEME = {
  light: 'light',
  dark: 'dark',
}

export const lightTheme = createTheme(primitives, overrides)
export const darkTheme = createDarkTheme(primitives, overrides)

const themeMap = {
  [THEME.light]: lightTheme,
  [THEME.dark]: darkTheme,
}

export const getTheme = (theme: string) => themeMap[theme]
