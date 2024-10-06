import defaultTheme from './themes/defaultTheme';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import ultraSkyTheme from './themes/ultraSkyTheme';
import Theme from './constants/Theme';

const theme = {
  default: defaultTheme,
  dark: {
    ...defaultTheme,
    color: darkTheme,
  },
  light: {
    ...defaultTheme,
    color: lightTheme,
  },
  ultraSky: {
    ...defaultTheme,
    color: ultraSkyTheme,
  },
};

export default theme;
export const currentTheme = theme[Theme.CURRENT_THEME];
