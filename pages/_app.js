import { ChakraProvider } from "@chakra-ui/react";
import { PokemonContextProvider } from "../context/PokemonContext";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PokemonContextProvider>
        <Component {...pageProps} />
      </PokemonContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
