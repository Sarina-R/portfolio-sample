import "./App.css";
import {
  Navbar,
  Intro,
  Companies,
  Services,
  Testimonials,
  Faq,
  Portfolio,
  Getstart,
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
      <Getstart />
    </>
  );
}

export default App;
