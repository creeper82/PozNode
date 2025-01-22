import { BrowserRouter, Route, Routes } from 'react-router';
import MainScreen from "./screens/MainScreen";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
