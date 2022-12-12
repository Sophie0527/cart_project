const fontSize = {
  small: '14px',
  medium: '18px',
  medium_2: '20px',
  medium_3: '24px',
  medium_4: '30px',
  large: '40px',
  x_large: '68px',
};
const mobileFontSize = {
  small: '5px',
  medium: '7px',
  medium_2: '8px',
  medium_3: '9px',
  medium_4: '10px',
  large: '12px',
  x_large: '13px',
};
const fontWeight = {
  light: '300',
  regular: '400',
  regular_2: '500',
  regular_3: '600',
  bold: '700',
  bold_2: '900',
};
const colors = {
  white: '#FFFFFF',
  lt_gray: '#f2f2f2',
  gray: '#cecece',
  dark_gray: '#999',
  lt_black: '#595959',
  black: '#000000',
  red: '#f75151',
  lt_beige: '#eeeae5',
  beige: '#d2c8bd',
  camel: '#bb9477',
  brown: '#82593f',
  charcoal: '#1d1c1a',
};
const device = {
  galaxy_fold: `only screen and (max-width: 280px)`,
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
const theme = {
  fontSize,
  mobileFontSize,
  fontWeight,
  colors,
  device,
};

export default theme;
