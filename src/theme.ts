import { createTheme, createDarkTheme } from 'baseui'

const primitives = {
  primaryFontFamily: 'Avenir STD',
  white: '#fff',
  accent100: '#1270DE',
  accent200: '#14BEB4',
  accent300: '#8C8C8C',
}

const overrides = {
  colors: {
    headerNavigationFill: primitives.accent100,
    buttonPrimaryFill: primitives.accent100,
    buttonPrimaryHover: primitives.accent200,
    buttonPrimaryActive: primitives.accent300,
    linkText: primitives.accent100,
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
