import "./App.css";
import {
  Navbar,
  Intro,
  Companies,
  Services,
  Testimonials,
  Faq,
  Portfolio,
} from "./container";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Companies />
      <Services />
      <Testimonials />
      <Faq />
      <Portfolio />
    </>
  );
}

export default App;
