import React from 'react';
import Button from './Button';
import Card from './Card';

const HomeCard = (props: any) => {
  return (
    <Card
      className={`c-homeCard${props.className ? ` ${props.className}` : ''}`}
    >
      {props.children}
      <Button className="c-homeCard__bottom-btn"
      >{props.btnChildren}</Button>
    </Card>
  );
};

export default HomeCard;
