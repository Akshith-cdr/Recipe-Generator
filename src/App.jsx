import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";
import AboutPage from "./pages/AboutPage";
import DotGrid from "./background/DotGrid";
import { Analytics } from "@vercel/analytics/react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isRecipeDetail = pathname.startsWith("/recipes/");
    const previousPath = sessionStorage.getItem("previousPath");

    if (isRecipeDetail && previousPath === "/recipes") {
      return;
    }

    window.scrollTo(0, 0);

    sessionStorage.setItem("previousPath", pathname);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
