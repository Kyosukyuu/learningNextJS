import { Button, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import getAllRands from "../helpers/getAllRands";
import getRandRange from "../helpers/getRandRange";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function NextQuestion() {
  const {
    randNums,
    setRandNums,
    setPicked,
    setSelected,
    wasAnswered,
    setWasAnswered,
  } = useContext(PokemonContext);

  const getNextQuestion = () => {
    setRandNums(getAllRands(4, 1, 898));
    setPicked(getRandRange(0, randNums.length - 1));
    setSelected("");
    setWasAnswered(false);
  };

  return (
    <Button
      size="lg"
      onClick={getNextQuestion}
      colorScheme="purple"
      disabled={!wasAnswered}
      aria-label="Next"
      title="Next"
      rightIcon={<Icon as={MdKeyboardArrowRight} fontSize={32} />}
    >
      Next
    </Button>
  );
}
