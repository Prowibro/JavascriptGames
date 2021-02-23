import React from 'react';

const Button = (props: any) => {
  return <button className={`c-btn${props.className ? ` ${props.className}` : ''}`}>{props.children}</button>;
};

export default Button;
