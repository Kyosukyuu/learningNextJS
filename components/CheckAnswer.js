import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export default function CheckAnswer() {
  const {
    selected,
    correctPokemon,
    correct,
    setCorrect,
    wrong,
    setWrong,
    wasAnswered,
    setWasAnswered,
  } = useContext(PokemonContext);

  const check = () => {
    if (selected === correctPokemon.name) setCorrect(correct + 1);
    else setWrong(wrong + 1);
    setWasAnswered(true);
  };

  return (
    <Button
      onClick={check}
      isDisabled={!selected || wasAnswered}
      colorScheme="blue"
      size="lg"
      aria-label="Confirm"
      title="Confirm"
    >
      Confirm
    </Button>
  );
}
