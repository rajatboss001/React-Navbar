
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  return (
    <div className="min-h-screen dark:bg-black bg-gray-100">
      <nav className="flex items-center dark:bg-black justify-between p-5 bg-medium-orchid text-white relative">
        <h1 className="text-2xl font-bold">Rajat</h1>

        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul
          className={`
            ${menuOpen ? "flex" : "hidden"}
            flex-col gap-6
            max-md:fixed max-md:top-0 max-md:right-0
            max-md:w-1/2 max-md:h-screen
            max-md:justify-center max-md:items-center
            bg-medium-orchid max-md:z-40 dark:bg-black
            md:flex md:flex-row md:items-center transition-all duration-600
          `}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-purple-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
          className="cursor-pointer rounded-full bg-amber-200 px-5 py-2 text-xl font-semibold text-gray-900 shadow-md transition-all duration-300 hover:bg-amber-300 hover:shadow-lg active:scale-95"
          onClick={toggleDarkMode}
        >
          🌙 Dark Mode
        </button>
        </ul>
      </nav>

      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold dark:text-white">Counter: {count}</h2>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-5 py-3 text-white"
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-gray-700 px-5 py-3 text-white"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-purple-600 px-5 py-3 text-white"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
