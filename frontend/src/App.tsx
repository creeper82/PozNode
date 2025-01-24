import { BrowserRouter, Route, Routes } from 'react-router';
import MainScreen from "./screens/main/MainScreen";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import StopScreen from "./screens/stop/StopScreen";

function App() {
  const [isDarkMode, setDarkMode] = useState((localStorage.getItem("PozNodeDarkMode") || "true") == "true");

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem("PozNodeDarkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);
  return (
    <>

      <BrowserRouter>
        <Header isDarkMode={isDarkMode} onDarkModeChanged={(m) => { setDarkMode(m == "dark"); }} />
        <Routes>
          <Route path="" element={<MainScreen />} />
          <Route path="/stop/:name" element={<StopScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
