import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ghent" />
        <footer>
          This project was created by Priyal Patel and is{" "}
          <a
            href="https://github.com/ptl-ptl/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://gorgeous-faloodeh-4085b7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
