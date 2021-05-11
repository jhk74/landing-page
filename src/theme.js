import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F24462"
        },
        secondary: {
            main: "#12181D"
        },
        tertiary: {
            main: "#4A535A"    
        }
    },
    background: {
        default: "#fff"
    },
    typography: {
        fontFamily: [
          'Inter'
        ]
    }
})

export default theme;