import { GlobalContext } from "./context/GlobalContext";
import { GlobalState } from "./context/GlobalState";
import { Router } from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles";

function App() {
  const context = GlobalState();

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
