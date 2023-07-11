import React from 'react';
import clsx from 'clsx';
import styles from './typography.module.scss';

type TypographyProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  preset:
    | 'heading-1'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'price-1'
    | 'price-2'
    | 'common-1';
  color: 'blacked' | 'darkgreyed' | 'greyed';
  align?: 'center' | 'left' | 'right';
  fontFamily: 'poppins' | 'object-sants';
  style?: React.CSSProperties;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  component = 'p',
  preset,
  color,
  align = 'left',
  fontFamily,
  style,
}) => {
  const className = clsx(
    styles[preset],
    styles[color],
    styles[align],
    styles[fontFamily]
  );
  return React.createElement(component, { style, className }, children);
};
export default Typography;
