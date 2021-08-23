import { SimpleGrid, Center } from "@chakra-ui/react";
import { useContext } from "react";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import Pokemon from "./Pokemon";
import { PokemonContext } from "../context/PokemonContext";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function PokeList() {
  const { randNums } = useContext(PokemonContext);
  const allData = randNums.map((num) => {
    const { data } = useSWR(
      `https://pokeapi.co/api/v2/pokemon/${num}`,
      fetcher
    );
    return data;
  });

  return (
    <Center>
      <SimpleGrid columns={[1, 1, 2, 2]} mx={20} my={8} spacing={5} maxW="xl">
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            {allData[0] &&
              allData[1] &&
              allData[2] &&
              allData[3] &&
              allData.map((datum, i) => (
                <Pokemon pokemon={datum} index={i} key={i} />
              ))}
          </AnimateSharedLayout>
        </AnimatePresence>
      </SimpleGrid>
    </Center>
  );
}
