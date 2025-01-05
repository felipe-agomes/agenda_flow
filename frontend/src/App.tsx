import "./App.css";
import CalendarPage from "./components/CalendarPage";
import Tamplate from "./components/Tamplate";
import CalendarProvider from "./providers/CalendarProvider";
import TamplateProvider from "./providers/TamplateProvider";

function App() {
  return (
    <>
      <TamplateProvider>
        <Tamplate>
          <CalendarProvider>
            <CalendarPage />
          </CalendarProvider>
        </Tamplate>
      </TamplateProvider>
    </>
  );
}

export default App;
