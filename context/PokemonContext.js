import { createContext, useState } from "react";
import getAllRands from "../helpers/getAllRands";
import getRandRange from "../helpers/getRandRange";

const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [randPokemon, setRandPokemon] = useState([]);
  const [randNums, setRandNums] = useState(getAllRands(4, 1, 898));
  const [selected, setSelected] = useState("");
  const [picked, setPicked] = useState(getRandRange(0, randNums.length - 1));
  const [correctPokemon, setCorrectPokemon] = useState();
  const [wasAnswered, setWasAnswered] = useState(false);

  return (
    <PokemonContext.Provider
      value={{
        correct,
        setCorrect,
        wrong,
        setWrong,
        randPokemon,
        setRandPokemon,
        randNums,
        setRandNums,
        selected,
        setSelected,
        picked,
        setPicked,
        correctPokemon,
        setCorrectPokemon,
        wasAnswered,
        setWasAnswered,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
