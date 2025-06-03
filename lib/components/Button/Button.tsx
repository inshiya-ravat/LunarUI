import Test from '../../assets/Test';
import { useSimLibTheme } from '../../hooks/theme';
import type { Component } from '../Component.type';

import { getStyles } from './ButtonUtil';

// to accept custom styling, extend the Component interface
interface ButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Component {
  variant: 'outlined' | 'filled';
}

// css prop is accepted here for providing custom styling
export const Button: React.FC<ButtonProp> = ({ variant, css, ...props }) => {
  // returns => updated theme based on defaultTheme and user provided theme
  const buttonTheme = useSimLibTheme();
  // returns => styles to be provided based on the varint selected by the user.
  const styles = getStyles(buttonTheme, variant);
  return (
    <button css={[styles, css]} {...props}>
      <Test />
    </button>
  );
};
