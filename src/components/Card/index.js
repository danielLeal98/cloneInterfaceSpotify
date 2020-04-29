import React from 'react';
import {Container,Photo, ContainerSubtitle,SubTitleTitle,SubTitleDescription} from './styles';

const Card = ({item}) => {

  return (
    <Container>
      <Photo source={{uri: item.photo}} />
        <ContainerSubtitle>
          <SubTitleTitle>{item.subtitle.title}</SubTitleTitle>
          <SubTitleDescription>{item.subtitle.description}</SubTitleDescription>
        </ContainerSubtitle>
    </Container>
  );
};

export default Card;