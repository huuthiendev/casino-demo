import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectJackpotsData } from '../features/jackpot';

const ImageContainer = styled.div`
  padding: 32px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GameButton = styled.button`
  padding: 7px 24px;
  position: absolute;
  bottom: 60px;
  left: 100px;
  background-color: #8dc63f;
  border-radius: 16px;
  border: none;
  color: #fcfcfc;
  display: none;
`;

const GameName = styled.span`
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fcfcfc;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  width: 88%;
  display: none;
`;

const ImageBox = styled.div`
  padding: 7px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &:hover ${GameButton} {
    display: block;
  }

  &:hover ${GameName} {
    display: block;
  }
`;

const Image = styled.img`
  border-radius: 16px;
`;

const Ribbon = styled.span`
  width: 200px;
  padding: 5px;
  position: absolute;
  text-align: center;
  color: #f0f0f0;
  top: 14px;
  right: -70px;
  transform: rotate(45deg);
  background-color: #8dc63f;
`;

const JackpotNumber = styled.div`
  position: absolute;
  padding: 10px;
  width: 88%;
  text-align: center;
  color: #fcfcfc;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const getRibbonName = (game) => {
  return game.categories.includes('new') ? 'New' : game.categories.includes('top') ? 'Top' : null;
};

const getJackpot = (jackpots, game) => {
  const jackpotItem = jackpots.find((jackpot) => jackpot.game === game.id);
  return jackpotItem ? jackpotItem.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : null;
};

const GameContainer = ({ games, isShowRibbon }) => {
  const jackpots = useSelector(selectJackpotsData);

  return (
    <ImageContainer>
      {games.map((game) => (
        <ImageBox key={game.id}>
          {getJackpot(jackpots, game) && <JackpotNumber>${getJackpot(jackpots, game)}</JackpotNumber>}
          <Image src={game.image} alt={game.id} />
          {isShowRibbon && getRibbonName(game) && <Ribbon>{getRibbonName(game)}</Ribbon>}
          <GameName>{game.name}</GameName>
          <GameButton>Play</GameButton>
        </ImageBox>
      ))}
    </ImageContainer>
  );
};

export default GameContainer;
