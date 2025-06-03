import { useTheme } from '@emotion/react';

import { SimlibDefaultTheme } from '../../theme';
import type { SimLibTheme } from '../../theme.type';

// returns theme to be provided
export function useSimLibTheme(): SimLibTheme {
  const theme = useTheme();
  if (Object.entries(theme).length !== 0) {
    return { ...SimlibDefaultTheme, ...theme };
  }
  return SimlibDefaultTheme;
}
