import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import SongSearch from "./components/SongSearch";
//import NestedSelects from "./components/NestedSelects";

function App() {
  return (
    <>
      <h1>React excercises</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      {/*<hr />
      <NestedSelects />*/}
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      </>
  );
}

export default App;
