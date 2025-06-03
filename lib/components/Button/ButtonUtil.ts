import { css } from '@emotion/react';

import type { SimLibTheme } from '../../theme.type';

// create seperae function for each style-based prop; created function to provide styles based on variant selected by the developer who will be using SimLib
function variantStyles(theme: SimLibTheme, variant: 'outlined' | 'filled') {
  switch (variant) {
    case 'outlined': {
      return css({
        backgroundColor: theme.Colors.primary,
        borderColor: theme.Border.borderColor.success,
        borderWidth: theme.Border.borderWidth['b-4'],
      });
    }
    case 'filled': {
      return css({
        backgroundColor: theme.Colors.secondary,
        borderColor: theme.Border.borderColor.focus,
      });
    }
  }
}

// returns => styles to be applied based on style-based props recieved from the component
export function getStyles(theme: SimLibTheme, variant: 'outlined' | 'filled') {
  return css([variantStyles(theme, variant)]);
}
