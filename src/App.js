import "./App.css";
import {
  Navbar,
  Intro,
  Companies,
  Services,
  Testimonials,
  Faq,
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
    </>
  );
}

export default App;
