import React, { Suspense } from "react";
import { useTheme } from "../context/ThemeContext";

const Services = React.lazy(() => import("./Services"));
const Team = React.lazy(() => import("./Team"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading Team...</div>}>
        <Team />
      </Suspense>
    </div>
  );
};

export default Home;
