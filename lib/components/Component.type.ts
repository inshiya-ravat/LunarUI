import type { Interpolation, Theme } from '@emotion/react';

export interface Component {
  css?: Interpolation<Theme>;
}
