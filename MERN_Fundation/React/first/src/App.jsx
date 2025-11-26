import "./App.css";
import ClickCounter from "./components/ClickCounter";
import DoubleTriple from "./components/DoubleTriple";
import SimpleToggleText from "./components/SimpleToggleText";
import LivePreviewInput from "./components/LivePreviewInput";
import ColorChanger from "./components/ColorChanger";
import IncreDecreByTwo from "./components/IncreDecreByTwo";
import FruitsList from "./components/FruitsList";
import MiniForm from "./components/MiniForm";
import ThemeToggle from "./components/ThemeToggle";
import ExpenseTracker from "./components/ExpenseTracker";
import PostReaction from "./components/PostReaction";
import FontSizeSlider from "./components/FontSizeSlider"
import AddRandomNumber from "./components/AddRandomNumber";

function App() {
  return (
    <div className="app-container">
      <section className="section">
        <ClickCounter />
      </section>
      <section className="section">
        <DoubleTriple />
      </section>
      <section className="section">
        <SimpleToggleText />
      </section>
      <section className="section">
        <LivePreviewInput />
      </section>
      <section className="section">
        <ColorChanger />
      </section>
       <section className="section">
        <IncreDecreByTwo />
      </section>
      <section className="section">
        <FruitsList />
      </section>
      <section className="section">
        <MiniForm />
      </section>
      <section className="section">
        <ThemeToggle />
      </section>
      <section className="section">
        <ExpenseTracker />
      </section>
      <section className="section">
        <PostReaction />
      </section>
      <section className="section">
        <FontSizeSlider />
      </section>
       <section className="section">
        <AddRandomNumber />
      </section>
    </div>
  );
}

export default App;
