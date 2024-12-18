import "@/App.css";
//@ts-ignore
import Foo from "@/components/foo";
import ComponentCollection from "@/routes/component-collection";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/routes/home";
import Learn from "@/routes/learn";
import Dictionary from "@/routes/dictionary";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Leaderbord from "./routes/leaderboard";
import Categories from "./routes/categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider
          defaultTheme="dark"
          storageKey="vite-ui-theme"
        >
          <Navbar>
            <Routes>
              <Route
                index
                element={<Home />}
              />

              <Route
                path="components"
                element={<ComponentCollection />}
              />

              <Route
                path="learn"
                element={<Learn />}
              />

              <Route
                path="dictionary"
                element={<Dictionary />}
              />

              <Route
                path="leaderboard"
                element={<Leaderbord />}
              />

              <Route
                path="categories"
                element={<Categories />}
              />
            </Routes>
          </Navbar>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
