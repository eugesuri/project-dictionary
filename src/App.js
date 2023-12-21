import logo from "./dictionary.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          Coded by Eugenia Brunetti Ehnimb and is open-sourced on {""}
          <a
            href="https://github.com/eugesuri/app-dictionary"
            title="Eugenia Brunetti Github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on {""}
          <a
            href="https://app.netlify.com/sites/cosmic-zabaione-3f16cb/overview"
            title="Eugenia Brunetti netlify"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
