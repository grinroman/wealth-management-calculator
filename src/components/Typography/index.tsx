import React from 'react';
import clsx from 'clsx';
import styles from './typography.module.scss';

type TypographyProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  preset:
    | 'heading-1'
    | 'heading-2'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'price-1'
    | 'price-2'
    | 'common-1';
  color: 'blacked' | 'darkgreyed' | 'greyed' | 'blued';
  align?: 'center' | 'left' | 'right';
  fontFamily: 'poppins' | 'object-sants';
  isUnderlined?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  component = 'p',
  preset,
  color,
  align,
  fontFamily,
  isUnderlined,
  style,
  className: classNameFromProps,
}) => {
  const className = clsx(
    styles[preset],
    styles[color],
    align && styles[align],
    isUnderlined && styles['isUnderlined'],
    styles[fontFamily],
    classNameFromProps
  );
  return React.createElement(component, { style, className }, children);
};
export default Typography;
