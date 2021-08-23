import { Center, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import useSWR from "swr";
import { PokemonContext } from "../context/PokemonContext";
import fetcher from "../helpers/fetcher";

export default function Question() {
  const { randNums, picked, correctPokemon, setCorrectPokemon } =
    useContext(PokemonContext);

  useSWR(`https://pokeapi.co/api/v2/pokemon/${randNums[picked]}`, fetcher, {
    onSuccess: (res) => setCorrectPokemon(res),
  });

  return (
    <Center>
      <Heading>
        Which Pokemon is{" "}
        {correctPokemon &&
          correctPokemon.name.replace(/^([a-z])/i, (char) =>
            char.toUpperCase()
          )}
        ?
      </Heading>
    </Center>
  );
}
