import "./App.css";
import Calendar from "./components/Calendar";
import Tamplate from "./components/Tamplate";
import CalendarProvider from "./providers/CalendarProvider";

function App() {
  return (
    <>
      <CalendarProvider>
        <Tamplate>
          <Calendar />
        </Tamplate>
      </CalendarProvider>
    </>
  );
}

export default App;
