import { HStack, Center } from "@chakra-ui/react";
import CheckAnswer from "./CheckAnswer";
import NextQuestion from "./NextQuestion";

export default function Actions() {
  return (
    <Center>
      <HStack spacing={10}>
        <CheckAnswer />
        <NextQuestion />
      </HStack>
    </Center>
  );
}
