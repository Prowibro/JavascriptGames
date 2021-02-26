import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

const HomeCard = (props: any) => {
  return (
    <Card
      className={`c-homeCard${props.className ? ` ${props.className}` : ''}`}
    >
      {props.children}
      <Link to={props.btnLinkTo}>
        <Button className="c-homeCard__bottom-btn">{props.btnChildren}</Button>
      </Link>
    </Card>
  );
};

export default HomeCard;
