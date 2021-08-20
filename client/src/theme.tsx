import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#004d40',
            light: '#39796b',
            dark: '#00251a',
            contrastText: '#fff'
        },
        secondary: {
            main: '#0d47a1',
            light: '#5472d3',
            dark: '#002171',
            contrastText: '#fff'
        },
    },
    spacing: 4,
    props: {
        MuiButton: {
            size: 'small',
        },
        MuiFilledInput: {
            margin: 'dense',
        },
        MuiFormControl: {
            margin: 'dense',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiListItem: {
            dense: true,
        },
        MuiOutlinedInput: {
            margin: 'dense',
        },
        MuiFab: {
            size: 'small',
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
        },
        MuiToolbar: {
            variant: 'dense',
        },
        MuiPaper: {
            square: true,
            variant: 'outlined'
        }
    }
});

export default theme;
