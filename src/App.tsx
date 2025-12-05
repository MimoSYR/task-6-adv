import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div
      className={`h-100 dark:bg-gray-900 bg-gray-100 flex text-gray-900 dark:text-gray-100`}>
      <div className="   text-8xl h-100 ">Hello Mimo!</div>
      {/* <button onClick={() => handleChangeTheme()}>Mode {theme}</button> */}
    </div>
  );
}

export default App;
