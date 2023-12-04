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
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
