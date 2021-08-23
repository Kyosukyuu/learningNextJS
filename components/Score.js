import { Heading, Center, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const MotionCenter = motion(Center);
const MotionHeading = motion(Heading);

export default function Score() {
  const { correct, wrong } = useContext(PokemonContext);

  return (
    <MotionCenter initial={{ y: -40 }} animate={{ y: 0 }}>
      <HStack
        as="header"
        bg="white"
        px={4}
        pb={2}
        pt={0}
        rounded="md"
        boxShadow="md"
        borderTopRadius="0"
      >
        <MotionHeading
          size="3xl"
          color="blue.500"
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, transition: { delay: 0.15 }, opacity: 1 }}
        >
          {correct}
        </MotionHeading>
        <MotionHeading
          size="3xl"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
        >
          -
        </MotionHeading>
        <MotionHeading
          size="3xl"
          color="red.600"
          initial={{ x: 5, opacity: 0 }}
          animate={{ x: 0, transition: { delay: 0.15 }, opacity: 1 }}
        >
          {wrong}
        </MotionHeading>
      </HStack>
    </MotionCenter>
  );
}
