import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const logo = "Your Name";
const links = ["blog", "projects", "about", "newsletter"];

const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // to add dark class to html document if the theme was dark and remove it if its not.
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="px-28 bg-white dark:bg-[#090D1F] text-[#1A1A1A] dark:text-white">
      <Header
        logo={logo}
        links={links}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="h-16 mb-[50px]"></div>

      <div className="h-100 mb-96"></div>

      {/* pages */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
