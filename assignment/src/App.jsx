import Sidee from "./component/sidebar/Sidee";

import "./App.css";
import Checkbox from "./component/Multiplestep/Checkbox";

function App() {
 
  return (
    <>
      <div className="flex">
        <div className="container w-80">
          <Sidee />
        </div>
        <div className="multistepform py-24 px-10">
          <Checkbox/>
        </div>
      </div>
    </>
  );
}

export default App;
