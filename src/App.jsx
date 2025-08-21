import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
function App() {
  let firstVariable = "World";
  const tellUsABout = () => {
    return "Good"
  };
  return (
    <div>
      <h1>Hello {firstVariable}</h1>
      <h2 style={{ color: "red" }}>{tellUsABout()}</h2>
      < FirstComponent>  </ FirstComponent>
      < SecondComponent>  </ SecondComponent>
      < ThirdComponent>  </ ThirdComponent>
      < FourthComponent>  </ FourthComponent>
      < FourthComponent />
      < FourthComponent />
      < FourthComponent />
    </div>
  );
}

export default App;
