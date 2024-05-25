import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, MainPage, PokemonInfo } from "pages";
import Example from "components/ClassComponet/ClasComponent";
function App() {
  const [ theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }
  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/example" element={<Example />} />
        <Route path="/:id" element={<PokemonInfo />} />
        </Routes>
    <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default App;
