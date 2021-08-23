import { Box, Image, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { motion } from "framer-motion";
import { MdCheckCircle, MdCancel } from "react-icons/md";

const MotionBox = motion(Box);

export default function Pokemon({ pokemon, index }) {
  const { selected, setSelected, wasAnswered, correctPokemon } =
    useContext(PokemonContext);

  const isSelected = () => {
    if (!wasAnswered) setSelected(pokemon.name);
  };

  return (
    <Box w="278px" h="278px">
      <MotionBox
        as="section"
        boxShadow="md"
        p={4}
        bg="white"
        rounded="sm"
        position="relative"
        onClick={isSelected}
        display="block"
        w="100%"
        h="100%"
        custom={index}
        initial={{ x: -40, opacity: 0 }}
        animate={(custom) => ({
          x: 0,
          transition: { delay: custom * 0.065, duration: 0.4 },
          opacity: 1,
        })}
      >
        {selected === pokemon.name && (
          <MotionBox
            position="absolute"
            borderWidth="4px"
            borderColor={
              (wasAnswered &&
                correctPokemon.name === pokemon.name &&
                "blue.300") ||
              (wasAnswered &&
                correctPokemon.name !== pokemon.name &&
                "red.300") ||
              "black"
            }
            borderStyle="solid"
            layoutId="selectedBorder"
            key="border"
            inset="-1px"
            zIndex={100}
            transition={{ type: "spring", stiffness: 700, damping: 70 }}
          ></MotionBox>
        )}

        <Image
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default
          }
          draggable="false"
          alt={`random pokemon ${index + 1}`}
        />
        {wasAnswered && correctPokemon.name === pokemon.name && (
          <Icon
            as={MdCheckCircle}
            position="absolute"
            fontSize={32}
            bottom={2}
            left={2}
            color="blue.600"
            bg="white"
          />
        )}
        {wasAnswered && correctPokemon.name !== pokemon.name && (
          <Icon
            as={MdCancel}
            position="absolute"
            fontSize={32}
            bottom={2}
            left={2}
            color="red.500"
            bg="white"
          />
        )}
      </MotionBox>
    </Box>
  );
}
