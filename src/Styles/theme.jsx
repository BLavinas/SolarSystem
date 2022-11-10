import { createTheme } from '@mui/material';

const themeOptions = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#20203f',
		},
		background: {
			default: '#111111',
			paper: '#212121',
		},
	},
	typography: {
		fontFamily: 'Open Sans',
		h1: {
			fontFamily: 'Ubuntu Mono',
		},
		h2: {
			fontFamily: 'Ubuntu Mono',
		},
		h3: {
			fontFamily: 'Ubuntu Mono',
		},
		h4: {
			fontFamily: 'Ubuntu Mono',
		},
		h6: {
			fontFamily: 'Ubuntu Mono',
		},
		h5: {
			fontFamily: 'Ubuntu Mono',
		},
		subtitle1: {
			fontFamily: 'Ubuntu Mono',
		},
		subtitle2: {
			fontFamily: 'Ubuntu Mono',
		},
		button: {
			fontFamily: 'Ubuntu Mono',
			fontWeight: 900,
		},
		overline: {
			fontFamily: 'Ubuntu Mono',
		},
	},
};

const theme = createTheme(
	themeOptions
);

export default theme;