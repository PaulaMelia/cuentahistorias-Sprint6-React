import "./escena.css";
import { BordeFrase } from "../../styled";
export const Escena = (props) => {
  console.log("______", props);

  const num = props.num;
  const frases = props.frases.map((frase, index) => (
    <p key={index} className={`${index === num ? "selected" : ``}`}>
      {frase.txt}
    </p>
  ));

  return <BordeFrase>{frases}</BordeFrase>;
};
