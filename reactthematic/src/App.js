import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./components/Home";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
};

export default App;
