import React from "react";
import {
  WelcomeBackground,
  TitleStyled,
  WelcomeStyled,
  WelcomeButton,
} from "./../../styled";

export const Welcome = (props) => {
  return (
    <WelcomeBackground>
      <TitleStyled>Welcome!!</TitleStyled>
      <WelcomeStyled>Aquesta és la "història" d'un heroi</WelcomeStyled>
      <WelcomeButton onClick={props.onClick}>START</WelcomeButton>
    </WelcomeBackground>
  );
};
