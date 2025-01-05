import "./App.css";
import CalendarPage from "./components/CalendarPage";
import Tamplate from "./components/Tamplate";
import TamplateProvider from "./providers/TamplateProvider";

function App() {
  return (
    <>
      <TamplateProvider>
        <Tamplate>
          <CalendarPage />
        </Tamplate>
      </TamplateProvider>
    </>
  );
}

export default App;
