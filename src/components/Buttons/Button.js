import React from 'react';
import ButtonStyle from './Button.style';
<<<<<<< HEAD
import { FormattedMessage } from 'react-intl';
=======
//import { FormattedMessage } from 'react-intl';
>>>>>>> master

const Button = ({
  type,
  size,
  title,
  intlButtonId,
  colors,
  variant,
  icon,
  disabled,
  iconPosition,
  iconStyle,
  onClick,
  loader,
  loaderColor,
  isLoading,
  className,
  fullwidth,
  style,
  ...props
}) => {
  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (
      <>{loader ? loader : 'loading....'}</>
    ) : (
      icon && (
        <span className='btn-icon' style={iconStyle}>
          {icon}
        </span>
      )
    );

  // set icon position
  const position = iconPosition || 'right';

  return (
    <ButtonStyle
      type={type}
      className={`reusecore__button ${disabled ? 'disabled' : ''} ${
        isLoading ? 'isLoading' : ''
      } ${className ? className : ''}`.trim()}
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      colors={colors}
      variant={variant}
      fullwidth={fullwidth}
      style={style}
      size={size}
      {...props}
    >
      {position === 'left' && buttonIcon}
      {title && !isLoading && (
        <span className='btn-text'>
<<<<<<< HEAD
          <FormattedMessage
            id={intlButtonId ? intlButtonId : 'intlButtonId'}
            defaultMessage={title}
          />
=======
          <div id={intlButtonId ? intlButtonId : 'intlButtonId'} >
          {title}
            </div>
>>>>>>> master
        </span>
      )}
      {position === 'right' && buttonIcon}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button',
};

export default Button;
