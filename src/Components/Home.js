import AnimatePage from "./AnimatePage";
import "../Styles/Home.css"

function Home() {
  return (
    <AnimatePage>
      <div className="home">
        <div>
          <h1 className="store-name"><i>TURISMO DEALERSHIP</i></h1>
          <p className="home-description"><i>Everything the racing enthusiast needs in one shop!</i></p>
        </div>
      </div>
    </AnimatePage>
  );
}

export default Home;
