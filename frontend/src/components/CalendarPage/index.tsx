import Panel from "../Panel";
import "./CalendarPage.css";
import Calendar from "../Calendar";
import CalendarProvider from "../../providers/CalendarProvider";

export default function CalendarPage() {
  return (
    <section id="content">
      <CalendarProvider>
        <Calendar />
        <Panel />
      </CalendarProvider>
    </section>
  );
}
