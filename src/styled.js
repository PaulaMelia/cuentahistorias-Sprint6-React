import styled from "styled-components";

//ESTILOS
export const BordeFrase = styled.div`
  text-align: center;
  height: 1.5rem;
  align-items: center;
  color: #FFF5D6 ;
`;

export const Boton = styled.button`
  width: 50%;
  height: 3.7rem;
  border-radius: 0.7rem;
  background: #ffce33;
`;

export const TitleStyled = styled.h1`
  text-align: center;
  color: #900;
  text-decoration: underline;
`;

export const WelcomeStyled = styled.h4`
  text-aling: center;
  color: #fff9;
`;

export const WelcomeButton = styled.button`
  width: 50%;
  height: 3.7rem;
  border-radius: 1.5rem;
  background: #fff9;
`;
export const StyledBackground = styled.div`
  padding: 0.5rem;
  height: 100vh;
  background-image: url("${(props) => props.background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const WelcomeBackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://fondosmil.com/fondo/34253.jpg");
`;
