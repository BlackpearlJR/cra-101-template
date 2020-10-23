const colors = {
  primary: {
    contrastText: '#ffffff',
    default: '#008F6B',
    light: '#a9d2c7',
    dark: '#186346',
    panel: '#DAE9E6'
  },
  secondary: {
    contrastText: '#333',
    default: '#FDE60C',
    light: '#fdf8bd',
    dark: '#a2811d',
    hover: '#FFEE4F',
    focus: '#EDD600'
  },
  success: {
    contrastText: '#fff',
    default: '#008F6B',
    light: '#66cc99'
  },
  info: {
    contrastText: '#fff',
    default: '#3080ed',
    light: '#89b4ef'
  },
  danger: {
    contrastText: '#fff',
    default: '#E74C3C',
    light: '#FCE5E5'
  },
  warning: {
    contrastText: '#fff',
    default: '#e37a00',
    light: '#FBEDDF'
  },
  gray: {
    default: '#686869',
    light: '#c7c7c7',
    dark: '#191e28'
  },
  gold: {
    default: '#b69034',
    light: '#e0ca93'
  },
  win: '#008F6B',
  lose: '#E84D4D'
};

const text = {
  color: {
    default: '#1F2532',
    dark: '#000',
    light: '#6e6d78',
    placeholder: '#ddd',
    inverse: '#fff'
  },
  title: {
    color: '#1F2532'
  },
  tab: {
    default: '#FFFFFF',
    active: colors.secondary.default
  }
};

const background = {
  body: '#dee0ea',
  main: '#f1f2f8',
  panel: '#fff',
  homeContent: colors.primary.default
};

const link = {
  color: {
    default: colors.info.default,
    hover: colors.info.default
  }
};

const borderColor = '#c9cee0';
const borderLightColor = '#eee';
const borderStyle = '1px solid';
const border = {
  default: `${borderStyle} ${borderColor}`,
  dark: `${borderStyle} ${text.color.dark}`,
  light: `${borderStyle} ${borderLightColor}`
  // primary: `${borderStyle} ${colors.primary.default}`,
  // success: `${borderStyle} ${colors.success.default}`
};

const theme = {
  colors,
  text,
  background,
  border,
  link
};

export default theme;
