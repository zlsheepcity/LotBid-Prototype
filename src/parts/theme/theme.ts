/** MUI Theme Docs:
 *  https://mui.com/material-ui/customization/theming/
 */

export const theme = {
   palette: {
     primary: {
       main: 'hsl(195, 54%, 28%)',
     },
   },
  typography: {
    button: {
      // Disable default CAPITALIZE for buttons
      textTransform: 'none' as const
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        // Set default button look
        variant: 'outlined' as const
      },
      styleOverrides: {
        // Style configuration example
        // outlined: {
        //   backgroundColor: '#fff',
        // }
      }
    }
  }
};

export default theme
