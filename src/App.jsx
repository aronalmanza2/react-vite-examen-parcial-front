import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container my-4">
      <header className="mb-4 text-center">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://vite.dev " target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="img-fluid"
              width="150"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={reactLogo}
              className="img-fluid"
              width="150"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="display-5 fw-bold">Vite + React</h1>
      </header>

      <section className="text-center">
        <button
          className="btn btn-primary btn-lg mb-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>

      <footer className="mt-4 text-center text-muted">
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </main>
  );
}

export default App;
