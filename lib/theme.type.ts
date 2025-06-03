type Units = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type Colors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'focus'
  | 'disabled';
type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type FontSpace = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
type BorderWidth = 'b-1' | 'b-2' | 'b-3' | 'b-4';
type Durations =
  | 'ultraFast'
  | 'extraFast'
  | 'fast'
  | 'medium'
  | 'slow'
  | 'extraSlow'
  | 'ultraSlow';
type TimingFunctions =
  | 'linear'
  | 'ease'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'sharp'
  | 'smooth'
  | 'accelerate'
  | 'decelerate'
  | 'bounce';
type FontSize = Record<Units, string>;
type FontWeight = Record<'semiBold' | 'Bold', number>;
type LineHeight = Record<Units, number>;
type FontSpacing = Record<FontSpace, string>;
type BorderWidthObject = Record<BorderWidth, string>;
type BorderRadiusObject = Record<Units | 'none' | 'full', string>;
type DurationObject = Record<Durations, string>;
type TimingFuncObject = Record<TimingFunctions, string>;
export type ColorObject = Record<Colors, string>;
export type SpacingObject = Record<Space, string>;
export type TypographyObject = {
  fontSize: FontSize;
  fontFamily: string;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: FontSpacing;
  wordSpacing: FontSpacing;
};
export type ShadowObject = Record<Units | 'none', string>;
export type BorderObject = {
  borderWidth: BorderWidthObject;
  borderRadius: BorderRadiusObject;
  borderColor: ColorObject;
};
export type AnimationObject = {
  transitionDurations: DurationObject;
  transitionTimingFunctions: TimingFuncObject;
};

//base theme
export type SimLibTheme = {
  Typography: TypographyObject;
  Shadow: ShadowObject;
  Spacing: SpacingObject;
  Colors: ColorObject;
  Border: BorderObject;
  Animation: AnimationObject;
};
