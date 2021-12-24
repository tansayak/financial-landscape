import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import globalStyles from '../css/global.module.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Survey({ children }) {

  const {isDarkTheme} = useThemeContext()

  const theme = createTheme({
    palette: isDarkTheme
    ? {
        mode: 'dark',
        primary: {
          main: globalStyles.darkPrimary,
        },
        secondary: {
        main: globalStyles.darkSecondary,
      },
    }
  : {
      mode: 'light',
      primary: {
        main: globalStyles.lightPrimary,
      },
      secondary: {
        main: globalStyles.lightSecondary,
      },
    },
    typography: {
      fontFamily: ['Athiti'],
    },
  })

  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )

}