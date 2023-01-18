import React, { useState } from 'react';

import './Card.scss';
import getPosInSpellCasesArray from '../../utils/getPos';

export type CardProps = {
  tasteName: string;
  quantityInPack: number;
  giftNumber:number;
  weight:number;
  units: string;
  disabled?: boolean;
  labelSelected:string;
}

const Card = (props:CardProps) => {
  const { tasteName, quantityInPack,giftNumber,weight,units,disabled,labelSelected } = props;
  const cardClass = disabled ? "card card_disabled": "card";
  const header = 'Сказочное заморское яство';
  const giftSpellCases = ['мышь','мыши','мышей'];
  const quantitySpellCases = ['порция','порции','порций'];
  const editedWeight = weight < 1 ? `0,${String(weight).split('.')[1]}` : weight;
  const [selected, setSelected] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseLeave, setMouseLeave] = useState(true);
  const mainClass = disabled ? 'card__main card_disabled' : (selected && mouseLeave) ? 'card__main card_selected' : 'card__main';
  const weightClass = disabled ? 'card__weight card_disabled' : (selected && mouseLeave) ? 'card__weight card_selected' : 'card__weight';
  const plugClass = disabled ? 'card__plug card_disabled' :  (selected && mouseLeave) ? 'card__plug card_selected' : 'card__plug';
  const triangleClass = disabled ? 'card__triangle-bottom-right card_disabled' : (selected && mouseLeave) ? 'card__triangle-bottom-right card_selected' : 'card__triangle-bottom-right';
  const curtainClass = disabled ? 'card__curtain card_disabled' : 'card__curtain'; 
  const curtainAdditionalClass = disabled ? 'card__additional-curtain card_disabled' : 'card__additional-curtain';
  const labelClass = disabled ? 'card__label card_disabled': 'card__label';
  const headerClass = disabled ? 'card__header card_disabled' : 'card__header';
  const headerLabelClass = disabled ? 'card__header-label card_disabled' : 'card__header-label';
  const label = 
    disabled
    ? <span>Печалька, с {tasteName} закончился.</span>
    : selected ? <span>{labelSelected}</span>: <span>Чего сидишь? Порадуй котэ,<i>купи.</i></span>;

  const handleCardClick = disabled ? () => {} : () => {
    const newState = !selected;
    setSelected(newState);
  }

  const handleOnMouseEnter = disabled ? () => {} : () => {
    const newState = !mouseEnter;
    setMouseEnter(newState);
    const newMouseLeave =  !mouseLeave;
    setMouseLeave(newMouseLeave);
  }

  const handleOnMouseLeave = disabled ? () => {} : () => {
    const newState = !mouseLeave;
    setMouseLeave(newState);
    const newStateEnter = !mouseEnter;
    setMouseEnter(newStateEnter);
  }

  return( 
  <div 
    className={cardClass} 
    onClick={handleCardClick} 
    onMouseLeave={handleOnMouseLeave}
    onMouseEnter={handleOnMouseEnter}
  > 
    <div className={curtainClass}></div>
    <div className={curtainAdditionalClass}></div>
    <div className="card__wrapper">
      <div className={plugClass}>
        <div className="card__triangle">
          <div className={triangleClass}></div>
        </div>
      </div>
      <div className={mainClass}>
        <h3 className="card__sub-header">{header}</h3>
        <h2 className={headerClass}>
          Нямушка
        </h2>
        <span className={headerLabelClass}>
          {`с ${tasteName}`}
          <br></br>
        </span>
        <div className="card__remained">
          {`${quantityInPack} ${quantitySpellCases[getPosInSpellCasesArray(quantityInPack)]}`}
        </div>
        <div className="card__gift">
          {`${giftNumber===1?'':giftNumber} ${giftSpellCases[getPosInSpellCasesArray(giftNumber)]} в подарок`}
        </div>
        <div className="card__gift-extra">{giftNumber>=5?'заказчик доволен':''}</div>
      </div>
    </div>
    <div className={labelClass}>{label}</div>
    <div className="card__image"></div>
    <div className={weightClass}>
      <div className="card__weight-number">{editedWeight}</div>
      <div className="card__weight-units">{units}</div>
    </div>
  </div>)
}

export default Card;