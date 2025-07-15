import Categories from "./components/categories";
import Companies from "./components/companies";
import Header from "./components/header";
import Hero from "./components/hero";
import Instructions from "./components/Instructions";
import Invesment from "./components/Invesment";
import News from "./components/news";
import Opportunities from "./components/opportunities";
import Events from "./components/events";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Invesment />
      <Instructions />
      <Categories />
      <Companies />
      <Opportunities />
      <News />
      <Events />
    </>
  );
}
export default App;
