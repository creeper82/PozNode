import { BrowserRouter, Route, Routes } from 'react-router';
import MainScreen from "./screens/MainScreen";
import { useEffect, useState } from "react";
import Header from "./components/Header";

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
        <div style={{ padding: "16px" }}>
          <Routes>
            <Route path="" element={<MainScreen />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
