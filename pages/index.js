import Head from "next/head";
import { Box } from "@chakra-ui/react";
import PokeList from "../components/PokeList";
import Score from "../components/Score";
import Question from "../components/Question";
import Actions from "../components/Actions";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>PokeQuiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" pb={8}>
        <Score />
        <Question />
        <PokeList />
        <Actions />
      </Box>
    </Box>
  );
}
