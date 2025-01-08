import './App.css';
import CalendarPage from "./shared/components/CalendarPage";
import Tamplate from "./shared/components/Tamplate";
import CalendarProvider from "./shared/providers/CalendarProvider";
import TamplateProvider from "./shared/providers/TamplateProvider";

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
