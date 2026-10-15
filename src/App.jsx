
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between p-5 bg-black text-white relative">
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
            max-md:bg-black max-md:z-40
            md:flex md:flex-row md:items-center
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
        </ul>
      </nav>

      {/* Center Counter */}
      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold">Counter: {count}</h2>

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
