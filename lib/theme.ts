import type {
  AnimationObject,
  BorderObject,
  ColorObject,
  ShadowObject,
  SimLibTheme,
  SpacingObject,
  TypographyObject,
} from './theme.type';

export const Typography: TypographyObject = {
  fontSize: {
    xsmall: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    xlarge: '1.25rem',
  },
  fontFamily:
    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontWeight: {
    semiBold: 700,
    Bold: 900,
  },
  lineHeight: {
    xsmall: 1,
    small: 1.2,
    medium: 1.5,
    large: 1.75,
    xlarge: 1.95,
  },
  letterSpacing: {
    tighter: '-0.05rem',
    tight: '-0.025rem',
    normal: '0rem',
    wide: '0.025em',
    wider: '0.05rem',
  },
  wordSpacing: {
    tighter: '-0.75rem',
    tight: '-0.05rem',
    normal: '0rem',
    wide: '0.05rem',
    wider: '0.75rem',
  },
};

export const Shadow: ShadowObject = {
  none: 'none',
  xsmall: '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  small: '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.1) ',
  medium: '0 4px 6px -1px rgb(0 0 0 /0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xlarge:
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) ',
};

export const Spacing: SpacingObject = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
};

export const Colors: ColorObject = {
  default: '#CCCCCC',
  primary: '#005FCC',
  secondary: '#6c757d',
  danger: '#D32F2F',
  success: '#388E3C',
  focus: '#1976D2',
  disabled: '#E0E0E0',
};

export const Border: BorderObject = {
  borderWidth: {
    'b-1': '1px',
    'b-2': '2px',
    'b-3': '4px',
    'b-4': '8px',
  },
  borderRadius: {
    none: '0px',
    xsmall: '2px',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
    full: '9999px',
  },
  borderColor: Colors,
};

export const Animation: AnimationObject = {
  transitionDurations: {
    ultraFast: '50ms',
    extraFast: '100ms',
    fast: '150ms',
    medium: '200ms',
    slow: '300ms',
    extraSlow: '500ms',
    ultraSlow: '800ms',
  },
  transitionTimingFunctions: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
};

export const SimlibDefaultTheme: SimLibTheme = {
  Typography,
  Shadow,
  Spacing,
  Colors,
  Border,
  Animation,
};
