import "./App.css";
import CalendarPage from "./components/CalendarPage";
import Tamplate from "./components/Tamplate";
import CalendarProvider from "./providers/CalendarProvider";

function App() {
  return (
    <>
      <CalendarProvider>
        <Tamplate>
          <CalendarPage />
        </Tamplate>
      </CalendarProvider>
    </>
  );
}

export default App;
