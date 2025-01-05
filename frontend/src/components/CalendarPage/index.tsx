import Panel from "../Panel";
import "./CalendarPage.css";
import Calendar from "../Calendar";
import { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import ModalTask from "../ModalTask";

export default function CalendarPage() {
  const { setSelectedDay, closeModalTask } = useContext(CalendarContext);

  const handleKeyDow = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setSelectedDay(undefined);
      closeModalTask();
    }
  };

  return (
    <section id="content" tabIndex={0} onKeyDown={handleKeyDow}>
      <Calendar />
      <Panel />
      <ModalTask />
    </section>
  );
}
