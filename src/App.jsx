import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";
import AboutPage from "./pages/AboutPage";
import DotGrid from "./background/DotGrid";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <div className="app">
      <div className="background-container">
        <DotGrid
          dotSize={5}
          gap={25}
          baseColor="#f5dcc3"
          activeColor="#5c4d41"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
