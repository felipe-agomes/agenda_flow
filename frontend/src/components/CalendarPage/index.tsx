import Panel from "../Panel";
import "./CalendarPage.css";
import Calendar from "../Calendar";
import { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";

export default function CalendarPage() {
  const { setSelectedDay } = useContext(CalendarContext);

  const handleKeyDow = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      console.log("aqui");

      setSelectedDay(undefined);
    }
  };

  return (
    <section id="content" tabIndex={0} onKeyDown={handleKeyDow}>
      <Calendar />
      <Panel />
    </section>
  );
}
