import AnimatePage from "./AnimatePage";
import "../Styles/Home.css";
import Git from "../Assets/Icons/gitWHITEOUTLINE.png"

function Home() {
  return (
    <AnimatePage>
      <div className="home">
        <div>
          <h1 className="store-name">
            <i>TURISMO DEALERSHIP</i>
          </h1>
          <p className="home-description">
            <i>Everything the racing enthusiast needs in one shop!</i>
          </p>
        </div>
        <footer>
          Created February 2023 by Applefrittr
          <a
            href="https://github.com/Applefrittr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="GitHub Applefrittr" />
          </a>
        </footer>
      </div>
    </AnimatePage>
  );
}

export default Home;
